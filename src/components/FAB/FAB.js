import React from 'react';
import tw from 'twin.macro';
import { FaWhatsapp } from 'react-icons/fa';

const Fab = tw.a`
  fixed
  w-16 h-16
  flex items-center justify-center
  rounded-full
  bg-green-500
  hover:bg-green-600
  shadow-lg
  z-50
`;

export default class WhatsappFab extends React.Component {
  render() {

    const url = `https://api.whatsapp.com/send?phone=55${process.env.REACT_APP_NUMERO_TELEFONE}&text=Gostaria%20de%20agendar%20um%20serviço%20`;

    return (
      <Fab
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          bottom: '1.5rem',
          right: '1.5rem',
          position: 'fixed',
        }}
      >
        <FaWhatsapp size={28} color="#fff" />
      </Fab>
    );
  }
}
