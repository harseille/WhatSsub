import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Counter from '@components/Counter';
import img from '@assets/images/img.png';
import music from '@assets/audios/whatSsup.mp3';
import SandwitchInfoCard from '@components/SandwitchInfoCard';
import count from '../state/state';

const Description = styled.p`
  font-size: 20px;
  background-color: yellow;
  color: ${props => props.theme.colors.primaryBlue};
  padding: 10px;
`;

const audio = new Audio(music);

function HomePage() {
  const [countNumber, setCountNumber] = useRecoilState(count);

  const imgClickHandler = () =>
    setCountNumber(number => {
      if (typeof number !== 'number') return;
      return number + 1;
    });

  const whatSsupClickHandler = () => audio.play();

  return (
    <>
      <SandwitchInfoCard />
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
        `}>
        WhatSsup
      </div>
      <Counter />
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis.</Description>
    </>
  );
}

export default HomePage;
