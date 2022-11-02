import styled from '@emotion/styled';
import { changeRem } from 'src/styles/mixin';

const MyCombinationStepBadge = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 3px solid #fbc200;
  background: #098d42;
  color: #fff;
  font-size: ${changeRem(16)};
`;

export default MyCombinationStepBadge;
