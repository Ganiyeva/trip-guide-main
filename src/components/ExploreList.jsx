import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row, PageTitle } from '../styled';
import ExploreCard from "./ExploreCard";

const PageContent = styled.section`
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

const ExploreList = () => {

  const { t } = useTranslation();

  return (
    <PageContent>
      <Container>
        <PageTitle> {t('exploreTitle')} </PageTitle>
        <Text> {t('exploreText')} </Text>
        <Row>
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
          <ExploreCard />
        </Row>
      </Container>
    </PageContent>
  );
};

export default ExploreList;