import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../styled";
import apiCalls from '../config/api';
import BookedDetails from "../components/BookedDetails";
import Confirm from "../components/Confirm";
import Loader from "../components/Loader";

const PaymentContent = styled.div`
  padding: 40px 0 244px;
  margin-top: 79px;
`;

const Row = styled.div`
  display: flex;
  align-items: start;
`;

const Payment = () => {

  const [hotelPayment, setHotelPayment] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Payment = async () => {
      try {
        const data = await apiCalls.getDetail(id);
        setHotelPayment(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    Payment();
  }, [id]);

  if (isLoading)
    return (<Loader />);
  else return (
    <PaymentContent>
      <Container>
        {error && <div className="content-401"> {error} </div>}
        {!error && <Row>
          <Confirm confirmObj={hotelPayment} />
          {!error && <BookedDetails key={hotelPayment.id} paymentObj={hotelPayment} />}
        </Row>}
      </Container>
    </PaymentContent>
  );
};

export default Payment;