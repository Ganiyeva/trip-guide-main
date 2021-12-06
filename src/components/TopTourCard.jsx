import styled from "styled-components";
import { Box } from '../styled';

const Col = styled.div`
  width: 369px;
  height: 495px;
  padding: 35px 30px;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 61px;
`;

const Country = styled.span`
  padding: 12px 28px;
  background: rgba(20, 20, 22, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #E9EBF3;
`;

const Name = styled.h5`
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: -0.005em;
  color: #FCFCFD;
  text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
  margin: 0;
`;

const Places = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FCFCFD;
  opacity: 0.9;
  margin-top: 8px;
`;

const TopTourCard = () => {

  return (
    <Col className="img7">
      <Country> Japan </Country>
      <Box>
        <div>
          <Name> Japan </Name>
          <Places> 10 Popular Places </Places>
        </div>
      </Box>
    </Col>
  );
};

export default TopTourCard;