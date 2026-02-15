// Stop words e parole comuni per lingua - usate per il rilevamento
const ITALIAN_WORDS = [
  // saluti
  'ciao', 'salve', 'buongiorno', 'buonasera', 'buonanotte',
  // pronomi
  'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'mi', 'ti', 'ci', 'vi',
  // articoli e preposizioni
  'il', 'lo', 'la', 'gli', 'le', 'un', 'una', 'uno', 'del', 'della', 'dello',
  'dei', 'delle', 'nel', 'nella', 'sul', 'sulla', 'al', 'alla', 'dal', 'dalla',
  'di', 'da', 'per', 'con', 'tra', 'fra',
  // verbi comuni
  'sono', 'sei', 'siamo', 'hanno', 'avete', 'vorrei', 'posso', 'potrei',
  'sapere', 'dire', 'fare', 'andare', 'venire', 'stare',
  // altre parole comuni
  'cosa', 'come', 'dove', 'quando', 'quale', 'quanto', 'perché',
  'questo', 'questa', 'quello', 'quella', 'anche', 'ancora', 'sempre',
  'molto', 'tutto', 'grazie', 'prego', 'scusa', 'casa', 'bene',
];

const ENGLISH_WORDS = [
  // greetings
  'hello', 'hi', 'hey', 'good morning', 'good evening',
  // pronouns
  'i', 'you', 'he', 'she', 'we', 'they', 'me', 'my', 'your', 'our', 'their',
  // articles and prepositions
  'the', 'a', 'an', 'of', 'to', 'in', 'on', 'at', 'for', 'with', 'from', 'by',
  // verbs
  'is', 'are', 'was', 'were', 'have', 'has', 'had', 'do', 'does', 'did',
  'can', 'could', 'would', 'should', 'will', 'need', 'want', 'like',
  // common words
  'what', 'where', 'when', 'how', 'which', 'who', 'why',
  'this', 'that', 'there', 'here', 'about', 'also', 'very',
  'please', 'thank', 'thanks', 'yes', 'no', 'not',
];

const FRENCH_WORDS = [
  // salutations
  'bonjour', 'bonsoir', 'salut', 'bonne',
  // pronoms
  'je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'mon', 'ma', 'mes',
  'ton', 'votre', 'notre', 'leur', 'leurs',
  // articles et prépositions
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'au', 'aux',
  'dans', 'sur', 'sous', 'avec', 'pour', 'par', 'chez', 'entre',
  // verbes
  'est', 'sont', 'suis', 'avez', 'avons', 'ont', 'fait', 'faire',
  'pouvez', 'puis', 'voudrais', 'veux', 'peut',
  // mots courants
  'comment', 'où', 'quand', 'quel', 'quelle', 'quoi', 'pourquoi',
  'cette', 'ces', 'aussi', 'très', 'bien', 'tout', 'tous',
  'merci', 'oui', 'non', "s'il", 'plaît',
];

// Estrai parole dal testo rispettando i confini di parola
function getWords(text) {
  return text.toLowerCase().replace(/['']/g, "'").split(/[^a-zàáâãäåèéêëìíîïòóôõöùúûüçñ'-]+/).filter(Boolean);
}

export function detectLanguage(text, siteLanguage) {
  const words = getWords(text);
  const lower = text.toLowerCase();

  // Conta match con word boundary per parole singole, substring per frasi
  const countMatches = (langWords) => {
    let count = 0;
    for (const lw of langWords) {
      if (lw.includes(' ')) {
        // Frasi multi-parola: usa substring match
        if (lower.includes(lw)) count++;
      } else {
        // Parole singole: match esatto nella lista di parole
        if (words.includes(lw)) count++;
      }
    }
    return count;
  };

  const itCount = countMatches(ITALIAN_WORDS);
  const enCount = countMatches(ENGLISH_WORDS);
  const frCount = countMatches(FRENCH_WORDS);

  // Serve almeno 1 match per dichiarare una lingua
  const max = Math.max(itCount, enCount, frCount);
  if (max === 0) return siteLanguage || 'en';

  if (itCount === max && itCount > enCount && itCount > frCount) return 'it';
  if (frCount === max && frCount > enCount && frCount > itCount) return 'fr';
  if (enCount === max) return 'en';

  // In caso di pareggio, usa la lingua del sito
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
