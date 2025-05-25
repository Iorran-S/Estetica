import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="5511993518830" // Substitua pelo seu número
      accountName="Estética Martins"
      avatar="/logo.png" // Caminho para o logo da empresa
      statusMessage="Online"
      chatMessage="Olá! Como posso ajudá-lo(a)?"
      placeholder="Escreva sua mensagem"
    />
  );
};

export default WhatsAppButton;
