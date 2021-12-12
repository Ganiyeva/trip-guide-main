import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import apiCalls from '../config/api';
import { Container, Row, PageTitle } from '../styled';
import ExploreCard from "./ExploreCard";
import Loader from "./Loader";

const ExploreContent = styled.section`
  padding: 35px 0 70px;
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: ${(props) => props.theme.size3};
  line-height: 24px;
  color: ${(props) => props.theme.color2};
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

const ExploreList = () => {

  const { t } = useTranslation();
  const [explore, setExplore] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const Explore = async () => {
      try {
        const data = await apiCalls.getExplore();
        setExplore(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    Explore();
  }, []);

  if (isLoading)
    return (<Loader />);
  else return (
    <ExploreContent>
      <Container>
        <PageTitle> {t('exploreTitle')} </PageTitle>
        <Text> {t('exploreText')} </Text>
        {error && <div className="content-401">
          {error ? error : ''}
        </div>}
        {!error && <div>
          <Btns>
            <ArrowBtn className="prev-btn"> <i className="icon-arrowLeft"></i> </ArrowBtn>
            <ArrowBtn className="next-btn"> <i className="icon-arrowLeft"></i> </ArrowBtn>
          </Btns>
          <Row>
            <Swiper modules={[Navigation]} navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }} spaceBetween={0} slidesPerView={4}> {explore.map(el => (<SwiperSlide key={el.id} > <ExploreCard exploreObj={el} /> </SwiperSlide>))};
            </Swiper>
          </Row>
        </div>}
      </Container>
    </ExploreContent>
  );
};

export default ExploreList;