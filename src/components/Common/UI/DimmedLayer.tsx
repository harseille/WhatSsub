import styled from '@emotion/styled';

type TProps = {
  onClick: () => void;
};

function DimmedLayer({ onClick }: TProps) {
  return <BackDrop onClick={onClick} />;
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
