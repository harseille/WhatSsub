import styled from '@emotion/styled';
import theme from '@styles/theme';

export type TDesignType =
  | 'badgePrimaryRed'
  | 'badgePrimaryOrange'
  | 'badgePrimaryYellow'
  | 'badgePrimaryGreen'
  | 'badgePrimaryBlue'
  | 'badgePrimaryPurple';
// | 'normal'
// | 'social';

const designList = {
  badgePrimaryRed: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryRed};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
  badgePrimaryOrange: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryOrange};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
  badgePrimaryYellow: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryYellow};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
  badgePrimaryGreen: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryGreen};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
  badgePrimaryBlue: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryBlue};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
  badgePrimaryPurple: `
    position: absolute;
    right: -12px;
    top: -12px;
    background: ${theme.colors.primaryPurple};
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    padding: 6px;
    border-radius: 6px;
  `,
};

const Span = styled.span<
  React.CSSProperties & {
    designType?: TDesignType;
  }
>`
  ${({ display }) => display && `display : ${display}`};
  ${({ width }) => width && `width : ${width}`};
  ${({ height }) => height && `height : ${height}`};
  ${({ margin }) => margin && `margin : ${margin}`};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  ${({ padding }) => padding && `padding : ${padding}`};
  ${({ background }) => background && `background : ${background}`};
  ${({ color }) => color && `color : ${color}`};
  ${({ position }) => position && `position : ${position}`};
  ${({ top }) => top && `top : ${top}`};
  ${({ border }) => border && `border : ${border}`};
  ${({ top }) => top && `top : ${top}`};
  ${({ left }) => left && `left : ${left}`};
  ${({ bottom }) => bottom && `bottom : ${bottom}`};
  ${({ right }) => right && `right : ${right}`};
  ${({ animation }) => animation && `animation : ${animation}`};
  ${({ minHeight }) => minHeight && `min-height : ${minHeight}`};
  ${({ alignContent }) => alignContent && `align-content : ${alignContent}`};
  ${({ justifyContent }) => justifyContent && `justify-content : ${justifyContent}`};
  ${({ flexDirection }) => flexDirection && `flex-direction : ${flexDirection}`};
  ${({ flexWrap }) => flexWrap && `flex-wrap : ${flexWrap}`};
  ${({ flexShrink }) => flexShrink && `flex-shrink : ${flexShrink}`};
  ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};
  ${({ fontSize }) => fontSize && `font-size : ${fontSize}`};
  ${({ fontWeight }) => fontWeight && `font-weight : ${fontWeight}`};
  ${({ borderRadius }) => borderRadius && `border-radius : ${borderRadius}`};
  ${({ zIndex }) => zIndex && `z-index : ${zIndex}`};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing : ${letterSpacing}`};
  ${({ lineHeight }) => lineHeight && `line-height : ${lineHeight}`};
  ${({ boxShadow }) => boxShadow && `box-shadow : ${boxShadow}`};
  ${({ textAlign }) => textAlign && `text-align : ${textAlign}`};
  ${({ designType }) => designType && designList[designType]};
`;

export default Span;
