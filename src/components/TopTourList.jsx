import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import apiCalls from '../config/api';
import { Container, Row, PageTitle } from '../styled';
import TopTourCard from "./TopTourCard";
import Loader from "./Loader";

const TopContent = styled.section`
  padding: 35px 0;
`;

const Text = styled.p`
  font-family: 'Popp', sans-serifins;
  font-weight: 400;
  font-size: ${(props) => props.theme.size1};
  line-height: ${(props) => props.theme.size2};
  color: ${(props) => props.theme.color15};
  margin: 12px 0 0;
`;

const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ArrowBtn = styled.button`
  width: 36px;
  height: 36px;
  padding: 13px 15px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.color67};
  font-size: 10px;
  color: ${(props) => props.theme.color1};
  margin-top: -72px;
  cursor: pointer;
`;

const TopTourList = () => {

  const { t } = useTranslation();
  const [topTour, setTopTour] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  SwiperCore.use([Navigation]);


  useEffect(() => {
    const TopTour = async () => {
      try {
        const data = await apiCalls.getTopTour();
        setTopTour(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    TopTour();
  }, []);

  if (isLoading)
    return (<Loader />);
  else return (
    <TopContent>
      <Container>
        <PageTitle> {t('topTourTitle')} </PageTitle>
        <Text> {t('topTourText')} </Text>
        {error && <div className="content-401">
          {error ? error : ''}
        </div>}
        {!error && <div>
          <Btns>
            <ArrowBtn className="btn-prev"> <i className="icon-arrowLeft"></i> </ArrowBtn>
            <ArrowBtn className="btn-next"> <i className="icon-arrowLeft"></i> </ArrowBtn>
          </Btns>
          <Row>
            <Swiper modules={[Navigation]} navigation={{ nextEl: '.btn-next', prevEl: '.btn-prev' }} spaceBetween={0} slidesPerView={3}> {topTour.map(el => (<SwiperSlide key={el.id} > <TopTourCard topObj={el} /> </SwiperSlide>))};
            </Swiper>
          </Row>
        </div>}
      </Container>
    </TopContent >
  );
};

export default TopTourList;