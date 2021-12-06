import styled from "styled-components";
import { Star } from '../styled';

const Col = styled.div`
  width: 534px;
  padding: 24px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.headerBgColor};
  margin: 15px;
`;

const Img = styled.img`
  width: 160px;
  height: 168px;
  border-radius: 15px;
  margin-right: 30px;
  vertical-align: middle;
`;

const Name = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.color19};
  margin: 0;
`;

const Rating = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color14};
  margin-top: 12px;
`;

const Price = styled.span`
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 18px;
  color: ${(props) => props.theme.color18};
  margin-top: 22px;
`;

const Btn = styled.button`
  display: block;
  padding: 7px 16px;
  background: #316BFF;
  border-radius: 6px;
  border: none;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  margin-top: 24px;
`;

const TrendingCitesCard = () => {
  return (
    <Col>
      <Img src="/img/trending-cites.jpg" alt="" />
      <span style={{ display: "inline-block", verticalAlign: "middle" }}>
        <Name> Manila </Name>
        <Rating> <Star className="icon-star" style={{ fontSize: "14px" }} /> 4.91 (147)</Rating>
        <Price> $250.00 <Rating style={{ display: "inline-block", marginTop: "0", verticalAlign: "middle" }}>/night</Rating> </Price>
        <Btn type="button"> Book Now </Btn>
      </span>
    </Col>
  );
};

export default TrendingCitesCard;