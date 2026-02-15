// Stesse keyword list dell'originale Python Guestore
const ITALIAN_WORDS = ['ciao', 'salve', 'buongiorno', 'buonasera', 'grazie', 'prego', 'dove', 'quando', 'come'];
const ENGLISH_WORDS = ['hello', 'hi', 'thank', 'please', 'where', 'when', 'how'];
const FRENCH_WORDS = ['bonjour', 'salut', 'merci', "s'il", 'vous', 'plaît', 'où', 'quand', 'comment'];

// Trigrammi piu' frequenti per lingua (replica di langdetect)
const TRIGRAMS = {
  it: ' di, de, la, il, re, to, in, el, le, co, on, ta, te, al, ti, no, ne, ra, ri, er, io, en, si, an, at, nt, ar, che, li, lo, pe, un, ni, ia, nd, se, na, ol, so, es, tt, zione, me, or, st, da, ue, ll, za, tu',
  en: ' th, he, in, er, an, re, on, en, at, ed, nd, ti, es, or, te, of, is, it, al, ar, st, to, nt, ng, se, ha, as, ou, io, le, ve, co, me, de, hi, ri, ro, ic, ne, ea, ra, ce, li, ch, ll, be, ma, si, om, ur',
  fr: ' de, es, le, en, re, nt, on, er, te, el, an, la, ti, io, ne, it, is, ou, et, se, ai, me, co, ns, ur, qu, pa, ra, ar, em, ce, ss, un, il, in, ie, st, ue, us, tr, ir, ui, no, ri, au, oi, nd, al, or, ec',
};

// Pre-processa i trigrammi in Set per lookup veloce
const TRIGRAM_SETS = {};
for (const [lang, str] of Object.entries(TRIGRAMS)) {
  TRIGRAM_SETS[lang] = new Set(str.split(', ').map(t => t.trim()));
}

function trigramDetect(text) {
  const lower = text.toLowerCase().replace(/[^a-zàáâãäåèéêëìíîïòóôõöùúûüçñ ]/g, '');
  if (lower.length < 3) return null;

  // Estrai trigrammi dal testo
  const textTrigrams = [];
  for (let i = 0; i <= lower.length - 3; i++) {
    textTrigrams.push(lower.substring(i, i + 3));
  }

  // Conta quanti trigrammi del testo sono nel profilo di ogni lingua
  let bestLang = null;
  let bestScore = 0;

  for (const [lang, trigramSet] of Object.entries(TRIGRAM_SETS)) {
    const score = textTrigrams.filter(t => trigramSet.has(t)).length;
    if (score > bestScore) {
      bestScore = score;
      bestLang = lang;
    }
  }

  return bestLang;
}

export function detectLanguage(text, siteLanguage) {
  const lower = text.toLowerCase();

  // Step 1: keyword matching (identico all'originale Python)
  const itCount = ITALIAN_WORDS.filter(w => lower.includes(w)).length;
  const enCount = ENGLISH_WORDS.filter(w => lower.includes(w)).length;
  const frCount = FRENCH_WORDS.filter(w => lower.includes(w)).length;

  if (itCount > enCount && itCount > frCount) return 'it';
  if (frCount > enCount && frCount > itCount) return 'fr';
  if (enCount > 0) return 'en';

  // Step 2: trigram detection (replica di langdetect)
  const detected = trigramDetect(text);
  if (detected) return detected;

  // Step 3: fallback alla lingua del sito
  return siteLanguage || 'en';
}

export function findBestMatch(userMessage, userLang, knowledgeBase) {
  const normalized = userMessage.toLowerCase().trim();

  let bestCategory = null;
  let maxMatches = 0;

  for (const [category, data] of Object.entries(knowledgeBase)) {
    if (category === 'fallback_responses') continue;

    const keywords = data.keywords || [];
    const matches = keywords.filter(kw => normalized.includes(kw)).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestCategory = category;
    }
  }

  if (bestCategory && maxMatches > 0) {
    const responses = knowledgeBase[bestCategory].responses;
    return responses[userLang] || responses['en'] || '';
  }

  return knowledgeBase.fallback_responses[userLang] ||
         knowledgeBase.fallback_responses['en'];
}

export function processMessage(userMessage, siteLanguage, knowledgeBase) {
  const userLang = detectLanguage(userMessage, siteLanguage);
  const response = findBestMatch(userMessage, userLang, knowledgeBase);
  return { response, detectedLanguage: userLang };
}
