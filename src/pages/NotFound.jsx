import styled from 'styled-components';

const Content = styled.div `
  height: 100vh;
  margin-top: 79px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img `
  height: 100%;
`;

const NotFound = () => {
  return (
    <Content>
      <Img src="img/error404.png" alt="404 error" />
    </Content>
  )
};

export default NotFound;