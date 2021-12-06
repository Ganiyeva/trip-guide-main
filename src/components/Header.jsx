import styled from "styled-components";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../styled";

const HeaderPage = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px 40px;
  background-color: ${(props) => props.theme.headerBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const Drops = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 15px;
`;

const CurrencyBtn = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.color1};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  border: none;
  cursor: pointer;
`;

const FlagBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const ProfileBtn = styled.button`
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color2};
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  padding: 15px;
  background-color: ${(props) => props.theme.headerBgColor};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.color3};
  border-radius: 16px;
  z-index: 1;
`;

const BtnCurrency = styled.button`
  display: block;
  padding: 5px 15px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.color1};
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
`;

const BtnFlag = styled.button`
  display: block;
  padding: 5px 15px;
  border: none;
  background-color: transparent;
`;

const FlagImg = styled.img`
  width: 20px;
  height:20px;
`;

const Notification = styled.img`
  margin-left: 17px;
`;

const Avatar = styled.img`
  margin-left: 23px;
  vertical-align: middle;
`;

const Arrow = styled.i`
  font-size: 10px;
  margin-left: 17px;
`;

const MyProfileBtn = styled.button`
  display: block;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.theme.color2};
`;

const Header = () => {

  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('USD');

  const [currencyActive, setCurrencyActive] = useState(false);
  const [flagActive, setFlagActive] = useState(false);
  const [avatarActive, setAvatarActive] = useState(false);

  const handleCurrency = () => {
    setCurrencyActive(!currencyActive);
  };

  const handleFlag = () => {
    setFlagActive(!flagActive);
  };

  const handleAvatar = () => {
    setAvatarActive(!avatarActive);
  };


  return (
    <HeaderPage>
      <Link to='/' style={{textDecoration: 'none'}}> <img style={{verticalAlign: 'middle'}} src="/img/logo.svg" alt="logo" /> <Logo> TripGuide </Logo> </Link>
      <Drops>
        <Dropdown className="dropdown" onClick={handleCurrency}>
          <CurrencyBtn type="button"> {currency} </CurrencyBtn>
          <DropdownContent className={`dropdown-content${currencyActive ? " open" : ""}`}>
            <BtnCurrency onClick={(e) => { setCurrency(e.target.innerText) }}> {t('currencyEn')} </BtnCurrency>
            <BtnCurrency onClick={(e) => { setCurrency(e.target.innerText) }}> {t('currencyRu')} </BtnCurrency>
            <BtnCurrency onClick={(e) => { setCurrency(e.target.innerText) }}> {t('currencyUz')} </BtnCurrency>
          </DropdownContent>
        </Dropdown>
        <Dropdown className="dropdown" onClick={handleFlag}>
          <FlagBtn type="button"> <FlagImg src={`/img/${language}.png`} alt="logo" /> </FlagBtn>
          <DropdownContent className={`dropdown-content${flagActive ? " open" : ""}`}>
            <BtnFlag onClick={() => { i18next.changeLanguage('en') && setLanguage('en') }}> <FlagImg src="/img/en.png" alt="" /> </BtnFlag>
            <BtnFlag onClick={() => { i18next.changeLanguage('ru') && setLanguage('ru') }}> <FlagImg src="/img/ru.png" alt="" /> </BtnFlag>
            <BtnFlag onClick={() => { i18next.changeLanguage('uz') && setLanguage('uz') }}> <FlagImg src="/img/uz.png" alt="" /> </BtnFlag>
          </DropdownContent>
        </Dropdown>
        <Notification src="/img/notification.svg" alt="notification" />
        <Dropdown className="dropdown" onClick={handleAvatar}>
          <Avatar src="/img/profilUser.png" alt="avatar" />
          <ProfileBtn> Delowar <Arrow className="icon-dropdown"></Arrow> </ProfileBtn>
          <DropdownContent className={`dropdown-content${avatarActive ? " open" : ""}`}>
            <MyProfileBtn> {t('myProfile')} </MyProfileBtn>
            <MyProfileBtn> {t('signOut')}  </MyProfileBtn>
          </DropdownContent>
        </Dropdown>
      </Drops>
    </HeaderPage>
  );
}

export default Header;
