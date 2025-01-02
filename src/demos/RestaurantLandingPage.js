import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import FotosSalas from "components/testimonials/TwoColumnWithImage.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import AcousticImageSrc from "images/acoustic.svg";
import AirConImageSrc from "images/airCon.svg";
import frontDeskImageSrc from "images/front-desk.png";
import couchImageSrc from "images/sofa.png";

import fotoSala1 from "images/fotosSala1.jpeg"
import fotoSala2 from "images/fotosSala2.jpeg"
import fotoSala3 from "images/fotosSala3.jpeg"
import fotoSala4 from "images/fotosSala4.jpeg"
import fotoSala5 from "images/fotosSala5.jpeg"
import fotoSala6 from "images/fotosSala6.jpeg"


import Header from "../components/headers/light.js";

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const UnderlinedText = tw.span` text-blue-500 font-bold`;
const Description = tw.span`inline-block mt-8`;

export default () => {
  // const Subheading = tw.span`tracking-wider text-sm font-medium`;

  const imageCss = tw`rounded-4xl`;


  return (
    <AnimationRevealPage>

      <Header />


      <Hero
        heading={<>Olá! Sejam <HighlightedText>Bem-vindos!</HighlightedText></>}
        description="Contamos com profissionais qualificados para oferecer o melhor atendimento a você!"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        name="landing"
        primaryButtonText=""
      />


      <MainFeature
        heading={
          <>
            Mais que uma clínica,
            <wbr /> <HighlightedText>um lugar em que o ser humano é a prioridade</HighlightedText>
          </>
        }
        description={
          <Description>
            A clínica nasceu de um sonho genuíno, compartilhado por Alexandra Alves e Kaio Rocha, dois psicólogos que acreditavam profundamente em um espaço de terapia onde cada pessoa pudesse se sentir verdadeiramente acolhida. Mais do que uma clínica, eles queriam criar um lugar em que o ser humano fosse sempre a prioridade, onde ninguém se sentisse julgado, e onde cada atendimento fosse feito com ética, respeito e empatia. </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
        name="about"
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Veja nossos <HighlightedText>serviços</HighlightedText>
          </>
        }
        name="services"
      />


      <FotosSalas
        title={<>
          Espaço <HighlightedText>perfeito</HighlightedText>  para você
        </>}
        testimonials={
          [
            {
              imageSrc: fotoSala1
            },
            {
              imageSrc: fotoSala2
            },
            {
              imageSrc: fotoSala3
            },
            {
              imageSrc: fotoSala4
            },
            {
              imageSrc: fotoSala5
            },
            {
              imageSrc: fotoSala6
            },
          ]}
        name="rooms" />


      <Hero
        heading="Estamos aqui para ouvir você!"
        description={<>
          Entre em contato e encontre <UnderlinedText>acolhimento</UnderlinedText>, <UnderlinedText>empatia</UnderlinedText> e <UnderlinedText>respeito</UnderlinedText>. Estamos aqui para entender suas necessidades e <HighlightedText>ajudar você</HighlightedText>  a trilhar caminhos alinhados aos seus objetivos. </>}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        name="contact"
        primaryButtonText="Whatsapp"
        primaryButtonUrl={`https://api.whatsapp.com/send?phone=55${process.env.REACT_APP_NUMERO_TELEFONE}&text=Gostaria%20de%20agendar%20um%20serviço`}
      />

      {/* <DownloadApp
        text={<>
          Entre em contato e encontre acolhimento, empatia e respeito. Estamos aqui para entender suas necessidades e <HighlightedText>ajudar você</HighlightedText>  a trilhar caminhos alinhados aos seus objetivos. </>}
        name="contact"
      /> */}


      <span>
        Imagens retiradas de
        <HighlightedText><a href="https://www.freepik.com" target="_blank" rel="noreferrer">Freepik</a></HighlightedText>
      </span>
      <Footer />
    </AnimationRevealPage>
  );
}
