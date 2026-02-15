const ITALIAN_WORDS = ['ciao', 'salve', 'buongiorno', 'buonasera', 'grazie', 'prego', 'dove', 'quando', 'come', 'vorrei', 'posso', 'cosa', 'sono', 'qual è', 'potrei', 'avete', 'nella', 'della', 'questo', 'questa'];
const ENGLISH_WORDS = ['hello', 'hi', 'thank', 'please', 'where', 'when', 'how', 'what', 'the', 'is', 'are', 'can', 'do', 'could', 'would', 'have', 'about', 'need', 'want', 'this', 'that', 'there'];
const FRENCH_WORDS = ['bonjour', 'salut', 'merci', "s'il", 'vous', 'plaît', 'où', 'quand', 'comment', 'est-ce', 'avez', 'pouvez', 'cette', 'dans', 'quel', 'quelle', 'nous', 'notre', 'votre', 'les'];

export function detectLanguage(text, siteLanguage) {
  const lower = text.toLowerCase();

  const itCount = ITALIAN_WORDS.filter(w => lower.includes(w)).length;
  const enCount = ENGLISH_WORDS.filter(w => lower.includes(w)).length;
  const frCount = FRENCH_WORDS.filter(w => lower.includes(w)).length;

  if (itCount > enCount && itCount > frCount) return 'it';
  if (frCount > enCount && frCount > itCount) return 'fr';
  if (enCount > 0) return 'en';

  // Fallback to site language instead of hardcoded 'en'
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
