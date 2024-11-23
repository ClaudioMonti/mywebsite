import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('Claudio Monti');
  const [email, setEmail] = useState('claudiomonti9720@gmail.com');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Messaggio inviato');
    // Qui aggiungere la logica per inviare il messaggio
  };

  return (
    <div className="contact">
      <h2>Contatti</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Messaggio:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Contact;
