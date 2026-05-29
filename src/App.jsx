import React, { useState, useEffect } from 'react';
import './styles.css';
import ChatBot from './ChatBot';

const App = () => {
  const [language, setLanguage] = useState('it');
  const [menuOpen, setMenuOpen] = useState(false);

  const ciceroneUrl = '/cicerone/';
  const bikeUrl = 'https://bike-rental-bnb-w7nx.onrender.com/';

  const texts = {
    it: {
      nav: {
        home: 'Home',
        gallery: 'Galleria',
        services: 'Servizi',
        location: 'Posizione',
        prices: 'Prezzi',
        rules: 'Regole',
        bikes: 'Biciclette',
        cicerone: 'Cicerone',
        contact: 'Contatti',
      },
      hero: {
        title: 'Casa a Chiesina Uzzanese',
        subtitle: 'Il tuo punto di appoggio rilassante nel cuore della Toscana',
        cta: 'Scopri di più',
      },
      about: {
        title: 'Benvenuti',
        description: 'Immergetevi nell\'atmosfera autentica della Toscana nel nostro accogliente appartamento a Chiesina Uzzanese. Un rifugio perfetto per chi cerca tranquillità, comfort e la bellezza senza tempo della campagna toscana.',
      },
      gallery: {
        title: 'La Nostra Casa',
      },
      services: {
        title: 'Comfort e Servizi',
        learnMore: 'Scopri di più',
        items: [
          { icon: '📶', name: 'WiFi Gratuito', desc: 'Connessione veloce in tutto l\'appartamento' },
          { icon: '🔥', name: 'Riscaldamento', desc: 'Per le fresche sere toscane' },
          { icon: '🚗', name: 'Parcheggio', desc: 'Gratuito nelle aree circostanti' },
          { icon: '🍳', name: 'Cucina Attrezzata', desc: 'Tutto il necessario per cucinare' },
          { icon: '🔑', name: 'Self Check-in', desc: 'Check-in e check-out automatici' },
        ],
      },
      location: {
        title: 'Dove Siamo',
        address: 'Via Cavour 53, Chiesina Uzzanese (PT)',
        description: 'Nel cuore della Valdinievole, a pochi passi dal centro storico e ben collegato alle principali città d\'arte toscane.',
      },
      prices: {
        title: 'Prezzi',
        startingFrom: 'A partire da',
        price: '€50',
        perNight: 'a notte',
        note: 'Il prezzo finale può variare in base alla stagione, durata del soggiorno, spese di pulizia e tasse locali.',
        cta: 'Verifica disponibilità',
      },
      rules: {
        title: 'Regole della Casa',
        checkIn: 'Check-in: dalle 14:00 (automatico)',
        checkOut: 'Check-out: entro le 11:00 (automatico)',
        guests: 'Massimo 2-3 ospiti (divano letto disponibile)',
        items: [
          { icon: '🚭', rule: 'Vietato fumare' },
          { icon: '🐾', rule: 'Non sono ammessi animali' },
          { icon: '🎉', rule: 'Non sono consentite feste' },
          { icon: '🤫', rule: 'Rispettare la quiete dopo le 22:00' },
        ],
      },
      bikes: {
        eyebrow: 'Esplora la Valdinievole in libertà',
        title: 'Noleggio Biciclette',
        subtitle: 'Pedala tra vigneti, borghi medievali e terme storiche. Un modo autentico e sostenibile per scoprire il territorio toscano.',
        features: [
          { icon: '🗺️', name: 'Percorsi Consigliati', desc: 'Itinerari adatti a tutti i livelli, dai principianti agli esperti' },
          { icon: '🌿', name: 'Natura e Paesaggi', desc: 'Campagna toscana, colline, vigneti e borghi pittoreschi' },
          { icon: '🚲', name: 'Bici di Qualità', desc: 'Biciclette in ottimo stato, disponibili su prenotazione' },
          { icon: '📍', name: 'Punto di Partenza', desc: 'Direttamente dall\'appartamento, senza spostamenti' },
        ],
        stat1: 'Disponibile su richiesta',
        stat2: 'Partenza dall\'appartamento',
        cta: 'Scopri il servizio',
      },
      cicerone: {
        eyebrow: 'Il tuo host è anche guida turistica',
        title: 'Esplora la Toscana con Cicerone',
        subtitle: '12 pacchetti escursionistici tra borghi medievali, terme storiche, capolavori d\'arte e sapori autentici della Valdinievole e Toscana.',
        features: [
          { icon: '🏰', name: 'Borghi Medievali', desc: 'Strade lastricate, torri antiche e storia millenaria' },
          { icon: '♨️', name: 'Terme Storiche', desc: 'Benessere e relax nelle acque termali della Valdinievole' },
          { icon: '🎨', name: 'Arte e Cultura', desc: 'Da Vinci, la Venere, i capolavori del Rinascimento' },
          { icon: '🍷', name: 'Sapori Autentici', desc: 'Vino, olio extravergine, cecina e prodotti tipici' },
        ],
        stat1: '12 pacchetti',
        stat2: '21 destinazioni',
        stat3: '3 lingue',
        cta: 'Scopri tutti i tour',
      },
      contact: {
        title: 'Contattaci',
        subtitle: 'Hai domande? Scrivici!',
        name: 'Il tuo nome',
        email: 'La tua email',
        message: 'Il tuo messaggio',
        send: 'Invia Messaggio',
        whatsapp: 'Scrivici su WhatsApp',
        airbnb: 'Prenota su Airbnb',
      },
      host: {
        title: 'Il Vostro Host',
        name: 'Claudio Monti',
        bio: 'Viaggiatore esperto e appassionato, amo condividere la bellezza della mia terra con ospiti da tutto il mondo. Sarò felice di darvi consigli per rendere il vostro soggiorno indimenticabile!',
      },
      footer: {
        rights: 'Tutti i diritti riservati',
      },
      chatbot: {
        bubble: 'Ciao! Se hai bisogno di aiuto, sono qui per te!',
        header: 'il tuo assistente virtuale',
      },
    },
    en: {
      nav: {
        home: 'Home',
        gallery: 'Gallery',
        services: 'Services',
        location: 'Location',
        prices: 'Prices',
        rules: 'House Rules',
        bikes: 'Bikes',
        cicerone: 'Cicerone',
        contact: 'Contact',
      },
      hero: {
        title: 'Casa a Chiesina Uzzanese',
        subtitle: 'Your relaxing retreat in the heart of Tuscany',
        cta: 'Discover more',
      },
      about: {
        title: 'Welcome',
        description: 'Immerse yourself in the authentic atmosphere of Tuscany in our cozy apartment in Chiesina Uzzanese. A perfect retreat for those seeking tranquility, comfort, and the timeless beauty of the Tuscan countryside.',
      },
      gallery: {
        title: 'Our Home',
      },
      services: {
        title: 'Comfort & Amenities',
        learnMore: 'Learn more',
        items: [
          { icon: '📶', name: 'Free WiFi', desc: 'Fast connection throughout the apartment' },
          { icon: '🔥', name: 'Heating', desc: 'For cool Tuscan evenings' },
          { icon: '🚗', name: 'Parking', desc: 'Free in surrounding areas' },
          { icon: '🍳', name: 'Equipped Kitchen', desc: 'Everything you need to cook' },
          { icon: '🔑', name: 'Self Check-in', desc: 'Automatic check-in and check-out' },
        ],
      },
      location: {
        title: 'Where We Are',
        address: 'Via Cavour 53, Chiesina Uzzanese (PT)',
        description: 'In the heart of Valdinievole, a few steps from the historic center and well connected to the main Tuscan art cities.',
      },
      prices: {
        title: 'Prices',
        startingFrom: 'Starting from',
        price: '€50',
        perNight: 'per night',
        note: 'Final price may vary based on season, length of stay, cleaning fees and local taxes.',
        cta: 'Check availability',
      },
      rules: {
        title: 'House Rules',
        checkIn: 'Check-in: from 2:00 PM (self check-in)',
        checkOut: 'Check-out: by 11:00 AM (automatic)',
        guests: 'Maximum 2-3 guests (sofa bed available)',
        items: [
          { icon: '🚭', rule: 'No smoking' },
          { icon: '🐾', rule: 'No pets allowed' },
          { icon: '🎉', rule: 'No parties' },
          { icon: '🤫', rule: 'Quiet hours after 10:00 PM' },
        ],
      },
      bikes: {
        eyebrow: 'Explore the Valdinievole freely',
        title: 'Bike Rental',
        subtitle: 'Pedal through vineyards, medieval villages and historic spas. An authentic and sustainable way to discover the Tuscan countryside.',
        features: [
          { icon: '🗺️', name: 'Suggested Routes', desc: 'Itineraries for all levels, from beginners to experienced cyclists' },
          { icon: '🌿', name: 'Nature & Scenery', desc: 'Tuscan countryside, hills, vineyards and picturesque villages' },
          { icon: '🚲', name: 'Quality Bikes', desc: 'Well-maintained bicycles, available on request' },
          { icon: '📍', name: 'Starting Point', desc: 'Directly from the apartment, no transfers needed' },
        ],
        stat1: 'Available on request',
        stat2: 'Depart from the apartment',
        cta: 'Discover the service',
      },
      cicerone: {
        eyebrow: 'Your host is also a tour guide',
        title: 'Explore Tuscany with Cicerone',
        subtitle: '12 excursion packages through medieval villages, historic spas, art masterpieces and authentic flavours of the Valdinievole and Tuscany.',
        features: [
          { icon: '🏰', name: 'Medieval Villages', desc: 'Cobbled streets, ancient towers and centuries of history' },
          { icon: '♨️', name: 'Historic Spas', desc: 'Wellness and relaxation in Valdinievole\'s thermal waters' },
          { icon: '🎨', name: 'Art & Culture', desc: 'Da Vinci, Venus, masterpieces of the Renaissance' },
          { icon: '🍷', name: 'Authentic Flavours', desc: 'Wine, extra virgin olive oil, cecina and local products' },
        ],
        stat1: '12 packages',
        stat2: '21 destinations',
        stat3: '3 languages',
        cta: 'Discover all tours',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Have questions? Write to us!',
        name: 'Your name',
        email: 'Your email',
        message: 'Your message',
        send: 'Send Message',
        whatsapp: 'Message us on WhatsApp',
        airbnb: 'Book on Airbnb',
      },
      host: {
        title: 'Your Host',
        name: 'Claudio Monti',
        bio: 'Experienced traveler and passionate explorer, I love sharing the beauty of my land with guests from around the world. I\'ll be happy to give you tips to make your stay unforgettable!',
      },
      footer: {
        rights: 'All rights reserved',
      },
      chatbot: {
        bubble: 'Hi! If you need help, I\'m here for you!',
        header: 'your virtual assistant',
      },
    },
    fr: {
      nav: {
        home: 'Accueil',
        gallery: 'Galerie',
        services: 'Services',
        location: 'Situation',
        prices: 'Tarifs',
        rules: 'Règlement',
        bikes: 'Vélos',
        cicerone: 'Cicerone',
        contact: 'Contact',
      },
      hero: {
        title: 'Casa a Chiesina Uzzanese',
        subtitle: 'Votre retraite apaisante au cœur de la Toscane',
        cta: 'Découvrir',
      },
      about: {
        title: 'Bienvenue',
        description: 'Plongez dans l\'atmosphère authentique de la Toscane dans notre charmant appartement à Chiesina Uzzanese. Un refuge idéal pour ceux qui cherchent tranquillité, confort et la beauté intemporelle de la campagne toscane.',
      },
      gallery: {
        title: 'Notre Maison',
      },
      services: {
        title: 'Confort & Services',
        learnMore: 'En savoir plus',
        items: [
          { icon: '📶', name: 'WiFi Gratuit', desc: 'Connexion rapide dans tout l\'appartement' },
          { icon: '🔥', name: 'Chauffage', desc: 'Pour les fraîches soirées toscanes' },
          { icon: '🚗', name: 'Parking', desc: 'Gratuit dans les zones environnantes' },
          { icon: '🍳', name: 'Cuisine Équipée', desc: 'Tout le nécessaire pour cuisiner' },
          { icon: '🔑', name: 'Self Check-in', desc: 'Arrivée et départ automatiques' },
        ],
      },
      location: {
        title: 'Où Nous Sommes',
        address: 'Via Cavour 53, Chiesina Uzzanese (PT)',
        description: 'Au cœur de la Valdinievole, à deux pas du centre historique et bien relié aux principales villes d\'art toscanes.',
      },
      prices: {
        title: 'Tarifs',
        startingFrom: 'À partir de',
        price: '€50',
        perNight: 'par nuit',
        note: 'Le prix final peut varier selon la saison, la durée du séjour, les frais de ménage et les taxes locales.',
        cta: 'Vérifier les disponibilités',
      },
      rules: {
        title: 'Règlement de la Maison',
        checkIn: 'Check-in : à partir de 14h00 (automatique)',
        checkOut: 'Check-out : avant 11h00 (automatique)',
        guests: 'Maximum 2-3 personnes (canapé-lit disponible)',
        items: [
          { icon: '🚭', rule: 'Défense de fumer' },
          { icon: '🐾', rule: 'Animaux non admis' },
          { icon: '🎉', rule: 'Fêtes non autorisées' },
          { icon: '🤫', rule: 'Silence à partir de 22h00' },
        ],
      },
      bikes: {
        eyebrow: 'Explorez la Valdinievole en liberté',
        title: 'Location de Vélos',
        subtitle: 'Pédalez entre vignobles, villages médiévaux et thermes historiques. Une façon authentique et durable de découvrir la campagne toscane.',
        features: [
          { icon: '🗺️', name: 'Itinéraires Conseillés', desc: 'Parcours adaptés à tous les niveaux, des débutants aux expérimentés' },
          { icon: '🌿', name: 'Nature & Paysages', desc: 'Campagne toscane, collines, vignobles et villages pittoresques' },
          { icon: '🚲', name: 'Vélos de Qualité', desc: 'Bicyclettes en parfait état, disponibles sur réservation' },
          { icon: '📍', name: 'Point de Départ', desc: 'Directement depuis l\'appartement, sans déplacement' },
        ],
        stat1: 'Disponible sur demande',
        stat2: 'Départ depuis l\'appartement',
        cta: 'Découvrir le service',
      },
      cicerone: {
        eyebrow: 'Votre hôte est aussi guide touristique',
        title: 'Explorez la Toscane avec Cicerone',
        subtitle: '12 excursions à travers villages médiévaux, thermes historiques, chefs-d\'œuvre artistiques et saveurs authentiques de la Valdinievole et Toscane.',
        features: [
          { icon: '🏰', name: 'Villages Médiévaux', desc: 'Ruelles pavées, tours anciennes et histoire millénaire' },
          { icon: '♨️', name: 'Thermes Historiques', desc: 'Bien-être et détente dans les eaux thermales de la Valdinievole' },
          { icon: '🎨', name: 'Art & Culture', desc: 'Da Vinci, la Vénus, chefs-d\'œuvre de la Renaissance' },
          { icon: '🍷', name: 'Saveurs Authentiques', desc: 'Vin, huile d\'olive, cecina et produits locaux' },
        ],
        stat1: '12 excursions',
        stat2: '21 destinations',
        stat3: '3 langues',
        cta: 'Découvrir tous les tours',
      },
      contact: {
        title: 'Nous Contacter',
        subtitle: 'Des questions ? Écrivez-nous !',
        name: 'Votre nom',
        email: 'Votre e-mail',
        message: 'Votre message',
        send: 'Envoyer',
        whatsapp: 'Écrivez-nous sur WhatsApp',
        airbnb: 'Réserver sur Airbnb',
      },
      host: {
        title: 'Votre Hôte',
        name: 'Claudio Monti',
        bio: 'Voyageur passionné, j\'adore partager la beauté de ma terre avec des hôtes du monde entier. Je serai ravi de vous donner des conseils pour rendre votre séjour inoubliable !',
      },
      footer: {
        rights: 'Tous droits réservés',
      },
      chatbot: {
        bubble: 'Bonjour ! Si vous avez besoin d\'aide, je suis là pour vous !',
        header: 'votre assistant virtuel',
      },
    },
  };

  const t = texts[language];

  const images = [
    'https://i.postimg.cc/MThKsK95/5b0badd8-97c9-4b9c-aa11-fef2820f4be9.webp',
    'https://i.postimg.cc/906VB8Fn/62e828db-02d2-41e6-ba7f-610cf8b66e6e.webp',
    'https://i.postimg.cc/rwQVB9hK/20230726-170636.jpg',
    'https://i.postimg.cc/Pxz89RR0/a49fc239-93d0-4d9e-8d50-539ea0c1d28a.webp',
    'https://i.postimg.cc/zv7c8gQw/20230726-185229.jpg',
    'https://i.postimg.cc/bJjCngcH/20230726-172854.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [bubbleFading, setBubbleFading] = useState(false);
  const [bubbleHidden, setBubbleHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setBubbleFading(true);
    }, 5000);
    const hideTimer = setTimeout(() => {
      setBubbleHidden(true);
    }, 6500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Ciao! Mi chiamo ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}`;
    window.open(`https://wa.me/39${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
  };

  const whatsappNumber = '3349209193';
  const airbnbLink = 'https://airbnb.it/h/claudiomonti97';

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => scrollToSection('hero')}>
          Casa a Chiesina
        </div>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</button>
          <button onClick={() => scrollToSection('services')}>{t.nav.services}</button>
          <button onClick={() => scrollToSection('location')}>{t.nav.location}</button>
          <button onClick={() => scrollToSection('prices')}>{t.nav.prices}</button>
          <button onClick={() => scrollToSection('rules')}>{t.nav.rules}</button>
          <button onClick={() => scrollToSection('bikes')}>{t.nav.bikes}</button>
          <button onClick={() => scrollToSection('cicerone')}>{t.nav.cicerone}</button>
          <button onClick={() => scrollToSection('contact')}>{t.nav.contact}</button>
        </div>
        <div className="lang-switch">
          <button
            className={language === 'it' ? 'active' : ''}
            onClick={() => setLanguage('it')}
          >
            IT
          </button>
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={language === 'fr' ? 'active' : ''}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-overlay">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <button className="cta-button" onClick={() => scrollToSection('about')}>
            {t.hero.cta}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-content">
          <h2>{t.about.title}</h2>
          <div className="decorative-line"></div>
          <p>{t.about.description}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery">
        <h2>{t.gallery.title}</h2>
        <div className="decorative-line"></div>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Appartamento ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImage} alt="Immagine ingrandita" />
        </div>
      )}

      {/* Services Section */}
      <section id="services" className="section services">
        <h2>{t.services.title}</h2>
        <div className="decorative-line"></div>
        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              {service.link && (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  {t.services.learnMore}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section location">
        <h2>{t.location.title}</h2>
        <div className="decorative-line"></div>
        <p className="location-address">{t.location.address}</p>
        <p>{t.location.description}</p>
        <div className="map-container">
          <iframe
            title="Mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5!2d10.7157!3d43.8396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a0331dbce7a55%3A0x4094f9b8db52ab0!2s51013%20Chiesina%20Uzzanese%20PT!5e0!3m2!1sit!2sit!4v1706000000000!5m2!1sit!2sit"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="section prices">
        <h2>{t.prices.title}</h2>
        <div className="decorative-line"></div>
        <div className="price-single">
          <span className="starting-from">{t.prices.startingFrom}</span>
          <div className="price">{t.prices.price}</div>
          <span className="period">{t.prices.perNight}</span>
        </div>
        <p className="price-note">{t.prices.note}</p>
        <a
          href={airbnbLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          {t.prices.cta}
        </a>
      </section>

      {/* Rules Section */}
      <section id="rules" className="section rules">
        <h2>{t.rules.title}</h2>
        <div className="decorative-line"></div>
        <div className="rules-info">
          <p><strong>{t.rules.checkIn}</strong></p>
          <p><strong>{t.rules.checkOut}</strong></p>
          <p><strong>{t.rules.guests}</strong></p>
        </div>
        <div className="rules-grid">
          {t.rules.items.map((item, index) => (
            <div key={index} className="rule-card">
              <span className="rule-icon">{item.icon}</span>
              <span>{item.rule}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bikes Section */}
      <section id="bikes" className="bikes-section">
        <span className="bikes-eyebrow">{t.bikes.eyebrow}</span>
        <h2 className="bikes-section-title">{t.bikes.title}</h2>
        <div className="bikes-decorative-line"></div>
        <p className="bikes-section-subtitle">{t.bikes.subtitle}</p>
        <div className="bikes-features-grid">
          {t.bikes.features.map((f, i) => (
            <div key={i} className="bikes-feature-card">
              <span className="bikes-feature-icon">{f.icon}</span>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="bikes-stats">
          <span className="bikes-stat">{t.bikes.stat1}</span>
          <span className="bikes-stat-dot">·</span>
          <span className="bikes-stat">{t.bikes.stat2}</span>
        </div>
        <a href={bikeUrl} target="_blank" rel="noopener noreferrer" className="bikes-cta-btn">{t.bikes.cta} →</a>
      </section>

      {/* Cicerone Section */}
      <section id="cicerone" className="cicerone-section">
        <span className="cicerone-eyebrow">{t.cicerone.eyebrow}</span>
        <h2 className="cicerone-section-title">{t.cicerone.title}</h2>
        <div className="cicerone-decorative-line"></div>
        <p className="cicerone-section-subtitle">{t.cicerone.subtitle}</p>
        <div className="cicerone-features-grid">
          {t.cicerone.features.map((f, i) => (
            <div key={i} className="cicerone-feature-card">
              <span className="cicerone-feature-icon">{f.icon}</span>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="cicerone-stats">
          <span className="cicerone-stat">{t.cicerone.stat1}</span>
          <span className="cicerone-stat-dot">·</span>
          <span className="cicerone-stat">{t.cicerone.stat2}</span>
          <span className="cicerone-stat-dot">·</span>
          <span className="cicerone-stat">{t.cicerone.stat3}</span>
        </div>
        <a href={ciceroneUrl} className="cicerone-cta-btn">{t.cicerone.cta} →</a>
      </section>

      {/* Host Section */}
      <section id="host" className="section host">
        <h2>{t.host.title}</h2>
        <div className="decorative-line"></div>
        <div className="host-card">
          <img
            src="https://i.postimg.cc/xd4Xcxwq/IMG-20240620-151108975.jpg"
            alt={t.host.name}
            className="host-avatar"
          />
          <h3>{t.host.name}</h3>
          <p>{t.host.bio}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>{t.contact.title}</h2>
        <div className="decorative-line"></div>
        <p className="contact-subtitle">{t.contact.subtitle}</p>

        <div className="contact-buttons">
          <a
            href={`https://wa.me/39${whatsappNumber}?text=${encodeURIComponent('Ciao! Vorrei informazioni sull\'appartamento.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            {t.contact.whatsapp}
          </a>
          <a
            href={airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="airbnb-button"
          >
            {t.contact.airbnb}
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t.contact.name}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder={t.contact.email}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <textarea
            placeholder={t.contact.message}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
            rows="5"
          ></textarea>
          <button type="submit" className="submit-button">
            {formSent ? '✓' : t.contact.send}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Casa a Chiesina Uzzanese &copy; {new Date().getFullYear()} - {t.footer.rights}</p>
      </footer>

      {/* Chatbot Guestore */}
      <div className="chatbot-container">
        {!chatOpen && !bubbleHidden && (
          <div className={`chatbot-bubble ${bubbleFading ? 'fade-out' : ''}`}>
            <span>{t.chatbot.bubble}</span>
            <div className="bubble-arrow"></div>
          </div>
        )}
        <button
          className={`chatbot-avatar ${chatOpen ? 'active' : ''}`}
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Apri assistente virtuale"
        >
          {chatOpen ? '✕' : (
            <img
              src="/avatar.png"
              alt="Assistente virtuale"
              className="chatbot-avatar-img"
            />
          )}
        </button>

        {chatOpen && (
          <div className="chatbot-panel">
            <div className="chatbot-header">
              <span>Guestore - {t.chatbot.header}</span>
              <button onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <ChatBot language={language} onClose={() => setChatOpen(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
