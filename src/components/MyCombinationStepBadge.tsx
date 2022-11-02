import styled from '@emotion/styled';
import { changeRem } from 'src/styles/mixin';

const MyCombinationStepBadge = styled.span`
  display: inline-block;
  width: ${changeRem(35)};
  height: ${changeRem(35)};
  border-radius: 50%;
  border: 3px solid #fbc200;
  background: #098d42;
  color: #fff;
  font-size: ${changeRem(16)};
  font-weight: bold;
  line-height: 27px;
  text-align: center;
`;

export default MyCombinationStepBadge;
