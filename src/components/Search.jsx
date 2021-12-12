import styled from "styled-components";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import DatePicker from "react-datepicker";
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
  margin-right: 8px;
  vertical-align: middle;
`;

const TopText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-transform: capitalize;
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

const LocationBox = styled.div`
  display: inline-block;
  width: 332px;
  height: 70px;
  padding: 10px 24px;
  background: ${(props) => props.theme.color23};
  opacity: 0.8;
  border: 1px solid ${(props) => props.theme.color24};
  border-radius: 8px;
  margin-top: 27px;
  vertical-align: middle;
`;

const Lable = styled.label`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color25};
  margin-bottom: 6px;
`;

const LocIcon = styled.i`
  font-size: 21px;
  color: #B1B5C4;
  vertical-align: middle;
  margin-right: 10px;
`;

const Name = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color29};
`;

const OpText = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #B1B5C4;
  margin-left: 27px;
`;

const DateBox = styled.div`
  display: inline-block;
  width: 250px;
  height: 70px;
  padding: 10px 24px;
  background: ${(props) => props.theme.color23};
  opacity: 0.8;
  border: 1px solid ${(props) => props.theme.color24};
  border-radius: 8px;
  margin-top: 27px;
  margin-left: -20px;
  vertical-align: middle;
`;

const SearchBtn = styled.button`
  background-color: #3B71FE;
  border-radius: 10px;
  border: none;
  padding: 22px 42px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
  margin: 27px 0 0 42px;
  vertical-align: middle;
  cursor: pointer;
`;

const Vector = styled.span`
  width: 30px;
  height: 30px;
  padding: 5px 8px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color66};
  font-size: 14px;
  color: ${(props) => props.theme.color63};
  display: inline-block;
  position: relative;
  z-index: 3;
  top: 13px;
  left: -10px;
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
        <div sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </div>
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
  const [countAdult, setCountAdult] = useState(0);
  const [countInfant, setCountInfant] = useState(0);
  const [countChild, setCountChild] = useState(0);
  const [startDate, setStartDate] = useState();
  const [outDate, setOutDate] = useState();
  const locationRef = useRef(null);
  const inRef = useRef(null);
  const outRef = useRef(null);
  let navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handlePessenger = () => {
    setPessengerActive(!pessengerActive);
  };

  const handleBtns = (e) => {
    setPessengerActive(false)
    if (e.target.className.includes('adults1')) {
      setCountAdult(countAdult - 1)
    } else if (e.target.className.includes('adults2')) {
      setCountAdult(countAdult + 1)
    } else if (e.target.className.includes('child1')) {
      setCountChild(countChild - 1)
    } else if (e.target.className.includes('child2')) {
      setCountChild(countChild + 1)
    } else if (e.target.className.includes('infant1')) {
      setCountInfant(countInfant - 1)
    } else if (e.target.className.includes('infant2')) {
      setCountInfant(countInfant + 1)
    }
  };

  const locationOption = [
    { value: "Dubai", label: <Name> Dubai </Name>, text: <OpText> Dubai Emirate, United Arab Emirates </OpText> },
    { value: "Doha", label: <Name> Doha </Name>, text: <OpText> Qatar </OpText> },
    { value: "Darling Harbour", label: <Name>Darling Harbour</Name>, text: <OpText> Sydney, New South Wales, Australia </OpText> },
    { value: "Dhaka", label: <Name>Dhaka</Name>, text: <OpText> Bangladesh </OpText> },
    { value: "Dubai International Airport", label: <Name>Dubai International Airport</Name>, text: <OpText> Dubai, Dubai Emirate, United Arab Emirates </OpText> },
  ];

  const { Option } = components;
  const IconOption = props => (
    <Option {...props}>
      <LocIcon className="icon-location" />
      {props.data.label}
      {props.data.text}
    </Option>
  );

  const handleBtn = () => {
    console.log(locationRef.current.state.selectValue[0].value);
    console.log(inRef.current.state.preSelection);
    console.log(outRef.current.state.preSelection);
    navigate("/hotellist")
  };

  return (
    <Container>
      <Card>
        <Top>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={<TopText> <Icon className="icon-bed" /> {t('searchHotel')} </TopText>} {...a11yProps(0)} />
            <Tab label={<TopText> <Icon className="icon-Plane" /> {t('searchFlight')} </TopText>} {...a11yProps(1)} />
            <Tab label={<TopText> <Icon className="icon-Texi" /> {t('searchCar')} </TopText>} {...a11yProps(2)} />
          </Tabs>
          <Dropdown className="dropdown" onClick={handlePessenger}>
            <BtnPessanger type="button"> {t('passenger')} <Arrow className="icon-arrow-bottom"></Arrow> </BtnPessanger>
            <DropdownContent className={`dropdown-content${pessengerActive ? " open" : ""}`}>
              <Box>
                <Human> {t('adults')} <Ages> {t('adultsAge')} </Ages> </Human>
                <CountBtns>
                  <Btn className="adults1" onClick={handleBtns}> <i className="icon-minus adults1"></i> </Btn>
                  <Count> {countAdult} </Count>
                  <Btn className="adults2" onClick={handleBtns}> <i className="icon-pilus adults2"></i> </Btn>
                </CountBtns>
              </Box>
              <Border />
              <Box>
                <Human> {t('children')} <Ages> {t('childrenAge')}  </Ages> </Human>
                <CountBtns>
                  <Btn className="child1" onClick={handleBtns}> <i className="icon-minus child1"></i> </Btn>
                  <Count> {countChild} </Count>
                  <Btn className="child2" onClick={handleBtns}> <i className="icon-pilus child2"></i> </Btn>
                </CountBtns>
              </Box>
              <Border />
              <Box>
                <Human> {t('infants')} <Ages> {t('infantsAge')} </Ages> </Human>
                <CountBtns>
                  <Btn className="infant1" onClick={handleBtns}> <i className="icon-minus infant1"></i> </Btn>
                  <Count> {countInfant} </Count>
                  <Btn className="infant2" onClick={handleBtns}> <i className="icon-pilus infant2"></i> </Btn>
                </CountBtns>
              </Box>
            </DropdownContent>
          </Dropdown>
        </Top>
        <div>
          <TabPanel value={value} index={0}>
            <LocationBox>
              <Lable for="location"> Location </Lable>
              <Select ref={locationRef} placeholder="Where are you from?"
                options={locationOption}
                components={{ Option: IconOption }} />
            </LocationBox>
            <Vector> <i className="icon-arrow"></i> </Vector>
            <DateBox>
              <Lable for="location"> Check in </Lable>
              <DatePicker ref={inRef} className="date-picker" placeholderText="Add Date" selected={startDate} onChange={(date) => setStartDate(date)} />
            </DateBox>
            <Vector> <i className="icon-arrow"></i> </Vector>
            <DateBox>
              <Lable for="location"> Check out </Lable>
              <DatePicker ref={outRef} className="date-picker" placeholderText="Add Date" selected={outDate} onChange={(date) => setOutDate(date)} />
            </DateBox>
            <SearchBtn type="button" onClick={handleBtn} > Search </SearchBtn>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Flight
          </TabPanel>
          <TabPanel value={value} index={2}>
            Car Rental
          </TabPanel>
        </div>
      </Card>
    </Container>
  );
};

export default Search;