import styled from "styled-components";
import Filter from "../components/Filter";
import Subscribe from "../components/Subscribe";
import { Row } from "../styled";
export { Row } from '../styled';

const PageContent = styled.div`
  padding: 40px 70px 244px;
  margin-top: 79px;
`;

const HotelList = () => {
  return (
    <div>
      <PageContent>
        <Row>
          <Filter />
        </Row>
      </PageContent>
      <Subscribe />
    </div>
  );
};

export default HotelList;