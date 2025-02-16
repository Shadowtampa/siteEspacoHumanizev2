import React from "react";
import tw from "twin.macro";
// import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Link } from "react-scroll";

// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

// import LogoImage from "images/logo.svg";
// import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
// import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
// import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;

const StyledLink = tw(Link)`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600`;
// const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
// const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
// const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
// const LogoImg = tw.img`w-8`;
// const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
// const SocialLink = styled.a`
//   ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
//   svg {
//     ${tw`w-4 h-4`}
//   }
// `;

const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

export default () => {

  function formatPhoneNumber(phoneNumber) {
    if (!phoneNumber || phoneNumber.length !== 11) return phoneNumber; // Retorna o valor original se o tamanho não for válido
    const countryCode = "+55";
    const ddd = phoneNumber.slice(0, 2);
    const firstPart = phoneNumber.slice(2, 7);
    const secondPart = phoneNumber.slice(7);
    return `${countryCode} ${ddd} ${firstPart}-${secondPart}`;
  }


  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Mapa</ColumnHeading>
            <div>
              <iframe
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Avenida%20Conselheiro%20Furtado,%20n.%C2%BA%202391,%20Edif%C3%ADcio%20Bel%C3%A9m%20Metropolitan,%20sala%20610,%20bairro%20Crema%C3%A7%C3%A3o,%2066040-%20100,%20Bel%C3%A9m,%20Par%C3%A1.+(Espa%C3%A7o%20Humanize)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Espaço Humanize - Localização"
              >
                <a href="https://www.gps.ie/">gps tracker sport</a>
              </iframe>
            </div>
          </Column>
          <Column>
            <ColumnHeading>Acesso Rápido</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <StyledLink href="#"
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Início
                </StyledLink>
              </LinkListItem>
              <LinkListItem>
                <StyledLink href="#"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Sobre Nós
                </StyledLink>
              </LinkListItem>
              <LinkListItem>
                <StyledLink href="#"
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Serviços
                </StyledLink>
              </LinkListItem>
              <LinkListItem>
                <StyledLink href="#"
                  activeClass="active"
                  to="rooms"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Espaço
                </StyledLink>
              </LinkListItem>
              <LinkListItem>
                <StyledLink href="#"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contato
                </StyledLink>
              </LinkListItem>
            </LinkList>
          </Column>

          <Column>
            <SubscribeNewsletterColumn>
              <SubscribeNewsletterContainer>
                <ColumnHeading>Fale com a gente!</ColumnHeading>
                <SubscribeText>
                  <HighlightedText>Telefone</HighlightedText> {formatPhoneNumber(process.env.REACT_APP_NUMERO_TELEFONE)}
                </SubscribeText>
                <SubscribeText>
                  <HighlightedText>Email</HighlightedText> humanize.eu@gmail.com
                </SubscribeText>
                <SubscribeText>
                  <HighlightedText>Localização</HighlightedText> Avenida Conselheiro Furtado, n.º 2391,
                  Edifício Belém Metropolitan, sala 610, bairro Cremação, 66040-
                  100, Belém, Pará. 
                </SubscribeText>

              </SubscribeNewsletterContainer>
            </SubscribeNewsletterColumn></Column>


        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
          </LogoContainer>
          <CopywrightNotice>Humanize Espaço Terapêutico LTDA - CNPJ: 58.658.132/0001-95 <br />&copy; Todos os direitos reservados</CopywrightNotice>
          <SocialLinksContainer>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
