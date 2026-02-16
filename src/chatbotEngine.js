// Indicatori linguistici - parole univoche per ogni lingua
const ITALIAN_INDICATORS = new Set([
  // Saluti e cortesia
  'ciao', 'salve', 'buongiorno', 'buonasera', 'buonanotte',
  'grazie', 'prego', 'scusa', 'scusate', 'favore',
  // Pronomi e dimostrativi
  'questo', 'questa', 'questi', 'queste',
  'quello', 'quella', 'quelli', 'quelle',
  // Articoli e preposizioni articolate (univoche IT)
  'gli', 'dei', 'del', 'della', 'dello', 'delle', 'degli',
  'nel', 'nella', 'nello', 'nelle', 'negli',
  'sul', 'sulla', 'sullo', 'sulle', 'sugli',
  'alla', 'allo', 'alle', 'agli',
  // Verbi comuni
  'sono', 'siamo', 'avete', 'potete', 'vorrei', 'posso', 'potrei',
  'hai', 'abbiamo', 'hanno', 'devo', 'puoi',
  // Parole interrogative
  'quanto', 'quanta', 'quanti', 'quante', 'cosa',
  'quale', 'quali', 'dove', 'quando',
  // Avverbi e parole comuni
  'anche', 'molto', 'bene', 'sempre', 'solo',
  'tutto', 'tutti', 'tutta', 'tutte', 'ogni',
  // Contrazioni
  "dov'è", "c'è", "com'è", "cos'è",
  // Parole specifiche B&B
  'stanza', 'notte', 'chiave', 'bagno', 'cucina', 'letto',
  'parcheggio', 'riscaldamento', 'asciugamani', 'lenzuola',
  'arrivare', 'partire', 'prezzo', 'indirizzo',
  'appartamento', 'ospiti', 'benvenuto', 'benvenuti',
]);

const ENGLISH_INDICATORS = new Set([
  // Greetings & courtesy
  'hello', 'hey', 'hi', 'thanks', 'thank', 'please',
  // Pronouns & demonstratives
  'this', 'that', 'these', 'those', 'there', 'their', 'theirs',
  'they', 'them', 'your', 'yours', 'our', 'ours', 'its', 'my',
  // Articles & prepositions
  'the', 'with', 'from', 'about', 'into', 'through', 'between',
  // Verbs
  'have', 'has', 'had', 'was', 'were', 'been', 'does', 'did',
  'would', 'could', 'should', 'can', 'will', 'shall', 'might',
  // Question words
  'what', 'which', 'whose', 'how', 'where', 'when', 'why',
  // Adverbs & common words
  'much', 'many', 'some', 'any', 'every', 'each', 'both',
  'and', 'but', 'not', 'yes', 'also', 'just', 'very',
  'already', 'still', 'yet', 'only', 'never',
  // B&B specific
  'room', 'towels', 'sheets', 'bathroom', 'kitchen', 'bed',
  'heating', 'arrive', 'leave', 'price', 'address', 'nearby',
  'welcome', 'guests', 'apartment',
]);

const FRENCH_INDICATORS = new Set([
  // Salutations et courtoisie
  'bonjour', 'bonsoir', 'merci', 'svp', 'salut',
  // Pronoms et démonstratifs
  'je', 'nous', 'vous', 'ils', 'elles',
  'mon', 'mes', 'ton', 'tes', 'ses',
  'votre', 'notre', 'leur', 'leurs',
  'cette', 'ces', 'cet',
  // Prépositions
  'dans', 'avec', 'pour', 'chez', 'depuis', 'entre', 'vers',
  // Verbes
  'suis', 'sommes', 'sont', 'ont', 'avez',
  'pouvez', 'puis', 'peux', 'peut', 'voudrais', 'dois',
  // Mots interrogatifs
  'pourquoi', 'combien', 'quel', 'quelle', 'quels', 'quelles',
  'quand', 'comment',
  // Adverbes et mots courants
  'aussi', 'beaucoup', 'bien', 'oui', 'mais', 'donc',
  'toujours', 'seulement', 'tout', 'tous', 'chaque',
  // Contractions
  "s'il", "j'ai", "j'aimerais", "qu'est-ce",
  // Mots spécifiques B&B
  'chambre', 'nuit', 'salle', 'serviettes', 'draps', 'lit',
  'chauffage', 'arriver', 'partir', 'prix', 'adresse',
  'bienvenue', 'appartement',
]);

// Trigrammi frequenti per lingua (fallback secondario)
const TRIGRAMS = {
  it: ' di, de, la, il, re, to, in, el, le, co, on, ta, te, al, ti, no, ne, ra, ri, er, io, en, si, an, at, nt, ar, li, lo, pe, un, ni, ia, nd, se, na, ol, so, es, tt, me, or, st, da, ll, za, tu',
  en: ' th, he, in, er, an, re, on, en, at, ed, nd, ti, es, or, te, of, is, it, al, ar, st, to, nt, ng, se, ha, as, ou, io, le, ve, co, me, de, hi, ri, ro, ic, ne, ea, ra, ce, li, ch, ll, be, ma, si, om, ur',
  fr: ' de, es, le, en, re, nt, on, er, te, el, an, la, ti, io, ne, it, is, ou, et, se, ai, me, co, ns, ur, qu, pa, ra, ar, em, ce, ss, un, il, in, ie, st, ue, us, tr, ir, ui, no, ri, au, oi, nd, al, or, ec',
};

const TRIGRAM_SETS = {};
for (const [lang, str] of Object.entries(TRIGRAMS)) {
  TRIGRAM_SETS[lang] = new Set(str.split(', ').map(t => t.trim()));
}

function extractWords(text) {
  const matches = text.toLowerCase().match(/[a-zàáâãäåèéêëìíîïòóôõöùúûüçñœæ']+/g);
  return matches ? new Set(matches) : new Set();
}

function trigramDetect(text) {
  const lower = text.toLowerCase().replace(/[^a-zàáâãäåèéêëìíîïòóôõöùúûüçñ ]/g, '');
  if (lower.length < 6) return null;

  const textTrigrams = [];
  for (let i = 0; i <= lower.length - 3; i++) {
    textTrigrams.push(lower.substring(i, i + 3));
  }

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
  const words = extractWords(text);

  // Step 1: keyword matching con set intersection
  let itScore = 0, enScore = 0, frScore = 0;
  for (const word of words) {
    if (ITALIAN_INDICATORS.has(word)) itScore++;
    if (ENGLISH_INDICATORS.has(word)) enScore++;
    if (FRENCH_INDICATORS.has(word)) frScore++;
  }

  const maxScore = Math.max(itScore, enScore, frScore);

  if (maxScore > 0) {
    const scores = { it: itScore, en: enScore, fr: frScore };
    const winners = Object.entries(scores).filter(([, s]) => s === maxScore);
    if (winners.length === 1) return winners[0][0];
  }

  // Step 2: trigram detection (solo per testi abbastanza lunghi)
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
