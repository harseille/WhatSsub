import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import SandwitchBadgeList from '@components/SandwitchBadgeList';
import { 샌드위치 } from '@components/UI/Cards/SandwitchInfoCard';

function SandwitchInfo({ sandwitch: { 이미지, 이름, 베이스샌드위치, 칼로리, 뱃지리스트 } }: { sandwitch: 샌드위치 }) {
  return (
    <InfoWrap>
      <ImgWrap>
        <img src={이미지} alt={이름} />
      </ImgWrap>
      <SandwitchName>{이름}</SandwitchName>
      <InfoSummary>
        {베이스샌드위치} • <Kcal>{칼로리}Kcal</Kcal>
      </InfoSummary>
      <SandwitchBadgeList badgeList={뱃지리스트} />
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: ${changeRem(305)};
  /* margin: 10px; */
  //원오야 잠시 마진 뺼게 조립할 때 요 마진 있어서 정렬이 어렵 -다빈
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
  margin-bottom: 10px;
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