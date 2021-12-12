import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row2 } from '../styled'

const PlacesContent = styled.section`
  padding: 70px 0 40px 0;
`;

const PageTitle = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color10};
  text-align: center;
  margin: 0;
`;

const PageText = styled.p`
  max-width: 700px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
  text-align: center;
  margin: 12px auto 50px; 
`;

const Col = styled.div`
  min-width: 270px;
  padding: 26px 30px;
  border: 1px solid ${(props) => props.theme.color5};
  border-radius: 10px;
  margin: 15px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.headerBgColor};
  }
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

const PlaceName = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme.color11};
  margin: 18px 0 0;
`;

const Destinations = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color12};
  margin-top: 12px;
`;

const PlacesList = () => {

  const { t } = useTranslation();

  return (
    <PlacesContent>
      <PageTitle> {t('placeTitle')} </PageTitle>
      <PageText> {t('placeText')} </PageText>
      <Container>
        <Row2>
          <Col>
            <Img src="/img/batu.jpg" alt="" />
            <PlaceName> Batu, East Java </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/kuta.jpg" alt="" />
            <PlaceName> Kuta </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/surabaya.jpg" alt="" />
            <PlaceName> Surabaya, East Java </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/malang.jpg" alt="" />
            <PlaceName> Malang, East Java </PlaceName>
            <Destinations> 186 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/deing.jpg" alt="" />
            <PlaceName> Dieng, Central Java </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/nusa.jpg" alt="" />
            <PlaceName> Nusa Dua, Lombok </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/bandung.jpg" alt="" />
            <PlaceName> Bandung, West Java </PlaceName>
            <Destinations> 86 {t('placeDestin')} </Destinations>
          </Col>
          <Col>
            <Img src="/img/batu.jpg" alt="" />
            <PlaceName> Wakatobi, Sumatera </PlaceName>
            <Destinations> 186 {t('placeDestin')} </Destinations>
          </Col>
        </Row2>
      </Container>
    </PlacesContent>
  );
};

export default PlacesList;