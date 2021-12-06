import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row, PageTitle } from '../styled';
import TopTourCard from "./TopTourCard";

const PageContent = styled.section`
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

const TopTourList = () => {

  const { t } = useTranslation();

  return (
    <PageContent>
      <Container>
        <PageTitle> {t('topTourTitle')} </PageTitle>
        <Text> {t('topTourText')} </Text>
        <Row>
          <TopTourCard />
          <TopTourCard />
          <TopTourCard />
        </Row>
      </Container>
    </PageContent>
  );
};

export default TopTourList;