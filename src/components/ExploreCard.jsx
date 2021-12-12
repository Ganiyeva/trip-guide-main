import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Star } from '../styled';

const Col = styled.div`
  padding: 14px 14px 20px 14px;
  background: ${(props) => props.theme.headerBgColor};
  border: 1px solid ${(props) => props.theme.color5};
  border-radius: 20px;
  margin: 49px 15px 15px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 15px 45px rgba(102, 102, 102, 0.1);
  }
`;

const Img = styled.img`
  wisth: 242px;
  height: 152px;
  border-radius: 16px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const Rating = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color2};
  margin-top: 20px;
`;

const Space = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme.color2};
  display: inline-block;
  margin-top: 12px;
`;

const Price = styled.span`
  padding: 4px 10px;
  background-color: rgba(49, 107, 255, 0.2);
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #316BFF;
  margin-left: 30px;
`;

const Texts = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color2};
`;

const Icon = styled.i`
  font-size: 16px;
  color: ${(props) => props.theme.color16};
  margin-right: 8px;
  vertical-align: middle;
`;

const ExploreCard = ({exploreObj}) => {

  const { t } = useTranslation();

  return (
    <Col>
      <Img src={`/img/${exploreObj.image}`} alt={exploreObj.title} />
      <Rating> <Star className="icon-star" /> {exploreObj.rating} </Rating>
      <Space> {exploreObj.title} </Space>
      <Price> ${exploreObj.price} </Price>
      <Texts style={{ fontWeight: "500", marginTop: "9px" }}> {exploreObj.radius} to Town Center </Texts>
      <Texts style={{ fontWeight: "400", marginTop: "15px" }}> <Icon className="icon-location" /> {exploreObj.location} </Texts>
      <Texts style={{ fontWeight: "500", marginTop: "8px" }}> <Icon className="icon-room" /> {t('rooms')} {exploreObj.rooms} </Texts>
    </Col>
  );

};

export default ExploreCard;