import styled from "styled-components";
import { useTranslation } from 'react-i18next';

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

const PlaceCard = () => {

  const { t } = useTranslation();

  return (
    <Col>
      <Img src="/img/search-world.jpg" alt="" />
      <PlaceName> Batu, East Java </PlaceName>
      <Destinations> 86 {t('placeDestin')} </Destinations>
    </Col>
  );
};

export default PlaceCard;