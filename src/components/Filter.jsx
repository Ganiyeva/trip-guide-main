import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import { Row } from "../styled";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

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
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #84878B;
  margin-top: 14px;
`;

const Filter = () => {

  const { t } = useTranslation();

  return (
    <FilterContent>
      <FilterTitle> {t('filterTitle')} </FilterTitle>
      <form action="get">
        <InputBox>
          <Input placeholder="Search location or property" />
          <SearchIcon className="icon-search" />
        </InputBox>
        <Box>
          <Titles> {t('popularFilters')} </Titles>
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkHotels')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkBreakfast')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkCancellation')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkPrepayment')} </Lable>} />
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('priceRange')} </Titles>
          <Row style={{ alignItems: "end" }}>
            <div>
              <Slider valueLabelDisplay="auto" components={{ ValueLabel: ValueLabelComponent, }} aria-label="custom thumb label" defaultValue={68} />
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
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkHotels')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkApertments')} </Lable>} />
            <Nums>141</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkResort')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('yourBudget')} </Titles>
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkLess')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkTo')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkTo2')} </Lable>} />
          <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkTo3')} </Lable>} />
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
        <Box>
          <Titles> {t('facilities')} </Titles>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkOutdoor')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkBerbeque')} </Lable>} />
            <Nums>141</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkLiving')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkService')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkPool')} </Lable>} />
            <Nums>141</Nums>
          </Row>
          <Row>
            <FormControlLabel control={<Checkbox defaultChecked />} label={<Lable> {t('checkSpa')} </Lable>} />
            <Nums>108</Nums>
          </Row>
          <SeeMore href="#"> {t('seeMore')} </SeeMore>
        </Box>
      </form>
    </FilterContent>
  );
};

export default Filter;