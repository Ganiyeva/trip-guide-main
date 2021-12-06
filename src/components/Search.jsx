import styled from "styled-components";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Select from 'react-select'
import { useTranslation } from 'react-i18next';
import { Container } from "../styled";

const Card = styled.div`
  padding: 30px 60px;
  background: ${(props) => props.theme.headerBgColor};
  box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
  border-radius: 20px;
  margin-top: -150px;
`;

const Top = styled.div`
  max-width: 848px;
  border-bottom: 1px solid ${(props) => props.theme.color5};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.i`
  font-size: 20px;
  color: #84878B;
`;

const TopText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  margin-left: 8px;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const BtnPessanger = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.color6};
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  border: none;
  cursor: pointer;
`;

const Arrow = styled.i`
  font-size: 10px;
  margin-left: 10px;
  color: ${(props) => props.theme.color7};
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  padding: 23px 30px;
  background-color: ${(props) => props.theme.headerBgColor};
  box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
  border: 1px solid ${(props) => props.theme.color3};
  border-radius: 16px;
  z-index: 1;
`;

const Box = styled.div`
  display: flex;
`;

const Border = styled.hr`
  height: 1px;
  background-color: ${(props) => props.theme.color9};
`;

const Human = styled.span`
  min-width: 108px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color8};
  margin-right: 90px;
`;

const Ages = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color7};
  margin: 0;
`;

const CountBtns = styled.span`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color7};
  color: ${(props) => props.theme.color7};
  font-size: 12px;
`;

const Count = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #777E91;
  margin: 0 12px;
`;

const Bottom = styled.div``;

const LocationBox = styled.div`
  max-width: 332px;
  max-height: 70px;
  padding: 11px 24px;
  background: ${(props) => props.theme.color23};
  opacity: 0.8;
  border: 1px solid ${(props) => props.theme.color24};
  border-radius: 8px;
  margin: 27px 8px 0 0;
`;

const Lable = styled.label`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color25};
  margin-bottom: 6px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  margin-top: 9px;
`;

const OptionBox = styled.option`
  max-width: 402px;
  position: relatve;
  padding: 20px 50px 20px 20px;
  background-color: ${(props) => props.theme.headerBgColor};
  border: 1px solid ${(props) => props.theme.color18};
  box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
  border-radius: 20px;
`;

const P = styled.p`
  white-space: pre;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Bottom sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Bottom>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};


const Search = () => {

  const [value, setValue] = useState(0);
  const [pessengerActive, setPessengerActive] = useState(false);
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handlePessenger = () => {
    setPessengerActive(!pessengerActive);
  };

  return (
    <Container>
      <Card>
        <Top>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ display: 'inline-block' }}>
            <Tab label={<Icon className="icon-bed"><TopText> {t('searchHotel')} </TopText></Icon>} {...a11yProps(0)} />
            <Tab label={<Icon className="icon-Plane"><TopText> {t('searchFlight')} </TopText></Icon>} {...a11yProps(1)} />
            <Tab label={<Icon className="icon-Texi"><TopText> {t('searchCar')} </TopText></Icon>} {...a11yProps(2)} />
          </Tabs>
          <Dropdown className="dropdown" onClick={handlePessenger}>
            <BtnPessanger type="button"> {t('passenger')} <Arrow className="icon-arrow-bottom"></Arrow> </BtnPessanger>
            <DropdownContent className={`dropdown-content${pessengerActive ? " open" : ""}`}>
              <Box>
                <Human> {t('adults')} <Ages> {t('adultsAge')} </Ages> </Human>
                <CountBtns>
                  <Btn> <i className="icon-minus"></i> </Btn>
                  <Count> {count} </Count>
                  <Btn> <i className="icon-pilus"></i> </Btn>
                </CountBtns>
              </Box>
              <Border />
              <Box>
                <Human> {t('children')} <Ages> {t('childrenAge')}  </Ages> </Human>
                <CountBtns>
                  <Btn> <i className="icon-minus"></i> </Btn>
                  <Count> {count} </Count>
                  <Btn> <i className="icon-pilus"></i> </Btn>
                </CountBtns>
              </Box>
              <Border />
              <Box>
                <Human> {t('infants')} <Ages> {t('infantsAge')} </Ages> </Human>
                <CountBtns>
                  <Btn> <i className="icon-minus"></i> </Btn>
                  <Count> {count} </Count>
                  <Btn> <i className="icon-pilus"></i> </Btn>
                </CountBtns>
              </Box>
            </DropdownContent>
          </Dropdown>
        </Top>
        <Bottom>
          <TabPanel value={value} index={0}>
            <LocationBox>
              <Lable for="location"> Location </Lable>
            </LocationBox>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Flight
          </TabPanel>
          <TabPanel value={value} index={2}>
            Car Rental
          </TabPanel>
        </Bottom>
      </Card>
    </Container>
  );
};

export default Search;