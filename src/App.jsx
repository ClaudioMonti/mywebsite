import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [language, setLanguage] = useState('it');

  const texts = {
    it: {
      nav: {
        home: 'Home',
        gallery: 'Galleria',
        services: 'Servizi',
        location: 'Posizione',
        prices: 'Prezzi',
        rules: 'Regole',
        attractions: 'Dintorni',
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
        items: [
          { icon: '📶', name: 'WiFi Gratuito', desc: 'Connessione veloce in tutto l\'appartamento' },
          { icon: '🔥', name: 'Riscaldamento', desc: 'Per le fresche sere toscane' },
          { icon: '🚗', name: 'Parcheggio', desc: 'Gratuito nelle aree circostanti' },
          { icon: '🍳', name: 'Cucina Attrezzata', desc: 'Tutto il necessario per cucinare' },
          { icon: '🔑', name: 'Self Check-in', desc: 'Check-in e check-out automatici' },
          { icon: '🚲', name: 'Noleggio Biciclette', desc: 'Servizio disponibile su richiesta', link: 'https://bike-rental-bnb-w7nx.onrender.com/' },
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
      attractions: {
        title: 'Cosa Vedere nei Dintorni',
        places: [
          { name: 'Montecatini Terme', distance: '10 km', desc: 'Famosa città termale' },
          { name: 'Lucca', distance: '25 km', desc: 'Le mura rinascimentali' },
          { name: 'Firenze', distance: '45 km', desc: 'Culla del Rinascimento' },
          { name: 'Pisa', distance: '50 km', desc: 'La Torre Pendente' },
          { name: 'Collodi', distance: '15 km', desc: 'Parco di Pinocchio' },
          { name: 'Vinci', distance: '20 km', desc: 'Casa natale di Leonardo' },
        ],
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
    },
    en: {
      nav: {
        home: 'Home',
        gallery: 'Gallery',
        services: 'Services',
        location: 'Location',
        prices: 'Prices',
        rules: 'House Rules',
        attractions: 'Nearby',
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
        items: [
          { icon: '📶', name: 'Free WiFi', desc: 'Fast connection throughout the apartment' },
          { icon: '🔥', name: 'Heating', desc: 'For cool Tuscan evenings' },
          { icon: '🚗', name: 'Parking', desc: 'Free in surrounding areas' },
          { icon: '🍳', name: 'Equipped Kitchen', desc: 'Everything you need to cook' },
          { icon: '🔑', name: 'Self Check-in', desc: 'Automatic check-in and check-out' },
          { icon: '🚲', name: 'Bike Rental', desc: 'Service available on request', link: 'https://bike-rental-bnb-w7nx.onrender.com/' },
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
      attractions: {
        title: 'What to See Nearby',
        places: [
          { name: 'Montecatini Terme', distance: '10 km', desc: 'Famous spa town' },
          { name: 'Lucca', distance: '25 km', desc: 'Renaissance walls' },
          { name: 'Florence', distance: '45 km', desc: 'Cradle of the Renaissance' },
          { name: 'Pisa', distance: '50 km', desc: 'The Leaning Tower' },
          { name: 'Collodi', distance: '15 km', desc: 'Pinocchio Park' },
          { name: 'Vinci', distance: '20 km', desc: 'Leonardo\'s birthplace' },
        ],
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
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => scrollToSection('hero')}>
          Casa a Chiesina
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('gallery')}>{t.nav.gallery}</button>
          <button onClick={() => scrollToSection('services')}>{t.nav.services}</button>
          <button onClick={() => scrollToSection('location')}>{t.nav.location}</button>
          <button onClick={() => scrollToSection('prices')}>{t.nav.prices}</button>
          <button onClick={() => scrollToSection('attractions')}>{t.nav.attractions}</button>
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
                  {language === 'it' ? 'Scopri di più' : 'Learn more'}
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.8!2d10.7167!3d43.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a5b5e8e8e8e8e%3A0x0!2sVia%20Cavour%2053%2C%20Chiesina%20Uzzanese!5e0!3m2!1sit!2sit!4v1234567890"
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

      {/* Attractions Section */}
      <section id="attractions" className="section attractions">
        <h2>{t.attractions.title}</h2>
        <div className="decorative-line"></div>
        <div className="attractions-grid">
          {t.attractions.places.map((place, index) => (
            <div key={index} className="attraction-card">
              <h3>{place.name}</h3>
              <span className="distance">{place.distance}</span>
              <p>{place.desc}</p>
            </div>
          ))}
        </div>
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
        {!chatOpen && (
          <div className="chatbot-bubble">
            <span>{language === 'it' ? 'Ciao! Se hai bisogno di aiuto, sono qui per te!' : 'Hi! If you need help, I\'m here for you!'}</span>
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
              src="https://guestore.onrender.com/static/images/avatar.png"
              alt="Assistente virtuale"
              className="chatbot-avatar-img"
            />
          )}
        </button>

        {chatOpen && (
          <div className="chatbot-panel">
            <div className="chatbot-header">
              <span>Assistente Virtuale</span>
              <button onClick={() => setChatOpen(false)}>✕</button>
            </div>
            <iframe
              src="https://guestore.onrender.com/"
              title="Guestore Chatbot"
              className="chatbot-iframe"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
