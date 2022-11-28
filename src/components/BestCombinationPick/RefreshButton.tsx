import React from 'react';
import refreshIcon from '@assets/icons/refresh.svg';
import styled from '@emotion/styled';

function RefreshButton({ onClick }: { onClick: () => void }) {
  return (
    <Refresh onClick={onClick}>
      <img src={refreshIcon} alt="새로고침" />
    </Refresh>
  );
}

export default React.memo(RefreshButton);

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
