import styled from "styled-components";

export const Container = styled.div `
  max-width: 1170px;
  margin: 0 auto;
`;

export const Logo = styled.span `
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: ${(props) => props.theme.color4};
  vertical-align: middle;
  margin-left: 10px;
`;

export const Row = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const Row2 = styled.div `
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const PageTitle = styled.h3 `
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 70px;
  letter-spacing: -0.005em;
  color: ${(props) => props.theme.color13};
  margin: 0;
`;

export const Box = styled.div `
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const Star = styled.i `
  color: #FFD166;
  margin-right: 7px;
`;

export const DarkTheme = {
  bodyBg: '#141416',
  headerBgColor: '#222529',
  color1: '#E7ECF3',
  color2: '#FCFCFD',
  color3: '#3B3E44',
  color4: '#FFF',
  color5: '#3B3E44',
  color6: '#FFF',
  color7: '#84878B',
  color8: '#FCFCFD',
  color9: '#3B3E44',
  color10: '#F4F5F6',
  color11: '#E7ECF3',
  color12: '#777E90',
  color13: '#FFF',
  color14: '#B1B5C4',
  color15: '#B1B5C4',
  color16: '#E7ECF3',
  color17: '#18191B',
  color18: '#F4F5F6',
  color19: '#FCFCFD',
  color20: '#222529',
  color21: '#464950',
  color22: '#84878B',
  color23: '#3B3E44',
  color24: '#4A4E54',
  color25: '#FCFCFD',
  color26: '#FFF',
  color27: '#222529',
  color28: '#316BFF',
  size1: '24px',
  size2: '36px',
  size3: '18px',
};

export const LightTheme = {
  bodyBg: '#FBFBFB',
  headerBgColor: '#FFF',
  color1: '#84878B',
  color2: '#3B3E44',
  color3: '#FFF',
  color4: '#222529',
  color5: '#E7ECF3',
  color6: '#3B3E44',
  color7: '#B1B5C4',
  color8: '#777E91',
  color9: '#E6E8EC',
  color10: '#23262F',
  color11: '#3B3E44',
  color12: '#84878B',
  color13: '#141416',
  color14: '#3B3E44',
  color15: '#777E90',
  color16: '#B1B5C4',
  color17: '#F5F5F5',
  color18: '#3B3E44',
  color19: '#282832',
  color20: '#F4F5F6',
  color21: '#EFEFEF',
  color22: '#868B90',
  color23: '#F4F5F7',
  color24: '#E7E8EA',
  color25: '#222529',
  color26: '#333',
  color27: '#E7ECF3',
  color28: '#0A2541',
  size1: '16px',
  size2: '24px',
  size3: '16px',
};