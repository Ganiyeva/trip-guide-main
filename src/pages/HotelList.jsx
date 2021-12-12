import { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "../components/Filter";
import HotelListCard from "../components/HotelListCard";
import { Row } from "../styled";
import apiCalls from '../config/api';
import Loader from "../components/Loader";

const HotelContent = styled.div`
  padding: 40px 70px 244px;
  margin-top: 79px;
`;

const Col = styled.div`
  margin-left: 40px;
`;

const ViewBtn = styled.button`
  display: block;
  padding: 11px 40px;
  background-color: transparent;
  border: 1px solid #B1B5C4;
  border-radius: 47px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color13};
  margin: 0 auto;
`;

const Icon = styled.i`
  font-size: 18px;
  color: ${(props) => props.theme.color33};
  margin-right: 15px;
  vertical-align: middle;
`;

const HotelList = () => {

  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Hotels = async () => {
      try {
        const data = await apiCalls.getHotels();
        setHotel(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error)
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    Hotels();
  }, []);

  if (isLoading)
    return (<Loader />);
  else return (
    <HotelContent>
      <Row>
        <Filter />
        <Col>
          {error && <div className="content-401"> {error} </div>}
          {!error && hotel.map(el => (<HotelListCard key={el.id} hotelObj={el} />)).splice(0, 3)}
          <ViewBtn type="button"> <Icon className="icon-viewall" /> View All </ViewBtn>
        </Col>
      </Row>
    </HotelContent>
  );
};

export default HotelList;