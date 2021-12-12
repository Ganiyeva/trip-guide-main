import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ConfirmContent = styled.div`
  max-width: 691px;
  margin-right: 34px;
`;

const ConTitle = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color30};
  margin: 0;
`;

const YourCard = styled.div`
  width: 524px;
  padding: 40px 50px 30px 0;
  border-top: 1px solid ${(props) => props.theme.color20};
  border-bottom: 1px solid ${(props) => props.theme.color20};
  margin-top: 24px;
`;

const Title = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color55};
  margin: 0;
`;

const Box = styled.div`
  width: 470px;
  padding: 7.5px 20px;
  background-color: ${(props) => props.theme.color56};
  border-radius: 15px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxTitle = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color57};
`;

const BoxText = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color12};
`;

const PenIcon = styled.i`
  font-size: 20px;
  color: #84878B;
`;

const MasterCard = styled.span`
  width: 96px;
  height: 47px;
  background-color: ${(props) => props.theme.color58};
  border: ${(props) => props.theme.border};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  width: 335px;
  padding: 27px 27.5px 20px 27.5px;
  border-radius: 20px;
  margin-top: 40px;
`;

const UnionIcon = styled.i`
  font-size: 28px;
  color: #3B3E44;
`;

const Hamburger = styled.i`
  font-size: 21px;
  color: #84878B;
`;

const CardNums = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: #3D4852;
`;

const InputLable = styled.label`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color59};
  margin-top: 20px;
`;

const NumInput = styled.div`
  position: relative;
  width: 471px;
  padding: 13px 20px;
  background-color: ${(props) => props.theme.color60};
  border: ${(props) => props.theme.border2};
  border-radius: 10px;
  margin-top: 12px;
`;

const Vector = styled.img`
  position: absolute;
  top: 17px;
  right: 20px;
`;

const DateInput = styled.div`
  width: 214px;
  padding: 13px 20px;
  background-color: ${(props) => props.theme.color60};
  border: 2px solid ${(props) => props.theme.color61};
  border-radius: 10px;
  margin: 12px 0 10px;
`;

const ChackLable = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  color: ${(props) => props.theme.color62};
`;

const ConfirmBtn = styled.button`
  padding: 11.5px 20px;
  background-color: #3B71FE;
  border: none;
  border-radius: 36px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  margin-top: 34px;
  cursor: pointer;
`;

const Confirm = ({confirmObj}) => {
  
  let navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <ConfirmContent>
      <ConTitle> {t('confirmTitle')} </ConTitle>
      <YourCard>
        <Title style={{ marginBottom: "30px" }}> {t('yourtour')} </Title>
        <Box style={{ marginBottom: "20px" }}>
          <Row>
            <div>
              <BoxTitle> Date </BoxTitle>
              <BoxText> June 27 - 30, 2020 </BoxText>
            </div>
            <PenIcon className="icon-pen" />
          </Row>
        </Box>
        <Box>
          <Row>
            <div>
              <BoxTitle> Traveller </BoxTitle>
              <BoxText> 1 Passenger </BoxText>
            </div>
            <PenIcon className="icon-pen" />
          </Row>
        </Box>
        <Title style={{ marginTop: "40px" }}> {t('creadit')} </Title>
        <Row style={{ width: "417px", marginTop: "22px" }}>
          <MasterCard> <img src="/img/master-card.svg" alt="master card" /> </MasterCard>
          <MasterCard> <img src="/img/paypal.svg" alt="paypal" /> </MasterCard>
          <MasterCard> <img src="/img/visa.svg" alt="visa" /> </MasterCard>
          <MasterCard> <img src="/img/american.png" alt="american" /> </MasterCard>
        </Row>
      </YourCard>
      <Row>
        <Card style={{ backgroundColor: "#CED9FD" }}>
          <Row> <UnionIcon className="icon-Union" /> <Hamburger className="icon-hamburger" /> </Row>
          <CardNums style={{ marginTop: "26px" }}> 8948   xxxx  xxxx  7894 </CardNums>
          <Row> <CardNums> Holder Name </CardNums> <img src="/img/master.svg" alt="" /> </Row>
        </Card>
        <Card style={{ backgroundColor: "#BDDBA6", marginLeft: "20px" }}>
          <Row> <UnionIcon className="icon-Union" /> <Hamburger className="icon-hamburger" /> </Row>
          <CardNums style={{ marginTop: "26px" }}> 8948   xxxx  xxxx  7894 </CardNums>
          <Row> <CardNums> Holder Name </CardNums> <img src="/img/visa.svg" alt="" /> </Row>
        </Card>
      </Row>
      <form action="get" style={{ marginTop: "20px" }}>
        <InputLable for="number"> Card Number </InputLable>
        <NumInput>
          <input type="tel" name="number" className="number" maxlength="16" defaultValue={'5884 6241 4444 3333'} />
          <Vector src="/img/Vector.svg" alt="vector" />
        </NumInput>
        <Row style={{ width: "471px" }}>
          <div>
            <InputLable for="date"> Expiry Date </InputLable>
            <DateInput>
              <input type="tel" name="date" className="number" maxlength="4" defaultValue={'MM / YY'} />
            </DateInput>
          </div>
          <div>
            <InputLable for="cvc">  CVC/CVV </InputLable>
            <DateInput>
              <input type="password" name="cvc" className="number" maxlength="4" defaultValue={'****'} />
            </DateInput>
          </div>
        </Row>
        <FormControlLabel control={<Checkbox defaultChecked />} label={<ChackLable> Save Card </ChackLable>} />
        <ConfirmBtn type="button" onClick={() => { navigate(`/success/${confirmObj.id}`) }} > Confirm and reserve </ConfirmBtn>
      </form>
    </ConfirmContent>
  );
};

export default Confirm;