import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import SandwichBadgeList from '@components/SandwichBadgeList';
import { 샌드위치 } from '@components/UI/Cards/SandwichInfoCard';

function SandwichInfo({ sandwich: { 이미지, 이름, 베이스샌드위치, 칼로리, 뱃지리스트 } }: { sandwich: 샌드위치 }) {
  return (
    <InfoWrap>
      <ImgWrap>
        <img src={이미지} alt={이름} />
      </ImgWrap>
      <SandwichName>{이름}</SandwichName>
      <InfoSummary>
        {베이스샌드위치} • <Kcal>{칼로리}Kcal</Kcal>
      </InfoSummary>
      <SandwichBadgeList badgeList={뱃지리스트} />
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: ${changeRem(305)};
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

const SandwichName = styled.p`
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

export default SandwichInfo;
