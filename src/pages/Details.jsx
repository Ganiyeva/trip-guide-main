import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Container, Star } from "../styled";
import apiCalls from '../config/api';
import Loader from "../components/Loader";

const DetailsContent = styled.div`
  padding: 40px 0 244px;
  margin-top: 79px;
`;

const Title = styled.h4`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  color: ${(props) => props.theme.color34};
  margin: 0;
`;

const Rating = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color35};
  margin-top: 28px;
  vertical-align: middle;
`;

const LocalIcons = styled.i`
  font-size: 16px;
  color: ${(props) => props.theme.color31};
  margin-right: 8px;
`;

const LocalText = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color31};
  margin: 28px 0 0 22px;
  vertical-align: middle;
`;

const Img = styled.img`
  width: 100%;
  height: 600px;
  margin-top: 40px;
  border-radius: 30px;
  object-fit: cover;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const ColLeft = styled.div`
  max-width: 743px;
  margin: 40px 89px 0 0;
`;

const ReviewBox = styled.div`
  display: flex;
  align-items: center;
`;

const Review = styled.span`
  padding: 2.5px 5.5px;
  background-color: ${(props) => props.theme.color36};
  border-radius: 5px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color37};
`;

const Perfect = styled.span`
  padding: 2.5px 8.5px;
  background: ${(props) => props.theme.color38};
  border-radius: 5px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color39};
  margin-left: 17px;
`;

const Hotels = styled.span`
  padding: 2.5px 15.5px;
  background: ${(props) => props.theme.color40};
  border-radius: 5px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color41};
  margin-left: 17px;
`;

const Building = styled.span`
  padding: 2.5px 19.5px;
  background: ${(props) => props.theme.color42};
  border-radius: 5px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color43};
  margin-left: 17px;
`;

const TopValue = styled.span`
  padding: 2.5px 17.5px;
  background: ${(props) => props.theme.color44};
  border-radius: 7px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color45};
  margin-left: 17px;
`;

const StarImg = styled.img`
  margin-left: 17px;
`;

const ExBox = styled.div`
  margin-top: 20px;
  padding-bottom: 22px;
  border-bottom: 1px solid ${(props) => props.theme.color46};
`;

const ExTitle = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color10};
  margin: 0;
`;

const Name = styled.h6`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.color47};
  margin: 10px 0 0;
`;

const Top = styled.div`
  max-width: 100%;
  padding-top: 30px;
  border-bottom: 1px solid ${(props) => props.theme.color46};
  display: flex;
  align-items: center;
`;

const TabText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color48};
  text-transform: capitalize;
`;

const PanelText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color33};
  margin: 20px 0 0;
`;

const FeaturesBox = styled.div`
  margin-top: 40px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${(props) => props.theme.color46};
`;

const FeatTitle = styled.h6`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.color48};
  margin: 0;
`;

const FeatText = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color49};
  margin-top: 24px;
  vertical-align: middle;
  margin-right: 40px;
`;

const FeatIcon = styled.i`
  font-size: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

const AmenitiesBox = styled.div`
  display: flex;
  align-items: center;
`;

const MoreBtn = styled.button`
  border: none;
  padding: 10px 31px;
  background-color: #3B71FE;
  border-radius: 47px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin-top: 60px;
`;

const ColRight = styled.div`
  max-width: 408px;
  background-color: ${(props) => props.theme.headerBgColor};
  border: 1px solid ${(props) => props.theme.color50};
  border-radius: 20px;
  padding: 20px 46px 30px 46px;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 17px;
  border-bottom: 1px solid ${(props) => props.theme.color46};
`;

const Price = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color32};
  display: flex;
  align-items: end;
  margin-right: 10px;
`;

const Night = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.theme.color47};
  margin: 0 0 5px 5px;
`;

const Price2 = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color16};
`;

const Off = styled.span`
  padding: 6px 10px;
  background-color: #145CE6;
  border-radius: 25px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
  margin-left: 56px;
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Lable = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color52};
`;

const Dates = styled.div`
  width: 152px;
  padding: 12px 28px 12px 14px;
  background-color: ${(props) => props.theme.color51};
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const DateIcon = styled.i`
  font-size: 20px;
  color: ${(props) => props.theme.color53};
  margin-right: 10px;
`;

const GuestBox = styled.div`
  margin-top: 20px;
`;

const SelectBox = styled.div`
  position: relative;
  padding: 11.5px 14px;
  background-color: ${(props) => props.theme.color51};
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color54};
  margin-top: 11px;
  &:.css-qc6sy-singleValue{
    
  }
`;

const SelectIcon = styled.i`
  position: absolute;
  top: 19px;
  right: 20px;
  font-size: 10px;
`;

const ExtraText = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color54};
`;

const Nums = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: #B1B5C4;
`;

const PriceCard = styled.div`
  padding: 13px 21px;
  background-color: ${(props) => props.theme.color51};
  border-radius: 10px;
  margin-top: 11px;
`;

const Nums2 = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: ${(props) => props.theme.color54};
`;

const BookNowBtn = styled.button`
  width: 100%;
  padding: 11px 0;
  border: none;
  background-color: #316BFF;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;
  margin-top: 20px;
  cursor: pointer;
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

const options = [
  { value: '2 Adults, 1 Children', label: '2 Adults, 1 Children' },
  { value: '1 Adults, 2 Children', label: '1 Adults, 2 Children' },
  { value: '3 Adults, 1 Children', label: '3 Adults, 1 Children' }
];

const Details = () => {

  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [hotelDetail, setHotelDetail] = useState([]);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const [outDate, setOutDate] = useState(new Date());
  let navigate = useNavigate();
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const details = async () => {
      try {
        const data = await apiCalls.getDetail(id);
        setHotelDetail(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    details();
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (isLoading)
    return (<Loader />);
  else return (
    <DetailsContent>
      <Container>
        {error && <div className="content-401"> {error} </div>}
        {!error && <div>
          <Title> {hotelDetail.name} </Title>
          <Rating> <Star className="icon-star" /> {hotelDetail.rating} ({hotelDetail.reviews} reviews) </Rating>
          <LocalText> <LocalIcons className="icon-location" /> {hotelDetail.location} </LocalText>
          <Img src={`/img/${hotelDetail.photo}`} alt={hotelDetail.name} />
          <Row>
            <ColLeft>
              <ReviewBox>
                <Review> {hotelDetail.reviews} </Review>
                <Perfect> Perfect </Perfect>
                <Hotels> Hotels </Hotels>
                <Building> Building </Building>
                <TopValue> Top value </TopValue>
                <StarImg src="/img/review.svg" alt="review" />
              </ReviewBox>
              <ExBox>
                <ExTitle> {t('detailTitle')} </ExTitle>
                <Name> {hotelDetail.name} </Name>
              </ExBox>
              <Top>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label={<TabText> {t('description')} </TabText>} {...a11yProps(0)} />
                  <Tab label={<TabText> {t('features')} </TabText>} {...a11yProps(1)} />
                  <Tab label={<TabText> {t('roomPrice')} </TabText>} {...a11yProps(2)} />
                  <Tab label={<TabText> {t('detailRev')} </TabText>} {...a11yProps(3)} />
                </Tabs>
              </Top>
              <div>
                <TabPanel value={value} index={0}>
                  <PanelText> {t('descripInfo')} </PanelText>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <PanelText> {t('features')} </PanelText>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <PanelText> {t('roomPrice')} </PanelText>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <PanelText> {t('detailRev')} </PanelText>
                </TabPanel>
              </div>
              <FeaturesBox>
                <FeatTitle> {t('hotelFeat')} </FeatTitle>
                <FeatText> <FeatIcon className="icon-wifi2" /> Wi-fi </FeatText>
                <FeatText> <FeatIcon className="icon-bathup" /> Bathup </FeatText>
                <FeatText> <FeatIcon className="icon-breakfast" /> Breakfast </FeatText>
                <FeatText> <FeatIcon className="icon-bed" /> Kins bed </FeatText>
                <FeatText> <FeatIcon className="icon-mm46" /> 4m x 6m </FeatText>
              </FeaturesBox>
              <div style={{ margin: "60px 0" }}>
                <FeatTitle> {t('amenities')} </FeatTitle>
                <AmenitiesBox>
                  <div>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-wifi2" /> Free wifi 24/7 </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-coputer" /> Free computer </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-free-wifi" /> Free wifi 24/7 </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-free-wifi2" /> Free wifi 24/7 </FeatText>
                  </div>
                  <div style={{ marginLeft: "152px" }}>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-bathup" /> Free clean bathroom </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-breakfast2" /> Breakfast included </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-coputer" /> ATM </FeatText>
                    <FeatText style={{ display: "block" }}> <FeatIcon className="icon-room" /> Nearby city </FeatText>
                  </div>
                </AmenitiesBox>
                <MoreBtn type="button" > More details </MoreBtn>
              </div>
            </ColLeft>
            <ColRight>
              <PriceBox>
                <Price> ${hotelDetail.price} <Night> /night </Night> </Price>
                <Price2> ${hotelDetail.price / 100 * 20 + hotelDetail.price} </Price2>
                <Off> 20%OFF </Off>
              </PriceBox>
              <DateBox>
                <div>
                  <Lable> Check-In </Lable>
                  <Dates>
                    <DateIcon className="icon-data" />
                    <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
                  </Dates>
                </div>
                <div>
                  <Lable> Check-Out </Lable>
                  <Dates>
                    <DateIcon className="icon-data" />
                    <DatePicker className="date-picker" selected={outDate} onChange={(date) => setOutDate(date)} />
                  </Dates>
                </div>
              </DateBox>
              <GuestBox>
                <Lable> Guest </Lable>
                <SelectBox>
                  <Select options={options} defaultValue={options[0]} isSearchable={false} />
                  <SelectIcon className="icon-arrow-bottom" />
                </SelectBox>
              </GuestBox>
              <GuestBox>
                <Lable> Extra Features </Lable>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                  <FormControlLabel control={<Checkbox />} label={<ExtraText> Allow to bring pet </ExtraText>} />
                  <Nums>$13</Nums>
                </Row>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                  <FormControlLabel control={<Checkbox />} label={<ExtraText> Breakfast a day per person </ExtraText>} />
                  <Nums>$10</Nums>
                </Row>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                  <FormControlLabel control={<Checkbox />} label={<ExtraText> Parking a day </ExtraText>} />
                  <Nums>$6</Nums>
                </Row>
                <Row style={{ width: "100%", justifyContent: "space-between" }}>
                  <FormControlLabel control={<Checkbox />} label={<ExtraText> Extra pillow </ExtraText>} />
                  <Nums>Free</Nums>
                </Row>
              </GuestBox>
              <GuestBox>
                <Lable> Price </Lable>
                <PriceCard>
                  <Row style={{ width: "100%", justifyContent: "space-between" }}>
                    <ExtraText> 1 Nights </ExtraText>
                    <Nums2>$500</Nums2>
                  </Row>
                  <Row style={{ width: "100%", justifyContent: "space-between", marginTop: "14px" }}>
                    <ExtraText> Discount 20% </ExtraText>
                    <Nums2>$200</Nums2>
                  </Row>
                  <Row style={{ width: "100%", justifyContent: "space-between", marginTop: "14px" }}>
                    <ExtraText> Breakfast a day per person </ExtraText>
                    <Nums2>$10</Nums2>
                  </Row>
                  <Row style={{ width: "100%", justifyContent: "space-between", marginTop: "14px" }}>
                    <ExtraText> Service fee </ExtraText>
                    <Nums2>$5</Nums2>
                  </Row>
                </PriceCard>
              </GuestBox>
              <DateBox>
                <Lable> Total payment </Lable>
                <Nums2>$300</Nums2>
              </DateBox>
              <BookNowBtn type="button" onClick={() => { navigate(`/payment/${hotelDetail.id}`) }} > Book Now </BookNowBtn>
            </ColRight>
          </Row>
        </div>}
      </Container>
    </DetailsContent>
  );
};

export default Details;