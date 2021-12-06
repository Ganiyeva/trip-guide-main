import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Row, Logo } from '../styled';

const FooterContent = styled.footer`
  padding: 223px 0 151px;
  background-color: ${(props) => props.theme.color20};
  margin-top: -124px;
`;

const Container = styled.div`
  max-width: 1055px;
  margin: 0 auto;
`;

const Col = styled.div`
  width: 25%;
`;

const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color1};
  margin: 20px 0 0;
`;

const Switch = styled.div`
  width: 128px;
  height: 38px;
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.color3};
  border-radius: 10px;
  border: 0.5px solid ${(props) => props.theme.color21};
  cursor: pointer;
  margin-top: 24px;
`;

const Icon = styled.i`
  color: ${(props) => props.theme.color22};
  padding: 5px 21px;
`;

const Box = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const UlText = styled.ul`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.color4};
  list-style-type: none;
  margin: 0;
`;

const LiText = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color1};
  margin-top: 12px;
`;

const Footer = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <FooterContent>
      <Container>
        <Row>
          <Col>
            <Link to='/' style={{ textDecoration: 'none' }}> <img style={{ verticalAlign: 'middle' }} src="/img/logo.svg" alt="logo" /> <Logo> TripGuide </Logo> </Link>
            <Text> {t('footerText')} </Text>
            <Switch onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
              <Icon className="icon-sun" style={{ fontSize: "18px" }} />
              <Icon className="icon-moon" style={{ fontSize: "16px" }} />
            </Switch>
          </Col>
          <Col>
            <Box>
              <UlText>
                {t('services')}
                <LiText> {t('bookTrevl')} </LiText>
                <LiText> {t('bookFlight')} </LiText>
                <LiText> {t('bookCar')} </LiText>
                <LiText> {t('HotelFiv')} </LiText>
                <LiText> {t('traveling')} </LiText>
              </UlText>
            </Box>
          </Col>
          <Col>
            <Box>
              <UlText>
                {t('support')}
                <LiText> {t('account')} </LiText>
                <LiText> {t('legal')} </LiText>
                <LiText> {t('contact')} </LiText>
                <LiText> {t('trems')} </LiText>
                <LiText> {t('policy')} </LiText>
              </UlText>
            </Box>
          </Col>
          <Col>
            <Box>
              <UlText>
                {t('business')}
                <LiText> {t('success')} </LiText>
                <LiText> {t('about')} </LiText>
                <LiText> {t('blog')} </LiText>
                <LiText> {t('info')} </LiText>
                <LiText> {t('guide')} </LiText>
              </UlText>
            </Box>
          </Col>
        </Row>
      </Container>
    </FooterContent>
  );
};

export default Footer;