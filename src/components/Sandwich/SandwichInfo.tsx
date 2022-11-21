import SandwichBadgeList from '@components/BestCombinationAttribute/AttributeBadgeList';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';
import { 인터페이스_샌드위치 } from '../../types/ISandwich';

type TProps = {
  sandwich: 인터페이스_샌드위치;
};

function SandwichInfo({ sandwich: { 이미지, 이름, 베이스샌드위치, 칼로리, 뱃지리스트 } }: TProps) {
  return (
    <InfoWrap>
      <ImgWrap>
        <img src={이미지} alt={이름} />
      </ImgWrap>
      <div>
        <SandwichName>{이름}</SandwichName>
        <InfoSummary>
          {베이스샌드위치} • <Kcal>{칼로리}Kcal</Kcal>
        </InfoSummary>
        <SandwichBadgeList badgeList={뱃지리스트} />
      </div>
    </InfoWrap>
  );
}

export default SandwichInfo;

const InfoWrap = styled.div`
  max-width: ${changeRem(305)};

  ${mediaQuery} {
    width: 100%;
    margin: auto 0;
    max-width: ${changeRem(835)};
    ${flexbox('row', 'space-between', 'center')}
  }
`;

const ImgWrap = styled.div`
  width: ${changeRem(275)};
  margin: 0 auto 15px;

  ${mediaQuery} {
    width: ${changeRem(375)};
    margin: 0;
  }

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
