import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container, PageTitle, Box } from '../styled';

const PageContent = styled.section`
  padding: 40px 0 35px;
`;

const PageText = styled.p`
  font-family: 'Poppins', sans-serife;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color14};
  margin: 12px 0 0;
`;

const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 870px 270px;
  grid-template-rows: 718px;
  column-gap: 30px;
  margin-top: 37px;
`;

const Grid2 = styled.div`
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 435px 435px;
  grid-template-rows: 280px 408px;
  gap: 30px;
`;

const Grid3 = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 270px;
  grid-template-rows: 220px 220px 220px;
  row-gap: 29px;
`;

const Img1 = styled.div`
  grid-area: 1/1/2/3;
  padding: 20px;
`;

const Img2 = styled.div`
  grid-area: 2/1/3/2;
  padding: 20px;
`;

const Img3 = styled.div`
  grid-area: 2/2/3/3;
  padding: 20px;
`;

const Img4 = styled.div`
  grid-area: 1/1/2/2;
  padding: 20px;
`;

const Img5 = styled.div`
  grid-area: 2/1/3/2;
  padding: 20px;
`;

const Img6 = styled.div`
  grid-area: 3/1/4/2;
  padding: 20px;
`;

const Rating = styled.span`
  padding: 2px 20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #FF543D;
`;

const Name = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  color: #FFFFFF;
`;

const Avatar = styled.img`
  margin-right: 12px;
  border-radius: 50%;
  vertical-align: middle;
`;

const Activities = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  color: #FFFFFF;
  vertical-align: middle;
`;

const Destinations = () => {

  const { t } = useTranslation();

  return (
    <PageContent>
      <Container>
        <PageTitle> {t('destinationsTitle')} </PageTitle>
        <PageText> {t('destinationsText')} </PageText>
        <Grid1>
          <Grid2>
            <Img1 className="img1">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '40px', lineHeight: '24px', margin: '0 0 20px 0' }}> {t('barcelona')} </Name>
                  <Avatar src="/img/avator1.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '20px', lineHeight: '30px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img1>
            <Img2 className="img2">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '24px', lineHeight: '24px', margin: '0 0 12px 0' }}> {t('london')} </Name>
                  <Avatar src="/img/avator2.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '14px', lineHeight: '21px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img2>
            <Img3 className="img3">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '24px', lineHeight: '24px', margin: '0 0 12px 0' }}> {t('australia')} </Name>
                  <Avatar src="/img/avator2.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '14px', lineHeight: '21px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img3>
          </Grid2>
          <Grid3>
            <Img4 className="img4">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '18px', lineHeight: '20px', margin: '0 0 6px 0' }}> {t('australia')} </Name>
                  <Avatar src="/img/avator2.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '10px', lineHeight: '15px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img4>
            <Img5 className="img5">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '18px', lineHeight: '20px', margin: '0 0 6px 0' }}> {t('japan')} </Name>
                  <Avatar src="/img/avator2.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '10px', lineHeight: '15px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img5>
            <Img6 className="img6">
              <Rating> 3.5 </Rating>
              <Box>
                <div>
                  <Name style={{ fontSize: '18px', lineHeight: '20px', margin: '0 0 6px 0' }}> {t('japan')} </Name>
                  <Avatar src="/img/avator2.jpg" alt="avatar" />
                  <Activities style={{ fontSize: '10px', lineHeight: '15px' }}> 196 {t('activities')} </Activities>
                </div>
              </Box>
            </Img6>
          </Grid3>
        </Grid1>
      </Container>
    </PageContent>
  );
};

export default Destinations;