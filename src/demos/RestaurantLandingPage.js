import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Olá! Sejam <HighlightedText>Bem-vindos</HighlightedText></>}
        description="Profissionais preparados para melhor lhe atender!"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Entre em contato"
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
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Veja nossos <HighlightedText>serviços</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            <HighlightedText>Salas</HighlightedText> perfeitas pra você
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Recepção",
            description: "Recepção disponibiliza para todas as salas",
            url: "#"
          },
          {
            imageSrc: shopIconImageSrc,
            title: "Conforto garantido",
            description: "Salas com sofás disponíveis",
            url: "#"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Acústica",
            description: "As salas oferecem selagem acústica",
            url: "#"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Climatização",
            description: "Todas as salas possuem sistema de ar condicionado",
            url: "#"
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <DownloadApp


        text={<>
          Entre em contato e encontre acolhimento, empatia e respeito. Estamos aqui para entender suas necessidades e <HighlightedTextInverse>ajudar você</HighlightedTextInverse>  a trilhar caminhos alinhados aos seus objetivos. </>}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
