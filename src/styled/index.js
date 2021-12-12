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
  margin: 0 -15px;
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
  color29: '#E7ECF3',
  color30: '#FFF',
  color31: '#B1B5C4',
  color32: '#FCFCFD',
  color33: '#B1B5C4',
  color34: '#FCFCFD',
  color35: '#FCFCFD',
  color36: '#3B3E44',
  color37: '#F4F5F6',
  color38: '#3B3E44',
  color39: '#F4F5F6',
  color40: '#3B3E44',
  color41: '#F4F5F6',
  color42: '#3B3E44',
  color43: '#F4F5F6',
  color44: '#3B3E44',
  color45: '#F4F5F6',
  color46: '#222529',
  color47: '#84878B',
  color48: '#E7ECF3',
  color49: '#B1B5C4',
  color50: '#3B3E44',
  color51: '#3B3E44',
  color52: '#FCFCFD',
  color53: '#B1B5C4',
  color54: '#F4F5F3',
  color55: '#E7ECF3',
  color56: '#222529',
  color57: '#B1B5C4',
  color58: 'rgba(35, 38, 47, 0.4)',
  color59: '#E7ECF3',
  color60: 'transparent',
  color61: '#222529',
  color62: '#E7ECF3',
  color63: '#F4F5F6',
  color64: '#777E91',
  color65: '#FCFCFD',
  color66: '#42464B',
  color67: '#3B3E44',
  size1: '24px',
  size2: '36px',
  size3: '18px',
  border: 'none',
  border2: '2px solid #878CFF',
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
  color29: '#777E91',
  color30: '#23262F',
  color31: '#84878B',
  color32: '#141416',
  color33: '#353945',
  color34: '#252525',
  color35: '#353945',
  color36: 'rgba(56, 179, 69, 0.1)',
  color37: '#38B345',
  color38: 'rgba(253, 151, 4, 0.1)',
  color39: '#FD9704',
  color40: '#EAEEFA',
  color41: '#0B3BA7',
  color42: '#FCEBF1',
  color43: '#E96594',
  color44: '#FBEEE8',
  color45: '#DC6E3D',
  color46: '#E6E8EC',
  color47: '#777E91',
  color48: '#23262F',
  color49: '#4F4F4F',
  color50: '#EAEAEA',
  color51: '#F4F5F6',
  color52: '#84878B',
  color53: '#777E91',
  color54: '#353945',
  color55: '#141416',
  color56: '#F4F4F6',
  color57: '#141416',
  color58: '#FFF',
  color59: '#353945',
  color60: '#F4F5F6',
  color61: '#EAEAEA',
  color62: '#4F4F4F',
  color63: '#B1B5C4',
  color64: '#84878B',
  color65: '#23262F',
  color66: '#FFF',
  color67: '#E6E8EC',
  size1: '16px',
  size2: '24px',
  size3: '16px',
  border: '0.5px solid #E6E6E6',
  border2: '1px solid #878CFF',
};