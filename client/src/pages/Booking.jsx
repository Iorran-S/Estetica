import React from 'react';

const Booking = () => {
  const phoneNumber = '5511993518830';
  const message = encodeURIComponent('Olá! Gostaria de agendar um horário para estética.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="booking-section">
      <h2>Agende seu horário</h2>
      <p>Entre em contato conosco pelo WhatsApp para agendar seu horário.</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button>Agendar via WhatsApp</button>
      </a>
    </section>
  );
};

export default Booking;
