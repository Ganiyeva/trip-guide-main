import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import apiCalls from '../config/api';
import { Container, Star } from "../styled";
import Loader from "../components/Loader";

const SuccessContent = styled.div`
  padding: 40px 0 244px;
  margin-top: 79px;
`;

const Congratulation = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 25px;
  line-height: 21px;
  color: ${(props) => props.theme.color14};
`;

const Title = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  color: ${(props) => props.theme.color2};
  margin: 20px 0 0;
  padding-bottom: 24px;
  width: 822px;
  border-bottom: 1px solid ${(props) => props.theme.color5};
`;

const Name = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color10};
  margin: 37px 0 0;
`;

const Rating = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color33};
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 380px;
  padding-top: 25px;
  margin-top: 25px;
  border-top: 1px solid ${(props) => props.theme.color5};
`;

const Box = styled.span`
  min-width: 160px;
  padding: 7px 36px 11px 20px;
  background-color: ${(props) => props.theme.color20};
  border-radius: 12px;
`;

const Text = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
`;

const Card = styled.div`
  padding: 20px 25px 36px;
  background-color: ${(props) => props.theme.color20};
  border-radius: 10px;
  margin-top: 30px;
`;

const Reserve = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  color: ${(props) => props.theme.color65};
`;

const Icon = styled.i`
  font-size: 16px;
  color: #84878B;
  margin-right: 14px;
`;

const Nums = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color33};
`;

const Image = styled.img`
  width: 670px;
  height: 403px;
  border-radius: 20px;
  margin-left: 120px;
`;

const Success = () => {

  const { t } = useTranslation();
  const [success, setSuccess] = useState([]);
  const { id } = useParams();
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSuccess = async () => {
      try {
        const data = await apiCalls.getDetail(id);
        setSuccess(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    getSuccess();
  }, [id]);

  if (isLoading)
    return (<Loader />);
  else return (
    <SuccessContent>
      <Container>
        {error && <div className="content-401"> {error} </div>}
        {!error && <div>
          <Congratulation> {t('congratulations')} </Congratulation>
          <Title> {t('successTitle')} </Title>
          <Name> {success.name} </Name>
          <Rating style={{ marginTop: "27px" }} > <Star className="icon-star" /> {success.rating} ({success.reviews} reviews) </Rating>
          <Rating style={{ marginLeft: "37px", marginTop: "27px" }} > 1 bad room  +  Private room </Rating>
          <Row style={{ alignItems: "start" }} >
            <Col>
              <Row style={{ justifyContent: "space-between" }} >
                <Box>
                  <Rating> Dates </Rating>
                  <Text> May 15 - 22, 2021  </Text>
                </Box>
                <Box>
                  <Rating> Travelers </Rating>
                  <Text> 1 Passenger </Text>
                </Box>
              </Row>
              <Card>
                <Reserve> {t('reservedetail')} </Reserve>
                <Row style={{ justifyContent: "space-between", marginTop: "22px" }}>
                  <Text> <Icon className="icon-Layer" /> Booking code </Text>
                  <Nums> FD_158456 </Nums>
                </Row>
                <Row style={{ justifyContent: "space-between", marginTop: "22px" }}>
                  <Text> <Icon className="icon-kalendar" /> Date </Text>
                  <Nums> 30 Apr, 2021 </Nums>
                </Row>
                <Row style={{ justifyContent: "space-between", marginTop: "22px" }}>
                  <Text> <Icon className="icon-delet" /> Total </Text>
                  <Nums> ${success.price * 5} </Nums>
                </Row>
                <Row style={{ justifyContent: "space-between", marginTop: "22px" }}>
                  <Text> <Icon className="icon-credit-card" /> Payment method </Text>
                  <Nums> Creadit card </Nums>
                </Row>
              </Card>
              <Link to="/" className="go-home" > Go To Your Home </Link>
            </Col>
            <Image src={`/img/${success.photo}`} alt={success.name} />
          </Row>
        </div>}
      </Container>
    </SuccessContent>
  );
};

export default Success;