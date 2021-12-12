import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from '../styled'

const BgImg = styled.div`
  padding: 217px 0;
  margin-top: 79px;
`;

const Title = styled.h1`
  max-width: 620px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  letter-spacing: -0.005em;
  color: #3B3E44;
  text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`;

const Intro = () => {
  const { t } = useTranslation();
  return (
    <BgImg style={{ backgroundImage: "url('/img/background.jpg')", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
      <Container>
        <Title> {t('pageTitle')} </Title>
      </Container>
    </BgImg>
  );
};

export default Intro;