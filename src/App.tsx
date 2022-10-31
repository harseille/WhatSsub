import img from './img.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Description = styled.p`
  font-size: 20px;
  color: green;
  background-color: yellow;
  padding: 10px;
`;

export default function App() {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: ${'#fff'};
          }
        `}
      >
        WhatSsup
      </div>
      <img src={img} alt="" />
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description>
    </>
  );
}
