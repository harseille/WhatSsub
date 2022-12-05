import LoadingSandwich from '@assets/icons/loading_sandwich.svg';
import styled from '@emotion/styled';

function LoadingSpinner() {
  return (
    <LoadingWrapper>
      <Loading data={LoadingSandwich} aria-label="loading" />
    </LoadingWrapper>
  );
}

export default LoadingSpinner;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 141, 67, 0.1);
  text-align: center;
  overflow: hidden;
`;

const Loading = styled.object`
  width: 80%;
`;
