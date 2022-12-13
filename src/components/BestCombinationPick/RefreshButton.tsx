import { memo } from 'react';
import refreshIcon from '@assets/icons/refresh.svg';
import styled from '@emotion/styled';

type TProps = {
  onClick: () => void;
};

function RefreshButton({ onClick }: TProps) {
  return (
    <Refresh onClick={onClick} aria-label="새로고침 버튼">
      <img src={refreshIcon} alt="새로고침" />
    </Refresh>
  );
}

export default memo(RefreshButton);

const Refresh = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
