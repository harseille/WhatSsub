import styled from '@emotion/styled';
import theme from '@styles/theme';
import { CSSProperties } from 'react';

export type TDesignType =
  | 'primaryRed'
  | 'primaryOrange'
  | 'primaryYellow'
  | 'primaryGreen'
  | 'primaryBlue'
  | 'primaryPurple'
  | 'normal'
  | 'AccessibilityGreen'
  | 'social';

const designList = {
  primaryRed: `
    background: ${theme.colors.primaryRed};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
  primaryOrange: `
  background: ${theme.colors.primaryOrange};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 18px;
  `,
  primaryYellow: `
  background: ${theme.colors.primaryYellow};
  color: ${theme.colors.white};
  font-weight: 700;
  font-size: 18px;
  `,
  primaryGreen: `
    background: ${theme.colors.primaryGreen};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
  primaryBlue: `
    background: ${theme.colors.primaryBlue};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
  primaryPurple: `
    background: ${theme.colors.primaryPurple};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
  normal: `
    background: #dad9d9;
    color: #787878;
    font-weight: 700;
    font-size: 18px;
  `,
  social: `
    background: ${theme.colors.white};
    color: ${theme.colors.gray87};
    border: 1px solid ${theme.colors.gray87};
    font-weight: 400;
    font-size: 16px;
    & img {
      margin-right:8px;
    }
  `,
  AccessibilityGreen: `
    background: ${theme.colors.AccessibilityGreen};
    color: ${theme.colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
};

export default styled.button<
  CSSProperties & {
    designType?: TDesignType;
  }
>`
  display: ${({ display }) => display || 'inline-flex'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  align-content: ${({ alignContent }) => alignContent || 'center'};
  ${({ flexDirection }) => flexDirection && `flex-direction : ${flexDirection}`};

  margin: ${({ margin }) => margin};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background || 'white'};
  color: ${({ color }) => color};

  border: ${({ border }) => border || 'none'};
  box-sizing: ${({ boxSizing }) => boxSizing};
  border-radius: ${({ borderRadius }) => borderRadius};

  z-index: ${({ zIndex }) => zIndex};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing : ${letterSpacing}`};

  ${({ textAlign }) => textAlign && `text-align : ${textAlign}`};
  ${({ boxShadow }) => boxShadow && `box-shadow : ${boxShadow}`};
  ${({ designType }) => designType && designList[designType]};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};
  font-family: inherit;
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};

  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :focus {
    outline: 0;
    -webkit-appearance: none;
  }
`;
