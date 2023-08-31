import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppContact = () => {
  const phoneNumber = '51994984977'; // Aquí debes colocar tu número de teléfono de WhatsApp
  
  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className='flex flex-row bg-green-500 hover:bg-green-700 hover:tracking-wider text-white py-2 px-4 rounded-lg font-montserrat p-4 m-4 items-center justify-center'
      onClick={openWhatsApp}
    >
      Send me a message
      <FaWhatsapp className='ml-1' size={30}/>
    </button>
  );
};
