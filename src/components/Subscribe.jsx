import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { Container } from '../styled';
import { useRef } from "react";

const SubscribeContent = styled.div`
  position: relative;
  margin-top: -124px;
  z-index: 1;
`;

const BgImg = styled.div`
  max-height: 248px;
  padding: 62px 90px;
`;

const Title = styled.h4`
  max-width: 370px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.5px;
  color: #FFFFFF;
  margin: 0;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Text = styled.p`
  max-width: 370px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #FFFFFF;
  opacity: 0.88;
  margin: 16px 0 0;
`;

const Row = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 488px;
  height: 71px;
  padding: 8px;
  background: #FCFCFD;
  box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 320px;
  padding: 7px 14px;
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #3B3E44;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #B1B5C4;
  }
`;

const Btn = styled.button`
  padding: 18px 30px;
  background-color: #353945;
  box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

const Subscribe = () => {

  const { t } = useTranslation();

  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    emailRef.current.value = '';
  };

  return (
    <SubscribeContent>
      <Container>
        <BgImg style={{ backgroundImage: "url('/img/subscribe.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
          <Row>
            <div>
              <Title> {t('subTitle')} </Title>
              <Text> {t('subText')} </Text>
            </div>
            <div>
              <form method="get" onSubmit={handleSubmit}>
                <Box>
                  <Input type="email" placeholder={t('subInput')} ref={emailRef} />
                  <Btn type="submit" > Subscribe </Btn>
                </Box>
              </form>
            </div>
          </Row>
        </BgImg>
      </Container>
    </SubscribeContent>
  );
};

export default Subscribe;