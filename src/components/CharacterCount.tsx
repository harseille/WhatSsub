import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import charCountState from '../state/charCountState';

const Div = styled.div`
  color: rebeccapurple;
`;

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);

  return <Div>Character Count: {count}</Div>;
};

export default CharacterCount;
