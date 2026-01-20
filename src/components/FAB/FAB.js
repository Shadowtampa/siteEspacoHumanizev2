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
  state = {
    visible: false,
  };

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ visible: true });
    }, 1450);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleClick = () => {

    const url =
  `https://api.whatsapp.com/send?phone=55${process.env.REACT_APP_NUMERO_TELEFONE}` +
  `&text=Gostaria%20de%20agendar%20um%20serviço%20`;

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11562559108/PSQdCJGzyugbEITNuokr',
      });
    }

    window.open(
      url,
      '_blank'
    );
  };

  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <Fab
        target="_blank"
        rel="noopener noreferrer"
        style={{
          bottom: '1.5rem',
          right: '1.5rem',
          position: 'fixed',
        }}
        onClick={this.handleClick}
      >
        <FaWhatsapp size={28} color="#fff" />
      </Fab>
    );
  }
}
