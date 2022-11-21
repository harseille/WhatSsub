import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const designList = {
  primaryGreen: `
    background: #098D42;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  `,
  primaryYellow: `
    background: #FBC200;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
  `,
  social: `
    background: #fff;
    color: #8E8EA9;
    border: 1px solid #8E8EA9;
    font-weight: 400;
    font-size: 16px;
    & img {
      margin-right:8px;
    }
    `,
};

export type TDesignType = 'primaryGreen' | 'primaryYellow' | 'social';

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
