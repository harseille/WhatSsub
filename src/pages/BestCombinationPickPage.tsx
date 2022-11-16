import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientButtonList from '@components/IngredientButtonList';
import Button from '@components/UI/Button/Button';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import { changeRem, flexbox } from '@styles/mixin';
import refreshIcon from '@assets/icons/refresh.svg';

export interface 재료 {
  id: string;
  이름: string;
}

export interface 재료선택 {
  제목: string;
  재료목록: 재료[];
  최대선택개수: number;
}

interface IFilter {
  [key: string]: string[];
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
    최대선택개수: 3,
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
    최대선택개수: 1,
  },
  {
    제목: '추가사항',
    재료목록: [
      { id: 'A1', 이름: '고기러버' },
      { id: 'A2', 이름: '치즈폭탄' },
      { id: 'A3', 이름: '저칼로리' },
    ],
    최대선택개수: 3,
  },
];

function BestCombinationPickPage() {
  const navigate = useNavigate();

  const initFilter: IFilter = {
    맛: [],
    재료: [],
    추가사항: [],
  };

  const [selectedFilter, setSelectedFilter] = useState(initFilter);

  const selectFilterHandler = (filter: string, name: string, maxNum: number) => {
    const filterArr = selectedFilter[filter];

    if (maxNum === 1 && !filterArr.includes(name)) {
      setSelectedFilter(prevState => ({
        ...prevState,
        [filter]: [name],
      }));
      return;
    }

    if (maxNum === filterArr.length && !filterArr.includes(name)) {
      alert('최대 선택 개수를 초과했습니다.');
      return;
    }

    setSelectedFilter(prevState => {
      const filterArr: string[] = prevState[filter];

      if (filterArr.includes(name))
        return { ...prevState, [filter]: filterArr.filter((item: string) => item !== name) };

      return { ...prevState, [filter]: [...filterArr, name] };
    });
  };

  const refreshFilter = () => {
    setSelectedFilter(initFilter);
  };

  const navigateListPage = () => {
    navigate('/best-combination', { state: selectedFilter });
  };

  return (
    <Container>
      <IngredientButtonListWrap>
        <RefreshButton onClick={refreshFilter}>
          <img src={refreshIcon} alt="새로고침" />
        </RefreshButton>
        {더미데이터.map(data => (
          <IngredientButtonList
            key={data.제목}
            filterData={data}
            selectedFilter={selectedFilter}
            onSelectFilter={selectFilterHandler}
          />
        ))}
      </IngredientButtonListWrap>
      <ButtonWrap>
        <Button onClick={navigateListPage} designType="primaryGreen" width={changeRem(330)} height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled(Wrapper)`
  ${flexbox('column', 'space-between', 'center')};
  padding: 26px;
`;

const IngredientButtonListWrap = styled.div`
  position: relative;
  padding-top: 20px;
`;

const RefreshButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  width: 45px;
  height: 45px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 120px;
`;

export default BestCombinationPickPage;
