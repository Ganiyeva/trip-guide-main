import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Row2 } from '../styled';
import TrendingCitesCard from "./TrendingCitesCard";

const PageContent = styled.section`
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

  return (
    <PageContent>
      <Title> {t('trendinTitle')} </Title>
      <Text> {t('trendinText')} </Text>
      <Card>
        <Row2>
          <TrendingCitesCard />
          <TrendingCitesCard />
          <TrendingCitesCard />
          <TrendingCitesCard />
          <TrendingCitesCard />
          <TrendingCitesCard />
        </Row2>
      </Card>
    </PageContent>
  );
};

export default TrendingCitesList;