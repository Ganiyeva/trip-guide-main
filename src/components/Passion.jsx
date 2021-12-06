import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, Row, PageTitle, Star } from '../styled';

const PageContent = styled.section`
  padding: 70px 0 244px 0;
`;

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-size: ${(props) => props.theme.size1};
  line-height: ${(props) => props.theme.size2};
  color: #84878B;
  margin: 12px 0 0;
`;

const Col = styled.div`
  position: relative;
  width: 270px;
  height: 323px;
  margin-top: 42px;
  border-radius: 15px;
  overflow: hidden;
`;

const Card = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 17px 30px;
  display: flex;
  align-items: end;
  background: linear-gradient(6.66deg, rgba(0, 0, 0, 0.22) 15.51%, rgba(133, 118, 173, 0) 42.28%, rgba(20, 21, 31, 0) 42.28%);
`;

const ColTitle = styled.h5`
  max-width: 200px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin: 0;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Rating = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFF;
  margin-top: 6px;
`;

const Passion = () => {
  const { t } = useTranslation();

  return (
    <PageContent>
      <Container>
        <PageTitle> {t('passionTitle')} </PageTitle>
        <Text> {t('passionText')} </Text>
        <Row>
          <Col className="beachImg">
            <Card>
              <span>
                <ColTitle> {t('beach')} </ColTitle>
                <Rating> <Star className="icon-star" style={{fontSize: "18px"}} /> {t('reviews')} </Rating>
              </span>
            </Card>
          </Col>
          <Col className="cityImg">
            <Card>
              <span>
                <ColTitle> {t('city')} </ColTitle>
                <Rating> <Star className="icon-star" style={{fontSize: "18px"}} /> {t('reviews')} </Rating>
              </span>
            </Card>
          </Col>
          <Col className="hikingImg">
            <Card>
              <span>
                <ColTitle> {t('hiking')} </ColTitle>
                <Rating> <Star className="icon-star" style={{fontSize: "18px"}} /> {t('reviews')} </Rating>
              </span>
            </Card>
          </Col>
          <Col className="sportsImg">
            <Card>
              <span>
                <ColTitle> {t('sports')} </ColTitle>
                <Rating> <Star className="icon-star" style={{fontSize: "18px"}} /> {t('reviews')} </Rating>
              </span>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageContent>
  );
}

export default Passion;