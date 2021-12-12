import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { useRef } from "react";
import { Row } from "../styled";

const FilterContent = styled.div`
  max-width: 290px;
`;

const FilterTitle = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color26};
  margin: 0;
`;

const InputBox = styled.div`
  width: 290px;
  padding: 14px 20px;
  position: relative;
  background: ${(props) => props.theme.headerBgColor};
  border: 1px solid ${(props) => props.theme.color27};
  border-radius: 10px;
  margin-top: 13px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder{
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.color7};
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 16px;
  color: ${(props) => props.theme.color7};
`;

const Box = styled.div`
  padding: 30px 0 17px;
  &:not(:last-child){
    border-bottom: 1px solid ${(props) => props.theme.color5};
}
`;

const Titles = styled.span`
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${(props) => props.theme.color13};
`;

const Lable = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color11};
`;

const SeeMore = styled.a`
  display: block;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #145CE6;
  margin-top: 15px;
`;

const RangePrice = styled.span`
  display: block;
  family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color18};
  margin-top: 7px;
`;

const RangeInput = styled.input`
  max-width: 60px;
  max-height: 32px;
  outline: none;
  padding: 7px 10px;
  background-color: transparent;
  border: 2px solid #316BFF;
  border-radius: 9px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${(props) => props.theme.color28};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Nums = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
  margin-top: 14px;
`;

const Filter = () => {

  const { t } = useTranslation();
  const inputRef = useRef(null);
  const filterHotelRef = useRef(null);
  const breakfastRef = useRef(null);
  const freeRef = useRef(null);
  const noPaymentRef = useRef(null);
  const rangeRef = useRef(null);
  const typeHotelRef = useRef(null);
  const apertmentsRef = useRef(null);
  const resortRef = useRef(null);
  const lessRef = useRef(null);
  const price1Ref = useRef(null);
  const price2Ref = useRef(null);
  const price3Ref = useRef(null);
  const sportsRef = useRef(null);
  const berbequeRef = useRef(null);
  const livingRef = useRef(null);
  const roomRef = useRef(null);
  const poolRef = useRef(null);
  const spaRef = useRef(null);

  function ValueLabelComponent(props) {
    const { children, value } = props;
    return (
      <Tooltip ref={rangeRef} enterTouchDelay={0} placement="top" title={value}>
        {children}
      </Tooltip>
    );
  }

  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.number.isRequired,
  };

  const handleChange = () => {
    console.log(inputRef.current.value);
  }

  return (
    <FilterContent>
      <FilterTitle> {t('filterTitle')} </FilterTitle>
      <form action="get">
        <InputBox>
          <Input placeholder="Search location or property" ref={inputRef} onChange={handleChange} />
          <SearchIcon className="icon-search" />
        </InputBox>
        <Box>
          <Titles> {t('popularFilters')} </Titles>
          <FormControlLabel control={<Checkbox />} label={<Lable ref={filterHotelRef}> {t('checkHotels')} </Lable>} onClick={() => console.log(filterHotelRef.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={breakfastRef}> {t('checkBreakfast')} </Lable>} onClick={() => console.log(breakfastRef.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={freeRef}> {t('checkCancellation')} </Lable>} onClick={() => console.log(freeRef.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={noPaymentRef}> {t('checkPrepayment')} </Lable>} onClick={() => console.log(noPaymentRef.current.innerText)} />
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('priceRange')} </Titles>
          <Row style={{ margin: "0", justifyContent: "space-between", alignItems: "end" }}>
            <div>
              <Slider valueLabelDisplay="auto" components={{ ValueLabel: ValueLabelComponent, }} aria-label="custom thumb label" defaultValue={68} onClick={() => console.log(rangeRef.current.style.left.slice(0, 2))} />
              <RangePrice> $50 </RangePrice>
            </div>
            <div>
              <RangeInput type="number" />
              <RangePrice> $150 </RangePrice>
            </div>
          </Row>
        </Box>
        <Box>
          <Titles> {t('propertyType')} </Titles>
          <Row ref={typeHotelRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkHotels')} </Lable>} onClick={() => console.log(typeHotelRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <Row ref={apertmentsRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkApertments')} </Lable>} onClick={() => console.log(apertmentsRef.current.innerText)} />
            <Nums>141</Nums>
          </Row>
          <Row ref={resortRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkResort')} </Lable>} onClick={() => console.log(resortRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('yourBudget')} </Titles>
          <FormControlLabel control={<Checkbox />} label={<Lable ref={lessRef}> {t('checkLess')} </Lable>} onClick={() => console.log(lessRef.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={price1Ref}> {t('checkTo')} </Lable>} onClick={() => console.log(price1Ref.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={price2Ref}> {t('checkTo2')} </Lable>} onClick={() => console.log(price2Ref.current.innerText)} />
          <FormControlLabel control={<Checkbox />} label={<Lable ref={price3Ref}> {t('checkTo3')} </Lable>} onClick={() => console.log(price3Ref.current.innerText)} />
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('facilities')} </Titles>
          <Row ref={sportsRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkOutdoor')} </Lable>} onClick={() => console.log(sportsRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <Row ref={berbequeRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkBerbeque')} </Lable>} onClick={() => console.log(berbequeRef.current.innerText)} />
            <Nums>141</Nums>
          </Row>
          <Row ref={livingRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkLiving')} </Lable>} onClick={() => console.log(livingRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <Row ref={roomRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkService')} </Lable>} onClick={() => console.log(roomRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <Row ref={poolRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkPool')} </Lable>} onClick={() => console.log(poolRef.current.innerText)} />
            <Nums>141</Nums>
          </Row>
          <Row ref={spaRef} style={{ justifyContent: "space-between", margin: "0", alignItems: "baseline" }}>
            <FormControlLabel control={<Checkbox />} label={<Lable> {t('checkSpa')} </Lable>} onClick={() => console.log(spaRef.current.innerText)} />
            <Nums>108</Nums>
          </Row>
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
      </form>
    </FilterContent>
  );
};

export default Filter;