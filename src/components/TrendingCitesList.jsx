import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import apiCalls from '../config/api';
import { Row2 } from '../styled';
import TrendingCitesCard from "./TrendingCitesCard";
import Loader from "./Loader";

const TrendingContent = styled.section`
  padding: 69px 0;
  background-color: ${(props) => props.theme.color17};
`;

const Title = styled.h3`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  text-align: center;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color4};
  margin: 0;
`;

const Text = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => props.theme.color14};
  margin: 16px 0 0;
`;

const Card = styled.div`
  max-width: 1098px;
  margin: 35px auto 0;
`;

const TrendingCitesList = () => {

  const { t } = useTranslation();
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Trending = async () => {
      try {
        const data = await apiCalls.getCities();
        setTrending(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    Trending();
  }, []);

  if (isLoading)
    return (<Loader />);
  else return (
    <TrendingContent>
      <Title> {t('trendinTitle')} </Title>
      <Text> {t('trendinText')} </Text>
      {error && <div className="content-401"> {error} </div>}
      {!error && <Card>
        <Row2>
          {trending.map(el => (<TrendingCitesCard key={el.id} trendObj={el} />))}
        </Row2>
      </Card>}
    </TrendingContent>
  );
};

export default TrendingCitesList;