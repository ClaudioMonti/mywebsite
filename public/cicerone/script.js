/* ============================================================
   CICERONE — Guida Turistica in Valdinievole e Toscana
   Multilingua IT / EN / FR  —  script.js
   ============================================================ */

'use strict';

/* ---- LINGUA CORRENTE ---- */
let currentLang = 'it';

/* ---- TRADUZIONI UI (elementi statici HTML) ---- */
const ui = {
  it: {
    'logo.sub': 'Guida in Valdinievole e Toscana',
    'nav.about': 'Chi siamo', 'nav.packages': 'Pacchetti',
    'nav.destinations': 'Destinazioni', 'nav.products': 'Sapori', 'nav.contact': 'Contattami',
    'hero.eyebrow': 'La tua guida in Toscana',
    'hero.title': 'Scopri la<br><em>Valdinievole</em><br>e la Toscana',
    'hero.subtitle': 'Borghi medievali, terme storiche, capolavori rinascimentali, sapori autentici.<br>Itinerari su misura per vivere la Toscana.',
    'hero.cta1': 'Esplora i Pacchetti', 'hero.cta2': 'Prenota una visita',
    'hero.stat.packages': 'Pacchetti', 'hero.stat.destinations': 'Destinazioni', 'hero.stat.products': 'Prodotti tipici',
    'hero.scroll': 'Scopri di più',
    'about.eyebrow': 'Chi siamo',
    'about.title': 'Sono Claudio,<br>la tua guida<br>in Toscana',
    'about.p1': 'Mi chiamo <strong>Claudio Monti</strong> e sono la guida che ti accompagnerà alla scoperta di questa terra straordinaria. Ho sempre avuto la passione per i viaggi: ho esplorato paesi lontani, percorso strade sconosciute, ascoltato storie in lingue che faticavo a capire — e ogni volta, tornando a casa, ho scoperto di guardare la Valdinievole con occhi nuovi.',
    'about.p2': 'È il paradosso del viaggiatore: <em>bisogna partire per capire dove si appartiene</em>. La mia terra è un mosaico di borghi medievali, terme storiche, ville medicee, sapori antichi e paesaggi che cambiano ad ogni stagione — e io la conosco nel modo più profondo: vivendoci.',
    'about.p3': 'Ogni itinerario nasce da questa doppia anima — il curioso che ha girato il mondo e il toscano che ama la sua terra. Vieni a scoprirla con me.',
    'about.f1.title': 'Itinerari su misura', 'about.f1.desc': 'Da mezza giornata a weekend completi, per ogni esigenza e interesse',
    'about.f2.title': 'Esperienze autentiche', 'about.f2.desc': 'Frantoi, cantine, mercati locali, borghi fuori dalle rotte di massa',
    'about.f3.title': 'Storytelling coinvolgente', 'about.f3.desc': 'Storia, arte, gastronomia e natura intrecciati in narrazioni memorabili',
    'about.quote': '"Ho girato il mondo per imparare<br>a vedere la mia terra."',
    'about.territory': 'Il nostro territorio',
    'about.langs.label': 'Lingue parlate',
    'pkg.eyebrow': 'I nostri itinerari', 'pkg.title': '12 Pacchetti Escursionistici',
    'pkg.subtitle': 'Dalla mezza giornata al weekend di più giorni, per ogni tipo di viaggiatore',
    'filter.all': 'Tutti', 'filter.half': 'Mezza giornata', 'filter.full': 'Giornata intera', 'filter.multi': 'Multi-giorno',
    'pkg.stops': 'Tappe principali',
    'dest.eyebrow': 'Dove andiamo', 'dest.title': '21 Destinazioni',
    'dest.subtitle': 'Dalla Valdinievole fino a Firenze, Pisa e Lucca',
    'dest.filter.all': 'Tutte', 'dest.filter.terme': 'Terme & Benessere',
    'dest.filter.borghi': 'Borghi Medievali', 'dest.filter.arte': 'Arte & Città', 'dest.filter.natura': 'Natura',
    'prod.eyebrow': 'Sapori del territorio', 'prod.title': 'I Prodotti Tipici',
    'prod.subtitle': 'Ogni tour include almeno una sosta gastronomica. Il cibo è parte integrante dell\'esperienza toscana.',
    'contact.eyebrow': 'Contattami',
    'contact.title': 'Scegliamo insieme<br>la tua avventura',
    'contact.text': 'Sfoglia i pacchetti e le destinazioni, segna ciò che ti incuriosisce di più — poi contattami direttamente. Costruiremo insieme l\'itinerario su misura per te.',
    'contact.steps.title': 'Come funziona',
    'contact.step1': 'Sfoglia i pacchetti e le destinazioni che ti incuriosiscono',
    'contact.step2': 'Annotati quello che vorresti fare o vedere',
    'contact.step3': 'Contattami e ci accordiamo insieme sulle attività',
    'contact.btn.phone': 'Chiamami', 'contact.btn.email': 'Scrivimi',
    'contact.btn.wa': 'WhatsApp', 'contact.btn.wa.detail': 'Scrivimi su WhatsApp',
    'contact.area.label': 'Area operativa',
    'contact.langs.label': 'Lingue', 'contact.groups.label': 'Gruppi', 'contact.season.label': 'Stagionalità',
    'contact.area.val': 'Valdinievole, Lucca, Pistoia, Firenze, Pisa',
    'contact.langs.val': 'Italiano, Inglese, Francese',
    'contact.groups.val': 'Coppie, famiglie, gruppi privati, tour operator',
    'contact.season.val': 'Tour disponibili tutto l\'anno, con programmi stagionali',
    'form.name': 'Nome e cognome', 'form.name.ph': 'Il tuo nome',
    'form.email.ph': 'la-tua@email.it',
    'form.package.label': 'Pacchetto di interesse', 'form.package.ph': '— Seleziona un pacchetto —',
    'form.package.custom': 'Itinerario personalizzato',
    'form.people': 'Numero di persone', 'form.people.ph': 'Es. 4',
    'form.date': 'Data preferita', 'form.message': 'Messaggio',
    'form.message.ph': 'Raccontaci la tua idea di viaggio: interessi particolari, esigenze speciali, domande...',
    'form.submit': 'Invia la richiesta',
    'form.success': '✓ Messaggio inviato! Ti risponderemo al più presto.',
    'form.sending': 'Invio in corso…',
    'modal.itinerary': 'Itinerario', 'modal.idealFor': 'Ideale per',
    'modal.notes': 'Note per la guida', 'modal.book': 'Prenota questo pacchetto',
    'meta.duration': 'Durata', 'meta.transport': 'Mezzo', 'meta.difficulty': 'Difficoltà', 'meta.type': 'Tipo',
    'badge.half': 'Mezza giornata', 'badge.full': 'Giornata intera', 'badge.multi': 'Multi-giorno',
    'footer.desc': 'Guida turistica in Valdinievole e Toscana. Borghi, terme, arte, natura e sapori autentici.',
    'footer.custom': 'Itinerario personalizzato',
    'footer.d2': 'Lucca & dintorni', 'footer.d3': 'Firenze, Pisa, Pistoia',
    'footer.copy': '© 2024 Cicerone — Guida Turistica in Valdinievole e Toscana',
    'lang.it': '🇮🇹 Italiano', 'lang.en': '🇬🇧 English', 'lang.fr': '🇫🇷 Français',
  },

  en: {
    'logo.sub': 'Guide in the Valdinievole & Tuscany',
    'nav.about': 'About', 'nav.packages': 'Packages',
    'nav.destinations': 'Destinations', 'nav.products': 'Flavours', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Your guide in Tuscany',
    'hero.title': 'Discover the<br><em>Valdinievole</em><br>and Tuscany',
    'hero.subtitle': 'Medieval villages, historic spas, Renaissance masterpieces, authentic flavours.<br>Bespoke itineraries to experience Tuscany.',
    'hero.cta1': 'Explore Packages', 'hero.cta2': 'Book a visit',
    'hero.stat.packages': 'Packages', 'hero.stat.destinations': 'Destinations', 'hero.stat.products': 'Local products',
    'hero.scroll': 'Discover more',
    'about.eyebrow': 'About us',
    'about.title': 'I\'m Claudio,<br>your guide<br>in Tuscany',
    'about.p1': 'My name is <strong>Claudio Monti</strong> and I\'m the guide who will accompany you through this extraordinary land. I\'ve always been passionate about travel: I\'ve explored distant countries, walked unknown roads, listened to stories in languages I could barely understand — and every time I came home, I found myself looking at the Valdinievole with new eyes.',
    'about.p2': 'That\'s the paradox of the traveller: <em>you have to leave to understand where you belong</em>. My homeland is a mosaic of medieval villages, historic spas, Medici villas, ancient flavours and landscapes that shift with every season — and I know it in the deepest way: by living here.',
    'about.p3': 'Every itinerary is born from this double soul — the curious wanderer who has travelled the world and the Tuscan who loves his land. Come and discover it with me.',
    'about.f1.title': 'Tailor-made itineraries', 'about.f1.desc': 'From half a day to full weekends, for every need and interest',
    'about.f2.title': 'Authentic experiences', 'about.f2.desc': 'Oil mills, wineries, local markets, villages off the tourist trail',
    'about.f3.title': 'Engaging storytelling', 'about.f3.desc': 'History, art, food and nature woven into memorable narratives',
    'about.quote': '"I\'ve travelled the world to learn<br>to see my homeland."',
    'about.territory': 'Our territory',
    'about.langs.label': 'Languages spoken',
    'pkg.eyebrow': 'Our itineraries', 'pkg.title': '12 Touring Packages',
    'pkg.subtitle': 'From half a day to multi-day weekends, for every type of traveller',
    'filter.all': 'All', 'filter.half': 'Half day', 'filter.full': 'Full day', 'filter.multi': 'Multi-day',
    'pkg.stops': 'Main stops',
    'dest.eyebrow': 'Where we go', 'dest.title': '21 Destinations',
    'dest.subtitle': 'From the Valdinievole to Florence, Pisa and Lucca',
    'dest.filter.all': 'All', 'dest.filter.terme': 'Spas & Wellness',
    'dest.filter.borghi': 'Medieval Villages', 'dest.filter.arte': 'Art & Cities', 'dest.filter.natura': 'Nature',
    'prod.eyebrow': 'Local flavours', 'prod.title': 'Typical Products',
    'prod.subtitle': 'Every tour includes at least one food stop. Food is an integral part of the Tuscan experience.',
    'contact.eyebrow': 'Get in touch',
    'contact.title': 'Let\'s plan your<br>adventure together',
    'contact.text': 'Browse the packages and destinations, note what interests you most — then get in touch directly. Together we\'ll build the perfect itinerary for you.',
    'contact.steps.title': 'How it works',
    'contact.step1': 'Browse the packages and destinations that interest you',
    'contact.step2': 'Note what you\'d like to do or see',
    'contact.step3': 'Contact me and we\'ll plan your experience together',
    'contact.btn.phone': 'Call me', 'contact.btn.email': 'Email me',
    'contact.btn.wa': 'WhatsApp', 'contact.btn.wa.detail': 'Message me on WhatsApp',
    'contact.area.label': 'Operating area',
    'contact.langs.label': 'Languages', 'contact.groups.label': 'Groups', 'contact.season.label': 'Seasonality',
    'contact.area.val': 'Valdinievole, Lucca, Pistoia, Florence, Pisa',
    'contact.langs.val': 'Italian, English, French',
    'contact.groups.val': 'Couples, families, private groups, tour operators',
    'contact.season.val': 'Tours available year-round, with seasonal programmes',
    'form.name': 'Full name', 'form.name.ph': 'Your name',
    'form.email.ph': 'your@email.com',
    'form.package.label': 'Package of interest', 'form.package.ph': '— Select a package —',
    'form.package.custom': 'Custom itinerary',
    'form.people': 'Number of people', 'form.people.ph': 'E.g. 4',
    'form.date': 'Preferred date', 'form.message': 'Message',
    'form.message.ph': 'Tell us about your travel idea: particular interests, special needs, questions...',
    'form.submit': 'Send request',
    'form.success': '✓ Message sent! We will get back to you as soon as possible.',
    'form.sending': 'Sending…',
    'modal.itinerary': 'Itinerary', 'modal.idealFor': 'Ideal for',
    'modal.notes': 'Guide notes', 'modal.book': 'Book this package',
    'meta.duration': 'Duration', 'meta.transport': 'Transport', 'meta.difficulty': 'Difficulty', 'meta.type': 'Type',
    'badge.half': 'Half day', 'badge.full': 'Full day', 'badge.multi': 'Multi-day',
    'footer.desc': 'Tourist guide in the Valdinievole and Tuscany. Villages, spas, art, nature and authentic flavours.',
    'footer.custom': 'Custom itinerary',
    'footer.d2': 'Lucca & surroundings', 'footer.d3': 'Florence, Pisa, Pistoia',
    'footer.copy': '© 2024 Cicerone — Tourist Guide in the Valdinievole and Tuscany',
    'lang.it': '🇮🇹 Italiano', 'lang.en': '🇬🇧 English', 'lang.fr': '🇫🇷 Français',
  },

  fr: {
    'logo.sub': 'Guide en Valdinievole et Toscane',
    'nav.about': 'À propos', 'nav.packages': 'Formules',
    'nav.destinations': 'Destinations', 'nav.products': 'Saveurs', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Votre guide en Toscane',
    'hero.title': 'Découvrez la<br><em>Valdinievole</em><br>et la Toscane',
    'hero.subtitle': 'Villages médiévaux, thermes historiques, chefs-d\'œuvre de la Renaissance, saveurs authentiques.<br>Des itinéraires sur mesure pour vivre la Toscane.',
    'hero.cta1': 'Explorer les Formules', 'hero.cta2': 'Réserver une visite',
    'hero.stat.packages': 'Formules', 'hero.stat.destinations': 'Destinations', 'hero.stat.products': 'Produits locaux',
    'hero.scroll': 'Découvrir plus',
    'about.eyebrow': 'Qui sommes-nous',
    'about.title': 'Je suis Claudio,<br>votre guide<br>en Toscane',
    'about.p1': 'Je m\'appelle <strong>Claudio Monti</strong> et je suis le guide qui vous accompagnera à la découverte de cette terre extraordinaire. J\'ai toujours eu la passion des voyages : j\'ai exploré des pays lointains, parcouru des routes inconnues, écouté des histoires dans des langues que je comprenais à peine — et à chaque retour chez moi, je découvrais la Valdinievole avec des yeux nouveaux.',
    'about.p2': 'C\'est le paradoxe du voyageur : <em>il faut partir pour comprendre où l\'on appartient</em>. Ma terre est une mosaïque de villages médiévaux, de thermes historiques, de villas médicéennes, de saveurs ancestrales et de paysages qui changent à chaque saison — et je la connais de la façon la plus profonde : en y vivant.',
    'about.p3': 'Chaque itinéraire naît de cette double âme — le curieux qui a voyagé dans le monde entier et le Toscan qui aime sa terre. Venez la découvrir avec moi.',
    'about.f1.title': 'Itinéraires sur mesure', 'about.f1.desc': 'De la demi-journée aux week-ends complets, pour chaque besoin et intérêt',
    'about.f2.title': 'Expériences authentiques', 'about.f2.desc': 'Moulins à huile, caves, marchés locaux, villages hors des sentiers touristiques',
    'about.f3.title': 'Narration captivante', 'about.f3.desc': 'Histoire, art, gastronomie et nature entrelacés dans des récits mémorables',
    'about.quote': '"J\'ai parcouru le monde pour apprendre<br>à voir ma terre."',
    'about.territory': 'Notre territoire',
    'about.langs.label': 'Langues parlées',
    'pkg.eyebrow': 'Nos itinéraires', 'pkg.title': '12 Formules d\'excursion',
    'pkg.subtitle': 'De la demi-journée au week-end de plusieurs jours, pour chaque type de voyageur',
    'filter.all': 'Toutes', 'filter.half': 'Demi-journée', 'filter.full': 'Journée entière', 'filter.multi': 'Multi-jours',
    'pkg.stops': 'Étapes principales',
    'dest.eyebrow': 'Où nous allons', 'dest.title': '21 Destinations',
    'dest.subtitle': 'De la Valdinievole jusqu\'à Florence, Pise et Lucques',
    'dest.filter.all': 'Toutes', 'dest.filter.terme': 'Thermes & Bien-être',
    'dest.filter.borghi': 'Villages Médiévaux', 'dest.filter.arte': 'Art & Villes', 'dest.filter.natura': 'Nature',
    'prod.eyebrow': 'Saveurs du terroir', 'prod.title': 'Produits typiques',
    'prod.subtitle': 'Chaque tour comprend au moins une halte gastronomique. La nourriture fait partie intégrante de l\'expérience toscane.',
    'contact.eyebrow': 'Contactez-moi',
    'contact.title': 'Construisons ensemble<br>votre aventure',
    'contact.text': 'Parcourez les formules et les destinations, notez ce qui vous intrigue le plus — puis contactez-moi directement. Nous construirons ensemble l\'itinéraire parfait pour vous.',
    'contact.steps.title': 'Comment ça marche',
    'contact.step1': 'Parcourez les formules et destinations qui vous intéressent',
    'contact.step2': 'Notez ce que vous aimeriez faire ou voir',
    'contact.step3': 'Contactez-moi et nous nous accordons ensemble sur les activités',
    'contact.btn.phone': 'Appelez-moi', 'contact.btn.email': 'Écrivez-moi',
    'contact.btn.wa': 'WhatsApp', 'contact.btn.wa.detail': 'Écrivez-moi sur WhatsApp',
    'contact.area.label': 'Zone opérationnelle',
    'contact.langs.label': 'Langues', 'contact.groups.label': 'Groupes', 'contact.season.label': 'Saisonnalité',
    'contact.area.val': 'Valdinievole, Lucques, Pistoia, Florence, Pise',
    'contact.langs.val': 'Italien, Anglais, Français',
    'contact.groups.val': 'Couples, familles, groupes privés, tour-opérateurs',
    'contact.season.val': 'Visites disponibles toute l\'année, avec programmes saisonniers',
    'form.name': 'Nom et prénom', 'form.name.ph': 'Votre nom',
    'form.email.ph': 'votre@email.fr',
    'form.package.label': 'Formule souhaitée', 'form.package.ph': '— Sélectionnez une formule —',
    'form.package.custom': 'Itinéraire personnalisé',
    'form.people': 'Nombre de personnes', 'form.people.ph': 'Ex. 4',
    'form.date': 'Date préférée', 'form.message': 'Message',
    'form.message.ph': 'Parlez-nous de votre idée de voyage : intérêts particuliers, besoins spéciaux, questions...',
    'form.submit': 'Envoyer la demande',
    'form.success': '✓ Message envoyé ! Nous vous répondrons dès que possible.',
    'form.sending': 'Envoi en cours…',
    'modal.itinerary': 'Itinéraire', 'modal.idealFor': 'Idéal pour',
    'modal.notes': 'Notes pour le guide', 'modal.book': 'Réserver cette formule',
    'meta.duration': 'Durée', 'meta.transport': 'Transport', 'meta.difficulty': 'Difficulté', 'meta.type': 'Type',
    'badge.half': 'Demi-journée', 'badge.full': 'Journée entière', 'badge.multi': 'Multi-jours',
    'footer.desc': 'Guide touristique en Valdinievole et Toscane. Villages, thermes, art, nature et saveurs authentiques.',
    'footer.custom': 'Itinéraire personnalisé',
    'footer.d2': 'Lucques & environs', 'footer.d3': 'Florence, Pise, Pistoia',
    'footer.copy': '© 2024 Cicerone — Guide touristique en Valdinievole et Toscane',
    'lang.it': '🇮🇹 Italiano', 'lang.en': '🇬🇧 English', 'lang.fr': '🇫🇷 Français',
  },
};

/* ---- HELPER ---- */
function T(field) {
  if (field && typeof field === 'object') return field[currentLang] || field.it || '';
  return field || '';
}
function U(key) {
  return (ui[currentLang] && ui[currentLang][key]) || (ui.it[key]) || '';
}

/* ============================================================
   DATI: PACCHETTI (trilingua)
   ============================================================ */
const packages = [
  {
    id:1, num:'01', icon:'♨', category:'half-day', difficoltaLevel:1,
    title:{ it:'Montecatini: dalle Terme al Borgo Medievale', en:'Montecatini: from the Spas to the Medieval Village', fr:'Montecatini : des Thermes au Village Médiéval' },
    tipo:{ it:'Mezza giornata', en:'Half day', fr:'Demi-journée' },
    durata:{ it:'3–4 ore', en:'3–4 hours', fr:'3–4 heures' },
    mezzo:{ it:'A piedi + funicolare / bici', en:'On foot + funicular / bike', fr:'À pied + funiculaire / vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Coppie, famiglie, anziani, turisti termali', en:'Couples, families, seniors, spa tourists', fr:'Couples, familles, seniors, touristes thermaux' },
    tappe:{ it:['Viale Verdi — cuore della città termale','Terme Tettuccio: gioiello Liberty del 1925','Parco delle Terme tra stabilimenti storici','Funicolare storica (1898): la più antica in funzione in Toscana','Montecatini Alto: piazza, torre, panorama sulla Valdinievole'],
            en:['Viale Verdi — heart of the spa town','Terme Tettuccio: Art Nouveau masterpiece (1925)','Thermal Park stroll between historic buildings','Historic funicular (1898): oldest running in Tuscany','Montecatini Alto: medieval square, tower, panorama'],
            fr:['Viale Verdi — cœur de la ville thermale','Terme Tettuccio : joyau Art Nouveau (1925)','Promenade au Parc Thermal','Funiculaire historique (1898) : le plus ancien de Toscane','Montecatini Alto : place médiévale, tour, panorama'] },
    note:{ it:'Verificare orari funicolare (stagionale). Terme Tettuccio visitabili solo in certi periodi. Montecatini Alto è particolarmente suggestiva al tramonto.',
           en:'Check funicular timetables (seasonal). Terme Tettuccio open in certain periods only. Montecatini Alto is especially beautiful at sunset.',
           fr:'Vérifier les horaires du funiculaire (saisonnier). Terme Tettuccio ouvertes en certaines périodes. Montecatini Alto particulièrement belle au coucher du soleil.' },
  },
  {
    id:2, num:'02', icon:'🫒', category:'half-day', difficoltaLevel:2,
    title:{ it:'La Strada dell\'Olio', en:'The Olive Oil Road', fr:'La Route de l\'Huile d\'Olive' },
    tipo:{ it:'Mezza giornata', en:'Half day', fr:'Demi-journée' },
    durata:{ it:'3–4 ore', en:'3–4 hours', fr:'3–4 heures' },
    mezzo:{ it:'Auto/minibus + tratti a piedi o in bici', en:'Car/minibus + walking or cycling sections', fr:'Voiture/minibus + sections à pied ou à vélo' },
    difficolta:{ it:'Facile–Media', en:'Easy–Medium', fr:'Facile–Moyen' },
    ideale:{ it:'Amanti del cibo, fotografi, chi cerca la Toscana autentica', en:'Food lovers, photographers, those seeking authentic Tuscany', fr:'Amateurs de gastronomie, photographes, amoureux de la Toscane authentique' },
    tappe:{ it:['Uzzano: borgo fortificato, castello, panorama','Borgo a Buggiano: Palazzo Pretorio con gli stemmi dei podestà','Colle di Buggiano: borgo medievale e Villa Bellavista','Massa e Cozzile: oliveti terrazzati, chiesa romanica','Montecatini Alto: degustazione olio EVO in frantoio locale'],
            en:['Uzzano: hilltop fortress village, castle, panorama','Borgo a Buggiano: Palazzo Pretorio with centuries of heraldry','Colle di Buggiano: medieval village and Villa Bellavista','Massa e Cozzile: terraced olive groves, Romanesque church','Montecatini Alto: EVO olive oil tasting at local mill'],
            fr:['Uzzano : village fortifié perché, château, panorama','Borgo a Buggiano : Palazzo Pretorio aux armoiries séculaires','Colle di Buggiano : village médiéval et Villa Bellavista','Massa e Cozzile : oliviers en terrasses, église romane','Montecatini Alto : dégustation d\'huile d\'olive vierge extra au moulin'] },
    note:{ it:'Contattare in anticipo frantoi per degustazioni. In autunno si può assistere alla raccolta delle olive.',
           en:'Contact mills in advance for tastings. In autumn you can witness the olive harvest.',
           fr:'Contacter les moulins à l\'avance pour les dégustations. En automne, possibilité d\'assister à la récolte des olives.' },
  },
  {
    id:3, num:'03', icon:'🎭', category:'half-day', difficoltaLevel:1,
    title:{ it:'Sulle Orme di Pinocchio', en:'In Pinocchio\'s Footsteps', fr:'Sur les Traces de Pinocchio' },
    tipo:{ it:'Mezza giornata', en:'Half day', fr:'Demi-journée' },
    durata:{ it:'3–4 ore', en:'3–4 hours', fr:'3–4 heures' },
    mezzo:{ it:'Auto + a piedi o in bici', en:'Car + on foot or by bike', fr:'Voiture + à pied ou à vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Famiglie con bambini, appassionati di letteratura, giardini storici', en:'Families with children, literature lovers, historic gardens', fr:'Familles avec enfants, amateurs de littérature, jardins historiques' },
    tappe:{ it:['Parco di Pinocchio (Collodi): percorso d\'arte con opere di Emilio Greco','Villa Garzoni: uno dei più bei giardini barocchi della Toscana','Butterfly House: serra tropicale con farfalle vive','Borgo di Collodi: la struttura "a cascata" lungo il pendio','Pescia: la città dei fiori, il Duomo, il ritratto di San Francesco (1235)'],
            en:['Pinocchio Park (Collodi): art trail with works by Emilio Greco','Villa Garzoni: one of Tuscany\'s finest baroque gardens','Butterfly House: tropical greenhouse with live butterflies','Collodi village: the unique \'cascade\' layout down the hillside','Pescia: city of flowers, Cathedral, St Francis portrait (1235)'],
            fr:['Parc de Pinocchio (Collodi) : parcours artistique avec œuvres d\'Emilio Greco','Villa Garzoni : l\'un des plus beaux jardins baroques de Toscane','Butterfly House : serre tropicale avec papillons vivants','Village de Collodi : la disposition unique \'en cascade\'','Pescia : cité des fleurs, Cathédrale, portrait de Saint François (1235)'] },
    note:{ it:'Parco di Pinocchio con orari stagionali. Villa Garzoni e giardino hanno biglietti separati. Pescia: mercato dei fiori più attivo il sabato.',
           en:'Pinocchio Park has seasonal opening times. Villa Garzoni and the garden have separate tickets. Pescia flower market most active on Saturday mornings.',
           fr:'Le Parc Pinocchio a des horaires saisonniers. La Villa Garzoni et le jardin ont des billets séparés. Marché aux fleurs de Pescia actif surtout le samedi matin.' },
  },
  {
    id:4, num:'04', icon:'🍷', category:'full-day', difficoltaLevel:2,
    title:{ it:'Montecarlo e Lucca: Vino e Mura', en:'Montecarlo & Lucca: Wine and Walls', fr:'Montecarlo et Lucques : Vin et Remparts' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'7–8 ore', en:'7–8 hours', fr:'7–8 heures' },
    mezzo:{ it:'Auto + a piedi (o bici a Lucca)', en:'Car + on foot (or bicycle in Lucca)', fr:'Voiture + à pied (ou vélo à Lucques)' },
    difficolta:{ it:'Facile–Media', en:'Easy–Medium', fr:'Facile–Moyen' },
    ideale:{ it:'Coppie, gruppi di amici, enogastronauti', en:'Couples, groups of friends, wine enthusiasts', fr:'Couples, groupes d\'amis, amateurs de vin' },
    tappe:{ it:['Montecarlo: Rocca del Cerruglio, Teatro dei Rassicurati (\'700)','Degustazione vini DOC Montecarlo: vitigni francesi unici in Toscana','Pranzo in agriturismo tra i vigneti','Lucca: passeggiata sulle mura rinascimentali (4,2 km)','Centro storico: Piazza Anfiteatro, Duomo, Torre Guinigi, Casa Puccini'],
            en:['Montecarlo: Rocca del Cerruglio fortress, 18th-century Teatro dei Rassicurati','Montecarlo DOC wine tasting: unique French-origin grape varieties','Lunch at a farmhouse agriturismo','Lucca: walk along the Renaissance walls (4.2 km)','Historic centre: Amphitheatre Square, Cathedral, Guinigi Tower, Puccini\'s house'],
            fr:['Montecarlo : forteresse Rocca del Cerruglio, Teatro dei Rassicurati (XVIIIe)','Dégustation vins DOC Montecarlo : cépages d\'origine française uniques','Déjeuner dans un agriturismo','Lucques : promenade sur les remparts Renaissance (4,2 km)','Centre historique : Place de l\'Amphithéâtre, Cathédrale, Tour Guinigi, maison de Puccini'] },
    note:{ it:'Prenotare cantina a Montecarlo in anticipo. Noleggio bici a Lucca presso le porte. Torre Guinigi: 230 gradini.',
           en:'Book the Montecarlo winery in advance. Bicycle hire in Lucca by the city gates. Guinigi Tower: 230 steps.',
           fr:'Réserver la cave à Montecarlo à l\'avance. Location de vélos à Lucques aux portes de la ville. Tour Guinigi : 230 marches.' },
  },
  {
    id:5, num:'05', icon:'🎨', category:'full-day', difficoltaLevel:2,
    title:{ it:'Leonardo e i Medici: dal Genio al Potere', en:'Leonardo & the Medici: from Genius to Power', fr:'Léonard et les Médicis : du Génie au Pouvoir' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'7–8 ore', en:'7–8 hours', fr:'7–8 heures' },
    mezzo:{ it:'Auto + a piedi o in bici', en:'Car + on foot or by bike', fr:'Voiture + à pied ou à vélo' },
    difficolta:{ it:'Facile–Media', en:'Easy–Medium', fr:'Facile–Moyen' },
    ideale:{ it:'Appassionati di storia e arte, famiglie, turisti internazionali', en:'History and art lovers, families, international tourists', fr:'Amateurs d\'histoire et d\'art, familles, touristes internationaux' },
    tappe:{ it:['Museo Leonardiano di Vinci (Castello dei Conti Guidi)','Casa Natale di Leonardo ad Anchiano: il paesaggio dei suoi dipinti','Borgo di Vinci: fonte battesimale, Biblioteca Leonardiana','Villa Medicea di Cerreto Guidi (UNESCO): rampe del Buontalenti','Estensione opzionale: Firenze — Uffizi, Piazzale Michelangelo'],
            en:['Leonardo Museum in Vinci (Conti Guidi Castle): models of his machines','Leonardo\'s birthplace in Anchiano: the landscape of his paintings','Vinci village: baptismal font, Leonardian Library','Medici Villa in Cerreto Guidi (UNESCO): Buontalenti\'s ramps, Hunting Museum','Optional extension: Florence — Uffizi Gallery, Piazzale Michelangelo'],
            fr:['Musée Léonardien à Vinci (Château des Conti Guidi) : maquettes de ses machines','Maison natale de Léonard à Anchiano : le paysage de ses tableaux','Village de Vinci : fonts baptismaux, Bibliothèque Léonardienne','Villa Médicéenne de Cerreto Guidi (UNESCO) : rampes du Buontalenti, Musée de la Chasse','Extension optionnelle : Florence — Galerie des Offices, Piazzale Michel-Ange'] },
    note:{ it:'Filo narrativo: Leonardo nasce in campagna (Vinci), i Medici controllano il territorio (Cerreto Guidi), entrambi convergono a Firenze.',
           en:'Narrative thread: Leonardo born in the countryside (Vinci), the Medici control the territory (Cerreto Guidi), both converge on Florence. Genius meets power.',
           fr:'Fil conducteur : Léonard né à la campagne (Vinci), les Médicis contrôlent le territoire (Cerreto Guidi), tous deux convergent vers Florence. Le génie rencontre le pouvoir.' },
  },
  {
    id:6, num:'06', icon:'🏛', category:'full-day', difficoltaLevel:1,
    title:{ it:'Pisa: oltre la Torre', en:'Pisa: Beyond the Tower', fr:'Pise : Au-delà de la Tour' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'6–7 ore', en:'6–7 hours', fr:'6–7 heures' },
    mezzo:{ it:'Auto/treno + a piedi o in bici', en:'Car/train + on foot or by bike', fr:'Voiture/train + à pied ou à vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Tutti, specialmente turisti internazionali', en:'Everyone, especially international tourists', fr:'Tous, surtout les touristes internationaux' },
    tappe:{ it:['Piazza dei Miracoli: Torre, Cattedrale, Battistero (acustica straordinaria!)','Camposanto Monumentale con terra proveniente dalla Terrasanta','Lungarni: Palazzo Blu, Santa Maria della Spina gotica','Piazza dei Cavalieri: Torre della Fame, Scuola Normale Superiore','Murale Tuttomondo di Keith Haring (1989, l\'ultimo murale pubblico)'],
            en:['Piazza dei Miracoli: Tower, Cathedral, Baptistery (extraordinary acoustics!)','Monumental Cemetery with soil from the Holy Land','Lungarni: Palazzo Blu, Gothic Santa Maria della Spina','Piazza dei Cavalieri: Tower of Hunger, Scuola Normale Superiore','Keith Haring\'s Tuttomondo mural (1989 — his last public mural)'],
            fr:['Piazza dei Miracoli : Tour, Cathédrale, Baptistère (acoustique extraordinaire !)','Camposanto Monumental avec terre de Terre Sainte','Lungarni : Palazzo Blu, Santa Maria della Spina gothique','Piazza dei Cavalieri : Tour de la Faim, Scuola Normale Superiore','Fresque Tuttomondo de Keith Haring (1989 — sa dernière œuvre murale)'] },
    note:{ it:'La salita alla Torre va prenotata online con largo anticipo. Nel Battistero chiedere della dimostrazione dell\'eco.',
           en:'Tower climb must be booked online well in advance. In the Baptistery, ask about the echo demonstration.',
           fr:'La montée de la Tour doit être réservée en ligne longtemps à l\'avance. Au Baptistère, demander la démonstration de l\'écho.' },
  },
  {
    id:7, num:'07', icon:'⚜', category:'full-day', difficoltaLevel:1,
    title:{ it:'Pistoia: la Città Nascosta', en:'Pistoia: the Hidden City', fr:'Pistoia : la Cité Cachée' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'6–7 ore', en:'6–7 hours', fr:'6–7 heures' },
    mezzo:{ it:'Auto/treno + a piedi o in bici', en:'Car/train + on foot or by bike', fr:'Voiture/train + à pied ou à vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Amanti dell\'arte e architettura, chi cerca mete meno turistiche', en:'Art and architecture lovers, off-the-beaten-path travellers', fr:'Amateurs d\'art et d\'architecture, voyageurs hors des sentiers battus' },
    tappe:{ it:['Piazza del Duomo: Altare Argenteo di San Jacopo (capolavoro di oreficeria)','Battistero gotico di Andrea Pisano','Ospedale del Ceppo: fregio robbiano + sotterranei medievali','Piazza della Sala + Sant\'Andrea: pulpito di Giovanni Pisano','Opzionale: Grotta Giusti a Monsummano Terme'],
            en:['Cathedral Square: Silver Altar of St James (masterpiece of medieval goldsmithing)','Gothic Baptistery by Andrea Pisano','Ospedale del Ceppo: Della Robbia frieze + medieval underground tour','Piazza della Sala + Sant\'Andrea: Giovanni Pisano\'s pulpit','Optional: Grotta Giusti thermal spa at Monsummano Terme'],
            fr:['Place de la Cathédrale : Autel d\'Argent de Saint Jacques (chef-d\'œuvre d\'orfèvrerie)','Baptistère gothique d\'Andrea Pisano','Hôpital du Ceppo : frise della Robbia + visite souterraine médiévale','Piazza della Sala + Sant\'Andrea : chaire de Giovanni Pisano','Optionnel : thermes Grotta Giusti à Monsummano Terme'] },
    note:{ it:'Pistoia fu Capitale Italiana della Cultura 2017. Il nome "pistola" viene da qui. Il sotterraneo del Ceppo va prenotato.',
           en:'Pistoia was Italian Capital of Culture 2017. The word "pistol" originates here. The Ceppo underground tour must be pre-booked.',
           fr:'Pistoia fut Capitale Italienne de la Culture 2017. Le mot "pistolet" y trouve son origine. La visite souterraine du Ceppo doit être réservée.' },
  },
  {
    id:8, num:'08', icon:'🍽', category:'full-day', difficoltaLevel:1,
    title:{ it:'La Via del Gusto', en:'The Taste Route — Food & Wine', fr:'La Route des Saveurs' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'7–8 ore', en:'7–8 hours', fr:'7–8 heures' },
    mezzo:{ it:'Auto/minibus o bici', en:'Car/minibus or bike', fr:'Voiture/minibus ou vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Foodies, gruppi di amici, coppie', en:'Foodies, groups of friends, couples', fr:'Amateurs de gastronomie, groupes d\'amis, couples' },
    tappe:{ it:['Strada dell\'Olio: frantoio tra Uzzano e Massa e Cozzile','Degustazione olio EVO con bruschette: varietà Frantoio, Moraiolo, Leccino','Lamporecchio: i brigidini, cialde all\'anice da 500 anni','Pranzo tipico in agriturismo: pici, pappa al pomodoro, bistecca','Cantina DOC Montecarlo + Pescia: necci e prodotti del mercato'],
            en:['Olive Oil Road: mill between Uzzano and Massa e Cozzile','EVO olive oil tasting with bruschetta: Frantoio, Moraiolo, Leccino varieties','Lamporecchio: brigidini — anise wafers made by nuns since the 1500s','Traditional lunch at agriturismo: pici, pappa al pomodoro, Florentine steak','Montecarlo DOC winery + Pescia: necci and seasonal market products'],
            fr:['Route de l\'Huile : moulin entre Uzzano et Massa e Cozzile','Dégustation d\'huile vierge extra avec bruschetta : variétés Frantoio, Moraiolo, Leccino','Lamporecchio : brigidini — gaufrettes à l\'anis faites par des sœurs depuis les années 1500','Déjeuner traditionnel en agriturismo : pici, pappa al pomodoro, bistecca','Cave DOC Montecarlo + Pescia : necci et produits du marché saisonnier'] },
    note:{ it:'Prodotti da conoscere: Olio EVO, Vino DOC Montecarlo, Brigidini, Necci, Miele dell\'Appennino, Farina di castagne IGP, Fagiolo di Sorana.',
           en:'Products to know: EVO Oil, Montecarlo DOC Wine, Brigidini, Necci, Apennine Honey, Chestnut Flour IGP, Sorana Bean.',
           fr:'Produits à connaître : Huile EVO, Vin DOC Montecarlo, Brigidini, Necci, Miel des Apennins, Farine de châtaigne IGP, Haricot de Sorana.' },
  },
  {
    id:9, num:'09', icon:'💧', category:'full-day', difficoltaLevel:1,
    title:{ it:'Terme e Benessere', en:'Spas & Wellness', fr:'Thermes et Bien-être' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'6–7 ore', en:'6–7 hours', fr:'6–7 heures' },
    mezzo:{ it:'Auto o bici', en:'Car or bike', fr:'Voiture ou vélo' },
    difficolta:{ it:'Facile', en:'Easy', fr:'Facile' },
    ideale:{ it:'Coppie, turisti del benessere, anziani', en:'Couples, wellness tourists, seniors', fr:'Couples, touristes du bien-être, seniors' },
    tappe:{ it:['Montecatini Terme: Terme Tettuccio — storia e architettura Liberty','Grotta Giusti (Monsummano): Paradiso 31°C, Purgatorio 33°C, Inferno 35°C','Lago termale sotterraneo nella grotta carsica naturale','Bagni di Lucca: il primo casino d\'Europa (1837)','Ponte delle Catene e la comunità britannica dell\'800 (Byron, Shelley)'],
            en:['Montecatini Terme: Terme Tettuccio — history and Liberty architecture','Grotta Giusti (Monsummano): Paradise 31°C, Purgatory 33°C, Hell 35°C','Natural underground thermal lake in the karst cave','Bagni di Lucca: Europe\'s first public casino (1837)','Chain Bridge and the 19th-century British community (Byron, Shelley)'],
            fr:['Montecatini Terme : Terme Tettuccio — histoire et architecture Art Nouveau','Grotta Giusti (Monsummano) : Paradis 31°C, Purgatoire 33°C, Enfer 35°C','Lac thermal souterrain naturel dans la grotte karstique','Bagni di Lucca : premier casino public d\'Europe (1837)','Pont des Chaînes et la communauté britannique du XIXe (Byron, Shelley)'] },
    note:{ it:'Prenotare trattamenti termali in anticipo. Grotta Giusti: portare costume, accappatoio fornito.',
           en:'Pre-book spa treatments. Grotta Giusti: bring swimwear, robes provided.',
           fr:'Réserver les soins thermaux à l\'avance. Grotta Giusti : apporter le maillot de bain, peignoir fourni.' },
  },
  {
    id:10, num:'10', icon:'🗺', category:'multi-day', difficoltaLevel:2,
    title:{ it:'Toscana Classica', en:'Classic Tuscany', fr:'Toscane Classique' },
    tipo:{ it:'Multi-giorno', en:'Multi-day', fr:'Multi-jours' },
    durata:{ it:'2–3 giorni', en:'2–3 days', fr:'2–3 jours' },
    mezzo:{ it:'Auto o bici', en:'Car or bike', fr:'Voiture ou vélo' },
    difficolta:{ it:'Media (molte camminate)', en:'Medium (lots of walking)', fr:'Moyen (beaucoup de marche)' },
    ideale:{ it:'Turisti stranieri con più giorni a disposizione', en:'International tourists with several days available', fr:'Touristes internationaux disposant de plusieurs jours' },
    tappe:{ it:['Giorno 1: Montecatini Terme + funicolare + Strada dell\'Olio','Giorno 2: Collodi & Villa Garzoni, Pescia, Montecarlo, Lucca','Giorno 3A: Firenze — Uffizi, Ponte Vecchio, Piazzale Michelangelo','Giorno 3B: Pisa — Piazza dei Miracoli, Lungarni, Keith Haring','Giorno 3C: Pistoia + Vinci + Cerreto Guidi'],
            en:['Day 1: Montecatini Terme + funicular + Olive Oil Road','Day 2: Collodi & Villa Garzoni, Pescia, Montecarlo, Lucca','Day 3A: Florence — Uffizi, Ponte Vecchio, Piazzale Michelangelo','Day 3B: Pisa — Piazza dei Miracoli, Lungarni, Keith Haring','Day 3C: Pistoia + Vinci + Cerreto Guidi'],
            fr:['Jour 1 : Montecatini Terme + funiculaire + Route de l\'Huile','Jour 2 : Collodi & Villa Garzoni, Pescia, Montecarlo, Lucques','Jour 3A : Florence — Offices, Ponte Vecchio, Piazzale Michel-Ange','Jour 3B : Pise — Piazza dei Miracoli, Lungarni, Keith Haring','Jour 3C : Pistoia + Vinci + Cerreto Guidi'] },
    note:{ it:'Il programma del 3° giorno è a scelta in base agli interessi. Ideale come tour completo per visitatori internazionali.',
           en:'Day 3 programme chosen based on interests. Ideal as a complete tour for international visitors with more time.',
           fr:'Le programme du 3e jour est choisi selon les intérêts. Idéal comme circuit complet pour les visiteurs internationaux.' },
  },
  {
    id:11, num:'11', icon:'🏰', category:'full-day', difficoltaLevel:2,
    title:{ it:'Borghi Segreti della Valdinievole', en:'Hidden Villages of the Valdinievole', fr:'Villages Secrets de la Valdinievole' },
    tipo:{ it:'Giornata intera', en:'Full day', fr:'Journée entière' },
    durata:{ it:'6–7 ore', en:'6–7 hours', fr:'6–7 heures' },
    mezzo:{ it:'Auto + tratti a piedi o in bici', en:'Car + walking or cycling sections', fr:'Voiture + sections à pied ou à vélo' },
    difficolta:{ it:'Media (strade collinari)', en:'Medium (hilly roads)', fr:'Moyen (routes de collines)' },
    ideale:{ it:'Avventurosi, fotografi, amanti dei luoghi poco conosciuti', en:'Adventurers, photographers, lovers of off-beat places', fr:'Aventuriers, photographes, amateurs de lieux insolites' },
    tappe:{ it:['Larciano: Rocca medievale + Museo della Linea Gotica e Resistenza','Serravalle Pistoiese: Rocca Nuova e Vecchia, leggenda della Bella Selvaggia','San Baronto: panorama sul Montalbano, Pieve romanica','Svizzera Pesciatina: Pontito (borgo a spirale), Sorana (fagiolo Slow Food)','Pietrabuona: Museo della Carta (tradizione cartaria medievale)'],
            en:['Larciano: medieval fortress + Museum of the Gothic Line and Resistance','Serravalle Pistoiese: two opposing fortresses, legend of the Beautiful Wild One','San Baronto: panorama over Montalbano, Romanesque parish church','Swiss Pescia Valley: Pontito (spiral village), Sorana (Slow Food bean)','Pietrabuona: Paper Museum (medieval paper-making tradition)'],
            fr:['Larciano : forteresse médiévale + Musée de la Ligne Gothique et Résistance','Serravalle Pistoiese : deux forteresses opposées, légende de la Belle Sauvage','San Baronto : panorama sur le Montalbano, église romane','Suisse Pesciatine : Pontito (village en spirale), Sorana (haricot Slow Food)','Pietrabuona : Musée du Papier (tradition papetière médiévale)'] },
    note:{ it:'Strade strette e tortuose, usare auto piccola. Portare acqua e snack. Alcuni borghi hanno meno di 10 abitanti stabili.',
           en:'Narrow winding roads — use a small car. Bring water and snacks. Some villages have fewer than 10 permanent residents.',
           fr:'Routes étroites et sinueuses — utiliser une petite voiture. Apporter eau et provisions. Certains villages ont moins de 10 habitants permanents.' },
  },
  {
    id:12, num:'12', icon:'🦢', category:'half-day', difficoltaLevel:1,
    title:{ it:'Natura e Storia: il Padule di Fucecchio', en:'Nature & History: the Padule di Fucecchio', fr:'Nature et Histoire : le Padule di Fucecchio' },
    tipo:{ it:'Mezza giornata o giornata intera', en:'Half or full day', fr:'Demi-journée ou journée entière' },
    durata:{ it:'3–7 ore', en:'3–7 hours', fr:'3–7 heures' },
    mezzo:{ it:'Auto + a piedi o in bici', en:'Car + on foot or by bike', fr:'Voiture + à pied ou à vélo' },
    difficolta:{ it:'Facile (percorsi pianeggianti)', en:'Easy (flat paths)', fr:'Facile (chemins plats)' },
    ideale:{ it:'Amanti della natura, birdwatcher, fotografi, famiglie', en:'Nature lovers, birdwatchers, photographers, families', fr:'Amoureux de la nature, ornithologues, photographes, familles' },
    tappe:{ it:['Centro Visite di Castelmartini: la più grande palude interna d\'Italia (1.800 ha)','Escursione sulle portelle tra canali, ninfee e canneti','Birdwatching: aironi, garzette, martin pescatori, gru in autunno (200+ specie)','Estensione: Villa Medicea di Cerreto Guidi (i Medici cacciavano qui)','Estensione: Vinci (Leonardo studiò le acque del Padule)'],
            en:['Castelmartini Visitor Centre: Italy\'s largest inland marsh (1,800 ha)','Walk along the portelle paths between canals, water lilies and reeds','Birdwatching: herons, kingfishers, cranes migrating in autumn (200+ species)','Extension: Cerreto Guidi Medici Villa (Medici used the marsh as hunting reserve)','Extension: Vinci (Leonardo studied the marsh\'s hydraulics)'],
            fr:['Centre des Visiteurs de Castelmartini : le plus grand marais intérieur d\'Italie (1 800 ha)','Promenade sur les portelle entre canaux, nénuphars et roseaux','Observation des oiseaux : hérons, martins-pêcheurs, grues en migration (200+ espèces)','Extension : Villa Médicéenne de Cerreto Guidi (les Médicis chassaient ici)','Extension : Vinci (Léonard étudia l\'hydraulique du marais)'] },
    note:{ it:'Portare binocolo. Scarpe impermeabili consigliate. Migliore in primavera e autunno. Le visite all\'alba sono le migliori.',
           en:'Bring binoculars. Waterproof shoes recommended. Best in spring and autumn. Dawn visits give the best sightings.',
           fr:'Apporter des jumelles. Chaussures imperméables conseillées. Meilleure saison : printemps et automne. Les visites à l\'aube sont les meilleures.' },
  },
];

/* ============================================================
   DATI: DESTINAZIONI (trilingua)
   ============================================================ */
const destinations = [
  { id:1, name:'Montecatini Terme', category:'terme',
    catLabel:{ it:'Terme & Benessere', en:'Spas & Wellness', fr:'Thermes & Bien-être' },
    desc:{ it:'La regina delle terme toscane, con i suoi magnifici stabilimenti Liberty, il Parco Termale e il celebre Viale Verdi.', en:'Queen of Tuscan spas, with magnificent Liberty buildings, the Thermal Park and the famous Viale Verdi.', fr:'La reine des thermes toscans, avec ses magnifiques établissements Art Nouveau, le Parc Thermal et le célèbre Viale Verdi.' },
    hl:{ it:['Terme Tettuccio','Architettura Liberty','Parco Termale'], en:['Terme Tettuccio','Art Nouveau architecture','Thermal Park'], fr:['Terme Tettuccio','Architecture Art Nouveau','Parc Thermal'] } },
  { id:2, name:'Montecatini Alto', category:'borghi',
    catLabel:{ it:'Borgo Medievale', en:'Medieval Village', fr:'Village Médiéval' },
    desc:{ it:'L\'antico castello medievale raggiungibile con la funicolare del 1898. Panorama mozzafiato sulla Valdinievole.', en:'The ancient medieval castle reachable by the 1898 funicular. Breathtaking panorama over the Valdinievole.', fr:'L\'ancien château médiéval accessible par le funiculaire de 1898. Panorama à couper le souffle sur la Valdinievole.' },
    hl:{ it:['Funicolare storica 1898','Piazza Giusti','Torre del Carmine'], en:['Historic funicular 1898','Piazza Giusti','Carmine Tower'], fr:['Funiculaire historique 1898','Piazza Giusti','Tour du Carmine'] } },
  { id:3, name:'Uzzano', category:'borghi',
    catLabel:{ it:'Borgo Medievale', en:'Medieval Village', fr:'Village Médiéval' },
    desc:{ it:'Borgo fortificato in posizione dominante sulla Valdinievole, con castello e oliveti terrazzati da cui si produce un olio EVO eccellente.', en:'Fortified village in a dominant position over the Valdinievole, with castle and terraced olive groves producing excellent EVO oil.', fr:'Village fortifié en position dominante sur la Valdinievole, avec château et oliviers en terrasses produisant une excellente huile vierge extra.' },
    hl:{ it:['Castello e mura','Olio EVO di qualità','Panorama sulla valle'], en:['Castle and walls','High-quality EVO oil','Valley panorama'], fr:['Château et remparts','Huile EVO de qualité','Panorama sur la vallée'] } },
  { id:4, name:'Borgo a Buggiano', category:'borghi',
    catLabel:{ it:'Borgo Medievale', en:'Medieval Village', fr:'Village Médiéval' },
    desc:{ it:'Il Palazzo Pretorio con i suoi stemmi dei podestà — dal \'300 al \'700 — è una vera enciclopedia araldica a cielo aperto.', en:'The Palazzo Pretorio with its podestà crests — from the 14th to 18th century — is a true open-air heraldic encyclopaedia.', fr:'Le Palazzo Pretorio avec ses blasons de podestats — du XIVe au XVIIIe siècle — est une véritable encyclopédie héraldique à ciel ouvert.' },
    hl:{ it:['Palazzo Pretorio','Villa Bellavista','Vicoli medievali'], en:['Palazzo Pretorio','Villa Bellavista','Medieval alleys'], fr:['Palazzo Pretorio','Villa Bellavista','Ruelles médiévales'] } },
  { id:5, name:'Massa e Cozzile', category:'borghi',
    catLabel:{ it:'Borgo Medievale', en:'Medieval Village', fr:'Village Médiéval' },
    desc:{ it:'Due nuclei distinti immersi negli oliveti terrazzati. Il cuore autentico della zona olivicola della Valdinievole.', en:'Two distinct hamlets surrounded by terraced olive groves. The authentic heart of the Valdinievole olive oil zone.', fr:'Deux hameaux distincts entourés d\'oliviers en terrasses. Le cœur authentique de la zone oléicole de la Valdinievole.' },
    hl:{ it:['Chiesa romanica','Oliveti terrazzati','Atmosfera intatta'], en:['Romanesque church','Terraced olive groves','Unspoilt atmosphere'], fr:['Église romane','Oliviers en terrasses','Atmosphère préservée'] } },
  { id:6, name:'Collodi', category:'arte',
    catLabel:{ it:'Arte & Cultura', en:'Art & Culture', fr:'Art & Culture' },
    desc:{ it:'La patria spirituale di Pinocchio: il Parco dedicato con sculture di Emilio Greco e la spettacolare Villa Garzoni con il suo giardino barocco.', en:'Pinocchio\'s spiritual homeland: the dedicated Park with sculptures by Emilio Greco and the spectacular Villa Garzoni with its baroque garden.', fr:'La patrie spirituelle de Pinocchio : le Parc dédié avec des sculptures d\'Emilio Greco et la spectaculaire Villa Garzoni avec son jardin baroque.' },
    hl:{ it:['Parco di Pinocchio','Villa Garzoni','Borgo "a cascata"'], en:['Pinocchio Park','Villa Garzoni','\'Cascade\' village'], fr:['Parc de Pinocchio','Villa Garzoni','Village \'en cascade\''] } },
  { id:7, name:'Pescia', category:'arte',
    catLabel:{ it:'Arte & Cultura', en:'Art & Culture', fr:'Art & Culture' },
    desc:{ it:'La "città dei fiori", divisa dal fiume in due rioni. Custodisce uno dei più antichi ritratti di San Francesco (1235).', en:'The "city of flowers", divided by the river into two historic districts. Keeper of one of the oldest portraits of St Francis (1235).', fr:'La "cité des fleurs", divisée par la rivière en deux quartiers historiques. Détentrice d\'un des plus anciens portraits de Saint François (1235).' },
    hl:{ it:['Mercato dei fiori','Ritratto di S. Francesco 1235','Centro storico'], en:['Flower market','St Francis portrait 1235','Historic centre'], fr:['Marché aux fleurs','Portrait de St François 1235','Centre historique'] } },
  { id:8, name:'Monsummano Terme', category:'terme',
    catLabel:{ it:'Terme & Benessere', en:'Spas & Wellness', fr:'Thermes & Bien-être' },
    desc:{ it:'La Grotta Giusti con i suoi ambienti danteschi — Paradiso, Purgatorio, Inferno — è una delle spa naturali più straordinarie d\'Europa.', en:'The Grotta Giusti, with its Dante-inspired chambers — Paradise, Purgatory, Hell — is one of Europe\'s most extraordinary natural spas.', fr:'La Grotta Giusti, avec ses salles dantesques — Paradis, Purgatoire, Enfer — est l\'un des spas naturels les plus extraordinaires d\'Europe.' },
    hl:{ it:['Grotta Giusti','Lago termale sotterraneo','Monsummano Alto'], en:['Grotta Giusti','Underground thermal lake','Monsummano Alto'], fr:['Grotta Giusti','Lac thermal souterrain','Monsummano Alto'] } },
  { id:9, name:'Lamporecchio', category:'borghi',
    catLabel:{ it:'Borgo & Sapori', en:'Village & Flavours', fr:'Village & Saveurs' },
    desc:{ it:'Patria dei brigidini, le cialde all\'anice inventate dalle monache di Santa Brigida. Presenti nelle fiere toscane da almeno 500 anni.', en:'Home of brigidini, the anise wafers invented by the nuns of Santa Brigida. A fixture at Tuscan fairs for at least 500 years.', fr:'Patrie des brigidini, les gaufrettes à l\'anis inventées par les sœurs de Santa Brigida. Présentes dans les foires toscanes depuis au moins 500 ans.' },
    hl:{ it:['Brigidini di Lamporecchio','Montalbano','Vigneti e uliveti'], en:['Brigidini di Lamporecchio','Montalbano','Vines and olive groves'], fr:['Brigidini di Lamporecchio','Montalbano','Vignes et oliviers'] } },
  { id:10, name:'Vinci', category:'arte',
    catLabel:{ it:'Arte & Cultura', en:'Art & Culture', fr:'Art & Culture' },
    desc:{ it:'Il borgo che ha dato i natali a Leonardo il 15 aprile 1452. Il paesaggio collinare si riconosce ancora nei fondali dei suoi dipinti.', en:'The village that gave birth to Leonardo on 15 April 1452. The surrounding hillside can still be recognised in the backgrounds of his paintings.', fr:'Le village qui a donné naissance à Léonard le 15 avril 1452. Le paysage environnant se retrouve encore dans les arrière-plans de ses tableaux.' },
    hl:{ it:['Museo Leonardiano','Casa Natale (Anchiano)','Paesaggio leonardesco'], en:['Leonardo Museum','Birthplace (Anchiano)','Leonardesque landscape'], fr:['Musée Léonardien','Maison natale (Anchiano)','Paysage léonardesque'] } },
  { id:11, name:'Cerreto Guidi', category:'arte',
    catLabel:{ it:'Arte & Cultura', en:'Art & Culture', fr:'Art & Culture' },
    desc:{ it:'La Villa Medicea UNESCO con le monumentali rampe del Buontalenti e la tragica storia di Isabella de\' Medici (1576).', en:'The UNESCO Medici Villa, with Buontalenti\'s monumental ramps and the tragic story of Isabella de\' Medici (1576).', fr:'La Villa Médicéenne UNESCO, avec les rampes monumentales du Buontalenti et la tragique histoire d\'Isabelle de Médicis (1576).' },
    hl:{ it:['Villa Medicea (UNESCO)','Rampe del Buontalenti','Museo della Caccia'], en:['Medici Villa (UNESCO)','Buontalenti\'s ramps','Hunting Museum'], fr:['Villa Médicéenne (UNESCO)','Rampes du Buontalenti','Musée de la Chasse'] } },
  { id:12, name:'Padule di Fucecchio', category:'natura',
    catLabel:{ it:'Natura', en:'Nature', fr:'Nature' },
    desc:{ it:'La più grande palude interna d\'Italia: 1.800 ettari, oltre 200 specie di uccelli e la memoria dell\'Eccidio del 23 agosto 1944.', en:'Italy\'s largest inland marsh: 1,800 hectares, over 200 bird species, and the memory of the massacre of 23 August 1944.', fr:'Le plus grand marais intérieur d\'Italie : 1 800 hectares, plus de 200 espèces d\'oiseaux, et le souvenir du massacre du 23 août 1944.' },
    hl:{ it:['Birdwatching (200+ specie)','Gru in autunno','Percorso della Memoria'], en:['Birdwatching (200+ species)','Cranes in autumn','Path of Remembrance'], fr:['Ornithologie (200+ espèces)','Grues en automne','Chemin de la Mémoire'] } },
  { id:13, name:'Larciano', category:'borghi',
    catLabel:{ it:'Borgo & Storia', en:'Village & History', fr:'Village & Histoire' },
    desc:{ it:'La Rocca medievale e il Museo Civico che racconta la Linea Gotica e la Resistenza partigiana in Valdinievole.', en:'The medieval fortress and the Civic Museum narrating the Gothic Line and partisan Resistance in the Valdinievole.', fr:'La forteresse médiévale et le Musée Civique racontant la Ligne Gothique et la Résistance partisane en Valdinievole.' },
    hl:{ it:['Rocca di Larciano','Museo Linea Gotica','Accesso al Padule'], en:['Rocca di Larciano','Gothic Line Museum','Access to the Marsh'], fr:['Rocca di Larciano','Musée Ligne Gothique','Accès au Marais'] } },
  { id:14, name:'Montecarlo', category:'borghi',
    catLabel:{ it:'Borgo & Vino', en:'Village & Wine', fr:'Village & Vin' },
    desc:{ it:'Borgo fondato da Carlo IV nel 1333. I suoi vini DOC, con vitigni francesi medievali, sono unici in Toscana.', en:'Village founded by Charles IV in 1333. Its DOC wines, with medieval French grape varieties, are unique in Tuscany.', fr:'Village fondé par Charles IV en 1333. Ses vins DOC, avec des cépages français médiévaux, sont uniques en Toscane.' },
    hl:{ it:['Rocca del Cerruglio','Vino DOC Montecarlo','Teatro dei Rassicurati'], en:['Rocca del Cerruglio','Montecarlo DOC wine','Teatro dei Rassicurati'], fr:['Rocca del Cerruglio','Vin DOC Montecarlo','Teatro dei Rassicurati'] } },
  { id:15, name:'Lucca', category:'arte',
    catLabel:{ it:'Città d\'Arte', en:'City of Art', fr:'Cité d\'Art' },
    desc:{ it:'L\'unica città toscana mai conquistata da Firenze. Mura rinascimentali percorribili in bici, Piazza dell\'Anfiteatro, città natale di Puccini.', en:'The only Tuscan city never conquered by Florence. Renaissance walls you can cycle along, Amphitheatre Square, birthplace of Puccini.', fr:'La seule cité toscane jamais conquise par Florence. Remparts Renaissance à parcourir à vélo, Place de l\'Amphithéâtre, ville natale de Puccini.' },
    hl:{ it:['Mura rinascimentali 4,2 km','Piazza dell\'Anfiteatro','Torre Guinigi con gli alberi'], en:['Renaissance walls 4.2 km','Amphitheatre Square','Guinigi Tower with trees'], fr:['Remparts Renaissance 4,2 km','Place de l\'Amphithéâtre','Tour Guinigi aux arbres'] } },
  { id:16, name:'Pistoia', category:'arte',
    catLabel:{ it:'Città d\'Arte', en:'City of Art', fr:'Cité d\'Art' },
    desc:{ it:'La città "nascosta" che non delude mai. Piazza del Duomo con l\'Altare Argenteo, l\'Ospedale del Ceppo e il pulpito di Giovanni Pisano.', en:'The "hidden" city that never disappoints. Cathedral Square with the Silver Altar, the Ospedale del Ceppo and Giovanni Pisano\'s pulpit.', fr:'La cité "cachée" qui ne déçoit jamais. Place de la Cathédrale avec l\'Autel d\'Argent, l\'Hôpital du Ceppo et la chaire de Giovanni Pisano.' },
    hl:{ it:['Piazza del Duomo','Ospedale del Ceppo','Pulpito di G. Pisano'], en:['Cathedral Square','Ospedale del Ceppo','G. Pisano\'s pulpit'], fr:['Place de la Cathédrale','Hôpital du Ceppo','Chaire de G. Pisano'] } },
  { id:17, name:'Serravalle Pistoiese', category:'borghi',
    catLabel:{ it:'Borgo Medievale', en:'Medieval Village', fr:'Village Médiéval' },
    desc:{ it:'Il borgo che "chiude la valle", con due rocche contrapposte e la leggenda della Bella Selvaggia citata dagli stilnovisti.', en:'The village that "closes the valley", with two opposing fortresses and the legend of the Beautiful Wild One cited by medieval poets.', fr:'Le village qui "ferme la vallée", avec deux forteresses opposées et la légende de la Belle Sauvage citée par les poètes médiévaux.' },
    hl:{ it:['Rocca Nuova e Vecchia','Leggenda Bella Selvaggia','Panorama sulla Valdinievole'], en:['Old and New Fortress','Legend of the Beautiful Wild One','Valley panorama'], fr:['Vieille et Nouvelle Forteresse','Légende de la Belle Sauvage','Panorama sur la vallée'] } },
  { id:18, name:'Svizzera Pesciatina', category:'borghi',
    catLabel:{ it:'Borghi Segreti', en:'Secret Villages', fr:'Villages Secrets' },
    desc:{ it:'Le Dieci Castella: Pontito a spirale, Sorana con il fagiolo Slow Food, Pietrabuona con il Museo della Carta. Borghi fuori dal tempo.', en:'The Ten Castles: Pontito with its spiral layout, Sorana with its Slow Food bean, Pietrabuona with the Paper Museum. Timeless villages.', fr:'Les Dix Châteaux : Pontito en spirale, Sorana avec son haricot Slow Food, Pietrabuona avec le Musée du Papier. Villages hors du temps.' },
    hl:{ it:['Pontito (borgo a spirale)','Fagiolo di Sorana (Slow Food)','Museo della Carta'], en:['Pontito (spiral village)','Sorana bean (Slow Food)','Paper Museum'], fr:['Pontito (village en spirale)','Haricot de Sorana (Slow Food)','Musée du Papier'] } },
  { id:19, name:'Bagni di Lucca', category:'terme',
    catLabel:{ it:'Terme & Cultura', en:'Spas & Culture', fr:'Thermes & Culture' },
    desc:{ it:'Il primo casino d\'Europa (1837). Frequentata da Byron, Shelley, Heine, Montaigne. Il Ponte delle Catene è tra i più fotogenici della Toscana.', en:'Europe\'s first casino (1837). Frequented by Byron, Shelley, Heine, Montaigne. The Chain Bridge is one of Tuscany\'s most photogenic.', fr:'Premier casino d\'Europe (1837). Fréquenté par Byron, Shelley, Heine, Montaigne. Le Pont des Chaînes est l\'un des plus photogéniques de Toscane.' },
    hl:{ it:['Primo casino d\'Europa','Ponte delle Catene','Byron e Shelley'], en:['Europe\'s first casino','Chain Bridge','Byron and Shelley'], fr:['Premier casino d\'Europe','Pont des Chaînes','Byron et Shelley'] } },
  { id:20, name:'Pisa', category:'arte',
    catLabel:{ it:'Città d\'Arte', en:'City of Art', fr:'Cité d\'Art' },
    desc:{ it:'Molto più della Torre Pendente: il Battistero con l\'eco straordinaria, la Piazza dei Cavalieri e l\'ultimo murale di Keith Haring (1989).', en:'Much more than the Leaning Tower: the Baptistery\'s extraordinary acoustics, the Piazza dei Cavalieri and Keith Haring\'s last mural (1989).', fr:'Bien plus que la Tour Penchée : l\'acoustique extraordinaire du Baptistère, la Piazza dei Cavalieri et la dernière fresque de Keith Haring (1989).' },
    hl:{ it:['Piazza dei Miracoli','Murale Tuttomondo (Haring)','Piazza dei Cavalieri'], en:['Piazza dei Miracoli','Tuttomondo mural (Haring)','Piazza dei Cavalieri'], fr:['Piazza dei Miracoli','Fresque Tuttomondo (Haring)','Piazza dei Cavalieri'] } },
  { id:21, name:'Firenze', category:'arte',
    catLabel:{ it:'Città d\'Arte', en:'City of Art', fr:'Cité d\'Art' },
    desc:{ it:'La capitale del Rinascimento, tappa finale del percorso su Leonardo e i Medici. Uffizi, Cupola del Brunelleschi, Piazzale Michelangelo.', en:'The capital of the Renaissance, final stop on the Leonardo and Medici trail. Uffizi Gallery, Brunelleschi\'s Dome, Piazzale Michelangelo.', fr:'La capitale de la Renaissance, étape finale du parcours Léonard et Médicis. Galerie des Offices, Dôme de Brunelleschi, Piazzale Michel-Ange.' },
    hl:{ it:['Galleria degli Uffizi','Cupola del Brunelleschi','Piazzale Michelangelo'], en:['Uffizi Gallery','Brunelleschi\'s Dome','Piazzale Michelangelo'], fr:['Galerie des Offices','Dôme de Brunelleschi','Piazzale Michel-Ange'] } },
];

/* ============================================================
   DATI: PRODOTTI (trilingua)
   ============================================================ */
const products = [
  { icon:'🫒',
    name:{ it:'Olio EVO della Valdinievole', en:'EVO Oil of the Valdinievole', fr:'Huile EVO de la Valdinievole' },
    desc:{ it:'Prodotto tra gli oliveti terrazzati di Uzzano, Massa e Cozzile e le colline di Montecatini. Varietà Frantoio, Moraiolo, Leccino.', en:'Produced among the terraced olive groves of Uzzano, Massa e Cozzile and the hills around Montecatini. Varieties: Frantoio, Moraiolo, Leccino.', fr:'Produite parmi les oliviers en terrasses d\'Uzzano, Massa e Cozzile et les collines autour de Montecatini. Variétés : Frantoio, Moraiolo, Leccino.' } },
  { icon:'🍷',
    name:{ it:'Vino DOC Montecarlo', en:'Montecarlo DOC Wine', fr:'Vin DOC Montecarlo' },
    desc:{ it:'Una delle DOC più antiche di Toscana. Il bianco include vitigni francesi (Roussanne, Semillon) portati dai mercanti lucchesi nel Medioevo.', en:'One of Tuscany\'s oldest DOCs. The white includes French grape varieties (Roussanne, Semillon) brought by Luccan merchants in the Middle Ages.', fr:'L\'une des plus anciennes DOC de Toscane. Le blanc comprend des cépages français (Roussanne, Semillon) apportés par les marchands lucquois au Moyen Âge.' } },
  { icon:'🍪',
    name:{ it:'Brigidini di Lamporecchio', en:'Brigidini of Lamporecchio', fr:'Brigidini de Lamporecchio' },
    desc:{ it:'Cialde croccanti all\'anice inventate dalle monache di Santa Brigida. Presenti nelle fiere toscane da almeno 500 anni.', en:'Crispy anise wafers invented by the nuns of Santa Brigida. A fixture at Tuscan fairs for at least 500 years.', fr:'Gaufrettes croustillantes à l\'anis inventées par les sœurs de Santa Brigida. Présentes dans les foires toscanes depuis au moins 500 ans.' } },
  { icon:'🌿',
    name:{ it:'Fagiolo di Sorana', en:'Sorana Bean', fr:'Haricot de Sorana' },
    desc:{ it:'Presidio Slow Food, coltivato solo lungo poche centinaia di metri del torrente Pescia. Buccia quasi invisibile. Fino a 40€/kg.', en:'Slow Food Presidium, grown only along a few hundred metres of the Pescia stream. Almost invisible skin. Up to €40/kg.', fr:'Présidium Slow Food, cultivé seulement sur quelques centaines de mètres du torrent Pescia. Peau quasi invisible. Jusqu\'à 40 €/kg.' } },
  { icon:'🌰',
    name:{ it:'Farina di Castagne IGP', en:'Chestnut Flour IGP', fr:'Farine de Châtaigne IGP' },
    desc:{ it:'Prodotta nell\'Appennino Pistoiese. Con essa si preparano i necci, la polenta dolce e il castagnaccio. Raccolta in autunno.', en:'Produced in the Pistoia Apennines. Used to make necci, sweet polenta and castagnaccio. Harvested in autumn.', fr:'Produite dans les Apennins de Pistoia. Utilisée pour préparer les necci, la polenta douce et le castagnaccio. Récoltée en automne.' } },
  { icon:'🍯',
    name:{ it:'Miele della Montagna Pistoiese', en:'Pistoia Mountain Honey', fr:'Miel de la Montagne Pistoiese' },
    desc:{ it:'Miele millefiori, di castagno e di acacia prodotto tra le foreste dell\'Appennino. Sapori intensi e caratteristici.', en:'Wildflower, chestnut and acacia honey produced in the Apennine forests. Intense and characterful flavours.', fr:'Miel de fleurs sauvages, de châtaignier et d\'acacia produit dans les forêts des Apennins. Saveurs intenses et caractérielles.' } },
  { icon:'🥞',
    name:{ it:'Necci con Ricotta', en:'Necci with Ricotta', fr:'Necci à la Ricotta' },
    desc:{ it:'Crepes di farina di castagne farcite con ricotta fresca. Tipici dell\'autunno-inverno, protagonisti di sagre e mercati locali.', en:'Chestnut flour crepes filled with fresh ricotta. An autumn-winter speciality, star of local fairs and markets.', fr:'Crêpes de farine de châtaignes farcies de ricotta fraîche. Spécialité d\'automne-hiver, vedette des foires et marchés locaux.' } },
  { icon:'🫓',
    name:{ it:'Cecina (Torta di Ceci)', en:'Cecina (Chickpea Flatbread)', fr:'Cecina (Galette de Pois Chiches)' },
    desc:{ it:'Sfoglia croccante di farina di ceci, acqua e olio extravergine cotta in forno a legna. Tipica di Livorno e della costa toscana, si mangia calda — spesso infilata nel pane rustico: il leggendario "cinque e cinque".', en:'A crispy flatbread of chickpea flour, water and extra-virgin olive oil, baked in a wood-fired oven. A speciality of Livorno and the Tuscan coast, best eaten hot — often tucked into rustic bread: the legendary "five and five".', fr:'Une galette croustillante de farine de pois chiches, eau et huile d\'olive vierge extra, cuite au four à bois. Typique de Livourne et de la côte toscane, se déguste chaude — souvent glissée dans un pain rustique : le légendaire "cinq et cinq".' } },
];

/* ============================================================
   RENDERING
   ============================================================ */
function getBadgeClass(cat) {
  return { 'half-day':'badge-half-day','full-day':'badge-full-day','multi-day':'badge-multi-day' }[cat] || '';
}
function getCatClass(cat) {
  return { terme:'cat-terme',borghi:'cat-borghi',arte:'cat-arte',natura:'cat-natura' }[cat] || 'cat-borghi';
}
function getDots(n) {
  return [1,2,3].map(i => `<span class="diff-dot${i<=n?' filled':''}"></span>`).join('');
}

function renderPackages(filter = 'all') {
  const grid = document.getElementById('packagesGrid');
  if (!grid) return;
  grid.innerHTML = packages.map(p => {
    const hidden = filter !== 'all' && p.category !== filter ? ' hidden' : '';
    const badgeLabel = U(`badge.${p.category === 'half-day' ? 'half' : p.category === 'full-day' ? 'full' : 'multi'}`);
    const stops = T(p.tappe).slice(0,4).map(s => `<li>${s}</li>`).join('');
    return `<article class="package-card${hidden}" data-id="${p.id}" role="button" tabindex="0">
      <div class="pkg-header">
        <span class="pkg-num">${p.num}</span>
        <span class="pkg-badge ${getBadgeClass(p.category)}">${badgeLabel}</span>
      </div>
      <div><div class="pkg-icon">${p.icon}</div><h3 class="pkg-title">${T(p.title)}</h3></div>
      <div class="pkg-meta">
        <div class="pkg-meta-item"><span class="pkg-meta-label">${U('meta.duration')}</span><span class="pkg-meta-value">${T(p.durata)}</span></div>
        <div class="pkg-meta-item"><span class="pkg-meta-label">${U('meta.transport')}</span><span class="pkg-meta-value">${T(p.mezzo)}</span></div>
      </div>
      <div class="pkg-stops"><p class="pkg-stops-label">${U('pkg.stops')}</p><ul>${stops}</ul></div>
      <div class="pkg-footer"><div class="difficulty-bar"><div class="diff-dots">${getDots(p.difficoltaLevel)}</div><span>${T(p.difficolta)}</span></div></div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.package-card').forEach(c => {
    c.addEventListener('click', () => openModal(+c.dataset.id));
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); openModal(+c.dataset.id); } });
  });
}

function renderDestinations(filter = 'all') {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  grid.innerHTML = destinations.map(d => {
    const hidden = filter !== 'all' && d.category !== filter ? ' hidden' : '';
    const tags = T(d.hl).map(h => `<span class="highlight-tag">${h}</span>`).join('');
    return `<article class="dest-card${hidden}">
      <span class="dest-category ${getCatClass(d.category)}">${T(d.catLabel)}</span>
      <h3 class="dest-name">${d.name}</h3>
      <p class="dest-desc">${T(d.desc)}</p>
      <div class="dest-highlights">${tags}</div>
    </article>`;
  }).join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = products.map(p => `
    <article class="product-card">
      <span class="product-icon">${p.icon}</span>
      <h3 class="product-name">${T(p.name)}</h3>
      <p class="product-desc">${T(p.desc)}</p>
    </article>`).join('');
}

function renderLangTags() {
  const el = document.getElementById('langTags');
  if (!el) return;
  el.innerHTML = ['it','en','fr'].map(l => `<span class="lang-tag">${U('lang.'+l)}</span>`).join('');
}

function renderSelectOptions() {
  const sel = document.getElementById('package');
  if (!sel) return;
  const ph = U('form.package.ph');
  const custom = U('form.package.custom');
  sel.innerHTML = `<option value="">${ph}</option>` +
    packages.map(p => `<option value="${p.id}">${p.num} — ${T(p.title)}</option>`).join('') +
    `<option value="custom">${custom}</option>`;
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const p = packages.find(x => x.id === id);
  if (!p) return;
  const badgeLabel = U(`badge.${p.category === 'half-day' ? 'half' : p.category === 'full-day' ? 'full' : 'multi'}`);
  const stops = T(p.tappe).map((s,i) => `<div class="modal-stop"><span class="stop-num">${i+1}</span><span>${s}</span></div>`).join('');
  const noteHtml = T(p.note) ? `<p class="modal-section-title">${U('modal.notes')}</p><p style="font-size:.875rem;color:var(--text-light)">${T(p.note)}</p>` : '';
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-body">
      <p class="modal-eyebrow"><span class="pkg-badge ${getBadgeClass(p.category)}">${badgeLabel}</span> ${p.num}</p>
      <h2 class="modal-title" id="modalTitle">${p.icon} ${T(p.title)}</h2>
      <div class="modal-meta-grid">
        <div class="modal-meta-item"><span class="modal-meta-label">${U('meta.duration')}</span><span class="modal-meta-value">${T(p.durata)}</span></div>
        <div class="modal-meta-item"><span class="modal-meta-label">${U('meta.transport')}</span><span class="modal-meta-value">${T(p.mezzo)}</span></div>
        <div class="modal-meta-item"><span class="modal-meta-label">${U('meta.difficulty')}</span><span class="modal-meta-value">${T(p.difficolta)}</span></div>
        <div class="modal-meta-item"><span class="modal-meta-label">${U('meta.type')}</span><span class="modal-meta-value">${T(p.tipo)}</span></div>
      </div>
      <p class="modal-section-title">${U('modal.itinerary')}</p>
      <div class="modal-stops">${stops}</div>
      <div class="modal-ideale"><strong>${U('modal.idealFor')}:</strong> ${T(p.ideale)}</div>
      ${noteHtml}
      <div style="margin-top:2rem"><a href="#contact" class="btn btn-primary" onclick="closeModal()">${U('modal.book')}</a></div>
    </div>`;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   SISTEMA MULTILINGUA
   ============================================================ */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = U(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = U(el.dataset.i18nHtml);
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = U(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  // Aggiorna pulsanti lingua attivi
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  // Applica traduzioni statiche
  applyTranslations();

  // Ri-genera contenuto dinamico
  const pkgF = document.querySelector('[data-filter].active')?.dataset.filter || 'all';
  const dstF = document.querySelector('[data-dest-filter].active')?.dataset.destFilter || 'all';
  renderPackages(pkgF);
  renderDestinations(dstF);
  renderProducts();
  renderLangTags();
  renderSelectOptions();
}

/* ============================================================
   FILTRI
   ============================================================ */
function initFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPackages(btn.dataset.filter);
    });
  });
  document.querySelectorAll('[data-dest-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-dest-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderDestinations(btn.dataset.destFilter);
    });
  });
}

/* ============================================================
   NAVBAR, MODAL, FORM, BACK-TO-TOP
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive:true });
  toggle.addEventListener('click', () => { links.classList.toggle('open'); toggle.setAttribute('aria-expanded', links.classList.contains('open')); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function initForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = U('form.sending');
    setTimeout(() => {
      btn.disabled = false; btn.textContent = U('form.submit');
      note.textContent = U('form.success'); note.className = 'form-note success';
      form.reset();
    }, 1200);
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 600), { passive:true });
  btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth' }); }
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderPackages();
  renderDestinations();
  renderProducts();
  renderLangTags();
  renderSelectOptions();
  initFilters();
  initNavbar();
  initModal();
  initForm();
  initBackToTop();
  initLangSwitcher();
  initSmoothScroll();
});
