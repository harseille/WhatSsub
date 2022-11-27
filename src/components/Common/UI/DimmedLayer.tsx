import styled from '@emotion/styled';

function DimmedLayer() {
  return <BackDrop />;
}

const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  height: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;
export default DimmedLayer;
