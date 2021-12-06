// import styled from "styled-components";
// import { useTranslation } from 'react-i18next';
// import { useState } from "react";

// const Content = styled.section`
//   padding: 90px 0 70px;
//   text-align: center;
// `;

// const Row = styled.div`
//   max-width: 970px;
//   margin: 60px auto 0;
//   display: flex;
//   justify-content: space-between;
// `;

// const Title = styled.h3`
//   font-family: 'DM Sans', sans-serif;
//   font-weight: 700;
//   font-size: 40px;
//   line-height: 60px;
//   letter-spacing: -0.005em;
//   color: #141416;
//   margin: 0;
// `;

// const Text = styled.p`
//   max-width: 632px;
//   font-family: 'Poppins', sans-serif;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   color: #777E91;
//   margin: 17px auto 0;
// `;

// const Card = styled.div`
//   padding: 0 26px;
//   text-align: center;
// `;

// const ImgBox = styled.div`
//   height: 211px;
// `;

// const CardTitle = styled.h4`
//   font-family: 'DM Sans', sans-serif;
//   font-weight: 500;
//   font-size: 24px;
//   line-height: 36px;
//   color: #3B3E44;
//   margin: 17px 0 0;
// `;

// const CardText = styled.p`
//   max-width: 200px;
//   font-family: 'DM Sans', sans-serif;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 18px;
//   color: #84878B;
//   margin: 5px auto 0;
// `;

// const Advertising = () => {

//   const [theme, setTheme] = useState(false);
//   const { t } = useTranslation();

//   return (
//     <Content>
//       <Title> {t('adverTitle')} </Title>
//       <Text> {t('adverText')} </Text>
//           <Row>
//             <Card>
//               <ImgBox>
//                 <img src={theme ? '/img/Group1.svg' : '/img/illustration1.svg'} alt="" />
//               </ImgBox>
//               <CardTitle> {t('choose')} </CardTitle>
//               <CardText> {t('chooseText')} </CardText>
//             </Card>
//             <Card>
//               <ImgBox>
//                 <img src={theme ? '/img/Group2.svg' : '/img/illustration2.svg'} alt="" />
//               </ImgBox>
//               <CardTitle> {t('contact')} </CardTitle>
//               <CardText> {t('contactText')} </CardText>
//             </Card>
//             <Card>
//               <ImgBox>
//                 <img src={theme ? '/img/Group3.svg' : '/img/illustration3.svg'} alt="" />
//               </ImgBox>
//               <CardTitle> {t('get')} </CardTitle>
//               <CardText> {t('getText')} </CardText>
//             </Card>
//           </Row>
//     </Content>
//   );
// };

// export default Advertising;