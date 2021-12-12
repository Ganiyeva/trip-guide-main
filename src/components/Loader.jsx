import styled from "styled-components";

const LoadContent = styled.div`
  height: 100vh;
  margin-top: 79px;
  padding-top: 80px;
`;

const Loader = () => {
  return (
    <LoadContent>
      <div class="demo-wrapper">
        <div class="globe-loader fas fa-globe-americas">
          <i class="fas fa-plane"></i>
        </div>
      </div>
    </LoadContent>
  );
};

export default Loader;