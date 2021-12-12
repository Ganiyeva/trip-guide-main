import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Star } from "../styled";

const Card = styled.div`
  padding: 40px 35px 36px 35px;
  background: ${(props) => props.theme.headerBgColor};
  border: 2px solid ${(props) => props.theme.color5};
  border-radius: 20px;
`;

const Name = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color32};
  margin: 0;
`;

const Rating = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color4};
  margin-top: 14px;
`;

const Image = styled.img`
  width: 326px;
  height: 177px;
  border-radius: 10px;
  margin-top: 26px;
  object-fit: fill;
`;

const RoomInfo = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color52};
`;

const DateBox = styled.span`
  display: inline-block;
  width: 110px;
  margin-top: 25px;
`;

const Chack = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color63};
`;

const Date = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color64};
`;

const Title = styled.h6`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 26px;
  line-height: 27px;
  color: ${(props) => props.theme.color26};
  margin: 40px 0 20px
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px 0 12px;
`;

const Price = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color59};
`;

const Total = styled.div`
  padding: 8.5px 0;
  background-color: ${(props) => props.theme.color51};
  border-radius: 6px;
  margin-top: 13px;
`;

const Report = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #B1B5C4;
  text-align: center;
  margin-top: 30px;
`;

const BookedDetails = ({ paymentObj }) => {

  const { t } = useTranslation();

  return (
    <Card>
      <Name> {paymentObj.name} </Name>
      <Rating> <Star className="icon-star" /> {paymentObj.rating} ({paymentObj.reviews} reviews) </Rating>
      <Image src={`/img/${paymentObj.photo}`} alt={paymentObj.name} />
      <RoomInfo style={{ marginTop: "24px" }} > 1 bedroom  +  1 private room </RoomInfo>
      <DateBox>
        <Chack> Check in </Chack>
        <Date> June 27, 2020  </Date>
      </DateBox>
      <DateBox style={{ marginLeft: "102px" }} >
        <Chack> Check out </Chack>
        <Date> June 30, 2020 </Date>
      </DateBox>
      <DateBox>
        <Chack> Guest </Chack>
        <Date> 2 guests </Date>
      </DateBox>
      <Title> {t('bookeddetail')} </Title>
      <Row style={{ marginTop: "20px" }}>
        <RoomInfo> ${paymentObj.price}  +  5nights </RoomInfo>
        <Price> ${paymentObj.price * 5} </Price>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <RoomInfo> Ocupancy text and fee </RoomInfo>
        <Price> -$125 </Price>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <RoomInfo> Service free </RoomInfo>
        <Price> $103 </Price>
      </Row>
      <Total>
        <Row>
          <Price> Total </Price>
          <Price> ${paymentObj.price * 5} </Price>
        </Row>
      </Total>
      <Report> Report this property </Report>
    </Card>
  );
};

export default BookedDetails;