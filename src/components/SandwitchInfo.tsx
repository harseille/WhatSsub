import styled from '@emotion/styled';
import ChickenSlice from '@assets/images/Chicken_Slice.png';
import { changeRem } from '../styles/mixin';
import SandwitchBadgeList from './SandwitchBadgeList';

function SandwitchInfo() {
  return (
    <InfoWrap>
      <ImgWrap>
        <img src={ChickenSlice} alt="" />
      </ImgWrap>
      <SandwitchName>꿀꿀마앗</SandwitchName>
      <InfoSummary>
        치킨 슬라이스 • <Kcal>265Kcal</Kcal>
      </InfoSummary>
      <SandwitchBadgeList />
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: ${changeRem(305)};
  margin: 10px;
`;

const ImgWrap = styled.div`
  width: ${changeRem(275)};
  height: ${changeRem(120)};
  margin: 0 auto 15px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SandwitchName = styled.p`
  font-size: ${changeRem(20)};
  font-weight: 700;
  margin-bottom: 3px;
`;

const InfoSummary = styled.p`
  font-weight: 500;
  color: rgba(26, 7, 0, 0.4);
  margin-bottom: 16px;
`;

const Kcal = styled.span`
  color: #ffd600;
`;

export default SandwitchInfo;
