import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row2 } from '../styled'
import PlaceCard from "./PlaceCard";

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

const PlacesList = () => {

  const { t } = useTranslation();

  return (
    <PlacesContent>
      <PageTitle> {t('placeTitle')} </PageTitle>
      <PageText> {t('placeText')} </PageText>
      <Container>
        <Row2>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </Row2>
      </Container>
    </PlacesContent>
  );
};

export default PlacesList;