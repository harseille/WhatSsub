import img from '../img.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import count from '../state/state';
import Counter from '../components/Counter';
import music from '../music/whatSsup.mp3';

const Description = styled.p`
  font-size: 20px;
  color: green;
  background-color: yellow;
  padding: 10px;
`;

const audio = new Audio(music);

const Home = () => {
  const [countNumber, setCountNumber] = useRecoilState(count);

  const imgClickHandler = () =>
    setCountNumber(number => {
      if (typeof number !== 'number') return;
      return number + 1;
    });

  const whatSsupClickHandler = () => audio.play();

  return (
    <>
      <div
        onClick={whatSsupClickHandler}
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
      <img onClick={imgClickHandler} src={img} alt="" />
      <Counter />
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description>
    </>
  );
};

export default Home;
