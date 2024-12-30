import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import PsicoterapiaIndividual from "images/PsicoterapiaIndividual.png"
import PsicoterapiaInfantil from "images/Psicoterapia Infantil.png"
import PsicoterapiaCasal from "images/Psicoterapia de Casal.png"
import PsicoterapiaGrupo from "images/Psicoterapia em Grupo.png"
import PsicoterapiDomicilar from "images/Psicoterapia Domiciliar.png"
import AvaliacaoPsicologicaHumanizada from "images/Avaliação Psicológica Humanizada.png"
import OrientacaoVocacional from "images/Orientação Vocacional.png"
import TreinamentosPalestras from "images/Treinamentos e Palestras.jpg"
import PlantaoPsicologico from "images/Psicoterapia em Grupo.png"
import SupervisaoClinica from "images/Supervisão Clínica.png"

import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import Hero from "components/hero/TwoColumnWithVideo.js";


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;


const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;


const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;


const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const StyledModal = styled(ReactModalAdapter)`
&.mainHeroModal__overlay {
  ${tw`fixed inset-0 z-50`}
}
&.mainHeroModal__content {
  ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
}
.content {
  ${tw`w-full lg:p-16`}
}
`;

const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

const baseWhatsAppURL = "https://api.whatsapp.com/send?phone=559191267386&text=Gostaria%20de%20agendar%20o%20serviço%20de%20";


export default ({
  heading = "Checkout the Menu",
  tabs = {
    Starters: [
      {
        imageSrc: PsicoterapiaIndividual,
        title: "Psicoterapia Individual",
        description: "A psicoterapia individual permite ao cliente explorar questões pessoais em um ambiente seguro, utilizando técnicas para compreender sentimentos, comportamentos e pensamentos, promovendo autoconhecimento e desenvolvimento pessoal."
      },
      {
        imageSrc: PsicoterapiaCasal,
        title: "Psicoterapia de Casal",
        description: "Voltada para casais, a psicoterapia de casal trabalha questões relacionais como conflitos, comunicação e intimidade, fortalecendo o vínculo afetivo e promovendo uma convivência harmoniosa."
      },
      {
        imageSrc: PsicoterapiaGrupo,
        title: "Psicoterapia em Grupo",
        description: "A psicoterapia em grupo oferece um espaço para interação entre pessoas com experiências similares, promovendo apoio mútuo e aprendizado coletivo."
      },
      {
        imageSrc: PsicoterapiDomicilar,
        title: "Psicoterapia Domiciliar",
        description: "Atendimento psicoterápico no conforto da residência do cliente, garantindo continuidade no cuidado e suporte emocional necessário para quem não pode se deslocar até o consultório."
      },
      {
        imageSrc: PsicoterapiaInfantil,
        title: "Psicoterapia Infantil",
        description: "Atendimento especializado para crianças, em um ambiente lúdico, que trabalha questões emocionais e comportamentais de forma sensível e adequada ao universo infantil."
      },
      {
        imageSrc: AvaliacaoPsicologicaHumanizada,
        title: "Avaliação Psicológica Humanizada",
        description: "Avaliação psicológica humanizada para diversos casos, incluindo TEA, TDAH, burnout, depressão e ansiedade, com foco no bem-estar emocional e psicológico do paciente."
      },
      {
        imageSrc: OrientacaoVocacional,
        title: "Orientação Vocacional",
        description: "Ajuda jovens e adultos a explorarem habilidades, interesses e valores, auxiliando na escolha de uma profissão que esteja alinhada com suas aspirações e potencialidades."
      },
      {
        imageSrc: TreinamentosPalestras,
        title: "Treinamentos e Palestras",
        description: "Oferecemos treinamentos e palestras sobre temas relacionados ao bem-estar mental, desenvolvimento pessoal e profissional, com o objetivo de promover saúde mental e conscientização."
      },
      {
        imageSrc: PlantaoPsicologico,
        title: "Plantão Psicológico",
        description: "Atendimento imediato e breve para suporte emocional urgente, ideal para situações de crise ou quando a pessoa necessita ser ouvida e acolhida no momento."
      },
      {
        imageSrc: SupervisaoClinica,
        title: "Supervisão Clínica",
        description: "Serviço de orientação para profissionais e estagiários da psicologia, focando no desenvolvimento de competências clínicas e apoio técnico em casos práticos."
      }
    ].map(item => ({
      ...item,
      whatsappAPICall: `${baseWhatsAppURL}${encodeURIComponent(item.title)}!`
    }))
  },
  imageCss = null,
  name = "services"
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab] = useState(tabsKeys[0]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardWhatsappMessageAPI, setCardWhatsappMessageAPI] = useState("");
  const [cardImageSrc, setCardImageSrc] = useState(null);

  const toggleModal = (card) => {
    setCardTitle(card.title)
    setCardDescription(card.description)
    setCardImageSrc(card.imageSrc)
    setCardWhatsappMessageAPI(card.whatsappAPICall)
    setModalIsOpen(!modalIsOpen);
  }


  return (
    <Container name={name}>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>

        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) =>
            (
              <CardContainer key={index}>
                <Card
                  className="group"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  onTouchStart={(e) => {
                    e.preventDefault(); // Previne comportamentos indesejados
                    toggleModal(card);
                  }}
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton onClick={() => toggleModal(card)}>Saiba mais</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                  </CardText>
                </Card>
              </CardContainer>

            ))

            }
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />

      <StyledModal
        closeTimeoutMS={300}
        className="mainHeroModal"
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <CloseModalButton onClick={toggleModal}>
          <CloseIcon tw="w-6 h-6" />
        </CloseModalButton>

        <div className="content">
          {/* <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" /> */}
          <Hero
            heading={<><HighlightedText>{cardTitle}</HighlightedText></>}
            description={cardDescription}
            imageSrc={cardImageSrc}
            imageDecoratorBlob={true}
            primaryButtonText="Entre em contato"
            primaryButtonUrl={cardWhatsappMessageAPI}
            name="landing"
          />
        </div>

      </StyledModal>
    </Container>
  );
};
