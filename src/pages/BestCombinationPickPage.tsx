import IngredientButtonList from '@components/IngredientButtonList';
import Button from '@components/UI/Button/Button';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';

export interface 재료 {
  id: string;
  이름: string;
}

export interface 재료선택 {
  제목: string;
  재료목록: 재료[];
  선택개수: number;
}

const 더미데이터: 재료선택[] = [
  {
    제목: '맛',
    재료목록: [
      { id: 'F1', 이름: '달달' },
      { id: 'F2', 이름: '새콤' },
      { id: 'F3', 이름: '고소' },
      { id: 'F4', 이름: '짭짤' },
    ],
    선택개수: 3,
  },
  {
    제목: '재료',
    재료목록: [
      { id: 'I1', 이름: '돼지고기' },
      { id: 'I2', 이름: '소고기' },
      { id: 'I3', 이름: '닭고기' },
      { id: 'I4', 이름: '해산물' },
      { id: 'I5', 이름: '에그마요' },
      { id: 'I6', 이름: '야채' },
    ],
    선택개수: 1,
  },
  {
    제목: '추가사항',
    재료목록: [
      { id: 'A1', 이름: '고기러버' },
      { id: 'A2', 이름: '치즈폭탄' },
      { id: 'A3', 이름: '저칼로리' },
    ],
    선택개수: 3,
  },
];

function BestCombinationPickPage() {
  return (
    <Container>
      <div>
        {더미데이터.map(data => (
          <IngredientButtonList filterData={data} />
        ))}
      </div>
      <ButtonWrap>
        <Button designType="primaryGreen" width={changeRem(330)} height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 120px;
`;

export default BestCombinationPickPage;
