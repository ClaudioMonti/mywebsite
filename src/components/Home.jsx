import React, { useState } from 'react';
import ModalImage from 'react-modal-image';
import Profile from './Profile';
import './home.css';
const HomeComponent = () => {
  // Stato per il cambio di lingua
  const [language, setLanguage] = useState('it');

  // Testi multilingua
  const texts = {
    it: {
      title: 'Benvenuto nel nostro appartamento!',
      description:
        'Scopri la comodità e il fascino di soggiornare nel cuore della Toscana.',
      bookNow: 'Prenota Ora',
      services: 'Servizi Offerti',
      serviceList: [
        'WiFi gratuito',
        'Parcheggio gratuito',
        'Cucina attrezzata',
      ],
      gallery: 'Galleria',
    },
    en: {
      title: 'Welcome to our apartment!',
      description:
        'Discover the comfort and charm of staying in the heart of Tuscany.',
      bookNow: 'Book Now',
      services: 'Offered Services',
      serviceList: [
        'Free WiFi',
        'Air Conditioning',
        'Free Parking',
        'Equipped Kitchen',
        'Panoramic View',
      ],
      gallery: 'Gallery',
    },
  };

  const t = texts[language];

  return (
    <div>
      {/* Selettore di lingua */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setLanguage('it')}>Italiano</button>
        <button onClick={() => setLanguage('en')}>English</button>
      </div>

      <h1 className="hero-banner">{t.title}</h1>
      <p>{t.description}</p>

      {/* Immagine principale */}
      <img
        src="https://www.urlaubsguru.de/wp-content/uploads/2015/11/toskana-landschaft-bei-sonnenuntergang-istock-498400319-2.jpg"
        alt="Appartamento"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      />

      {/* Servizi offerti */}
      <h2 style={{ marginTop: '20px' }}>Servizi offerti:</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✅ WiFi gratuito</li>
        <li>✅ Riscaldamento</li>
        <li>✅ Parcheggio gratuito nelle aree circostanti</li>
        <li>✅ Cucina attrezzata</li>
      </ul>

      {/* Galleria di immagini */}
      <h2>{t.gallery}</h2>
      <div className="gallery">
        {[
          'https://i.postimg.cc/MThKsK95/5b0badd8-97c9-4b9c-aa11-fef2820f4be9.webp',
          'https://i.postimg.cc/906VB8Fn/62e828db-02d2-41e6-ba7f-610cf8b66e6e.webp',
          'https://i.postimg.cc/rwQVB9hK/20230726-170636.jpg',
          'https://i.postimg.cc/Pxz89RR0/a49fc239-93d0-4d9e-8d50-539ea0c1d28a.webp',
          'https://i.postimg.cc/zv7c8gQw/20230726-185229.jpg',
          'https://i.postimg.cc/bJjCngcH/20230726-172854.jpg',
        ].map((src, index) => (
          <div className="gallery-item" key={index}>
            <ModalImage
              small={src}
              large={src}
              alt={`Immagine ${index + 1}`}
              hideDownload={true}
              hideZoom={true}
            />
          </div>
        ))}
      </div>

      {/* Pulsante di prenotazione */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '60px',
          paddingBottom: '40px',
        }}
      >
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#ff7f50',
            color: 'white',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Prenotazione simulata!')}
        >
          {t.bookNow}
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
