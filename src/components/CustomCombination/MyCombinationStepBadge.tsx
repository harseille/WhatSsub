import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { MobileSize, DesktopSize } from '@constants/CustomCombination/constants';

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
  border-color: ${({ currentStep, children, theme }) =>
    currentStep >= children ? theme.colors.primaryYellow : theme.colors.grayEEE};
  background: ${({ currentStep, children, theme }) =>
    currentStep >= children ? theme.colors.primaryGreen : theme.colors.grayEEE};
  color: ${({ currentStep, children, theme }) => (currentStep >= children ? theme.colors.white : '#B1B1B1')};
  font-size: ${changeRem(10)};
  font-weight: bold;
  line-height: ${MobileSize - 6}px;
  text-align: center;
  cursor: pointer;
  transition: all 0.6s;

  ${mediaQuery} {
    width: ${changeRem(DesktopSize)};
    height: ${changeRem(DesktopSize)};
    line-height: ${DesktopSize - 6}px;
  }
`;

export default MyCombinationStepBadge;
