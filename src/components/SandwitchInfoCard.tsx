import styled from '@emotion/styled';
import heart from '@assets/images/heart.png';
import SandwitchInfo from './SandwitchInfo';
import { changeRem } from '../styles/mixin';

function SandwitchInfoCard() {
  return (
    <CardWarp>
      <SandwitchInfo />
      <LikeBtn />
    </CardWarp>
  );
}

const CardWarp = styled.div`
  position: relative;
  padding: 45px 25px 20px;
  max-width: ${changeRem(370)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
`;

const LikeBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  outline: none;
  border-radius: 50%;
  width: ${changeRem(34)};
  height: ${changeRem(34)};
  background: url(${heart}) no-repeat center;
  background-color: #ffe8e0;
`;

export default SandwitchInfoCard;
