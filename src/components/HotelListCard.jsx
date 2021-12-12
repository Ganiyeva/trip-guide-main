import styled from "styled-components";
import { Star } from '../styled';
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid ${(props) => props.theme.color5};
  border-radius: 20px;
  max-width: 970px;
  overflow: hidden;
  margin-bottom: 50px;
`;

const Img = styled.img`
  width: 420px;
  height: 465px;
  vertical-align: middle;
`;

const Box = styled.span`
  display: inline-block;
  padding: 30px;
  vertical-align: middle;
`;

const Name = styled.h5`
  max-width: 416px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color30};
  margin: 0;
`;

const Rating = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color14};
  margin-top: 20px;
`;

const LocalInfo = styled.div`
  max-width: 416px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const LocalIcons = styled.i`
  font-size: 20px;
  color: ${(props) => props.theme.color31};
  margin-right: 8px;
  &:nth-child(3){
    margin-left: 20px;
  }
  &:nth-child(5){
    margin-top: 15px;
  }
`;

const LocalText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color32};
  max-width: 175px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:nth-child(6){
    margin-top: 15px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 40px;
`;

const Info = styled.div`
  margin-top: 12px;
`;

const Icons = styled.i`
  font-size: 14px;
  color: ${(props) => props.theme.color31};
  margin-right: 15px;
  vertical-align: middle;
`;

const Texts = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color11};
  vertical-align: middle;
`;

const Price = styled.span`
  display: flex;
  align-items: center;
  padding: 4px 19.5px;
  background-color: ${(props) => props.theme.color20};
  border-radius: 37px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  color: ${(props) => props.theme.color30};
`;

const ForTwo = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color31};
  margin-left: 8px;
`;

const HotelListCard = ({ hotelObj }) => {

  let navigate = useNavigate();

  return (
    <Card>
      <Img src={`/img/${hotelObj.photo}`} alt={hotelObj.name} />
      <Box>
        <Name> {hotelObj.name} </Name>
        <Rating> <Star className="icon-star" /> {hotelObj.rating} ({hotelObj.reviews} reviews) </Rating>
        <LocalInfo>
          <LocalIcons className="icon-location" />
          <LocalText> {hotelObj.location} </LocalText>
          <LocalIcons className="icon-data" />
          <LocalText> 15.05.2021-16.05.2021 </LocalText>
          <LocalIcons className="icon-flight" />
          <LocalText> Depature from zuich </LocalText>
        </LocalInfo>
        <Row>
          <div>
            <Info>
              <Icons className="icon-wifi" />
              <Texts> Free Wifi </Texts>
            </Info>
            <Info>
              <Icons className="icon-parking" />
              <Texts> Free parking </Texts>
            </Info>
            <Info>
              <Icons className="icon-offer" />
              <Texts> Special offer </Texts>
            </Info>
            <Info>
              <Icons className="icon-website" />
              <Texts> Visit hotel website  </Texts>
            </Info>
            <Info>
              <Icons className="icon-safety" />
              <Texts> Taking safety measures </Texts>
            </Info>
          </div>
          <div style={{ paddingLeft: "68px" }}>
            <Price> ${hotelObj.price} <ForTwo> For Two </ForTwo> </Price>
            <button type="button" className="book-now" onClick={() => { navigate(`/details/${hotelObj.id}`) }} > Book Now </button>
          </div>
        </Row>
      </Box>
    </Card>
  );
};

export default HotelListCard;