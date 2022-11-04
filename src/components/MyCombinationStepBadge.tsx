import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';
import mediaQuery from '../styles/media-queries';

const MobileSize: number = 26;
const DesktopSize: number = 32;

type 타입_속성 = {
  currentStep: number;
  children: number;
};

const MyCombinationStepBadge = styled.span<타입_속성>`
  display: inline-block;
  width: ${changeRem(MobileSize)};
  height: ${changeRem(MobileSize)};
  border-radius: 50%;
  border: 3px solid;
  border-color: ${props => (props.currentStep >= props.children ? '#fbc200' : '#EEEEEE')};
  background: ${props => (props.currentStep >= props.children ? '#098d42' : '#EEEEEE')};
  color: ${props => (props.currentStep >= props.children ? '#fff' : '#B1B1B1')};
  font-size: ${changeRem(10)};
  font-weight: bold;
  line-height: ${MobileSize}px;
  text-align: center;
  cursor: pointer;
  transition: all 0.6s;

  ${mediaQuery} {
    width: ${changeRem(DesktopSize)};
    height: ${changeRem(DesktopSize)};
    line-height: ${DesktopSize}px;
  }
`;

export default MyCombinationStepBadge;
