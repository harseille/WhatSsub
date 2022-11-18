import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IngredientButtonList from '@components/Attribute/AttributeButtonList';
import Button from '@components/UI/Button';
import Wrapper from '@components/UI/Wrapper';
import styled from '@emotion/styled';
import refreshIcon from '@assets/icons/refresh.svg';
import { changeRem, flexbox } from '@styles/mixin';
import { 인터페이스_꿀조합선택페이지_필터 } from '../types/ISandwich';
import 더미데이터 from '../data/PickPageDummy';

function BestCombinationPickPage() {
  const navigate = useNavigate();

  const initFilter: 인터페이스_꿀조합선택페이지_필터 = {
    맛: [],
    재료: [],
    추가사항: [],
  };

  const [selectedFilter, setSelectedFilter] = useState(initFilter);

  const 클릭핸들러_꿀조합_속성_토글 = (filter: string, name: string, maxNum: number) => {
    const filterArr = selectedFilter[filter];

    if (maxNum === 1 && !filterArr.includes(name)) {
      setSelectedFilter(prevState => ({
        ...prevState,
        [filter]: [name],
      }));
      return;
    }

    if (maxNum === filterArr.length && !filterArr.includes(name)) {
      alert('최대 선택 개수를 초과했습니다.!!!');
      return;
    }

    setSelectedFilter(prevState => {
      const filterArr: string[] = prevState[filter];

      if (filterArr.includes(name))
        return { ...prevState, [filter]: filterArr.filter((item: string) => item !== name) };

      return { ...prevState, [filter]: [...filterArr, name] };
    });
  };

  const 클릭핸들러_꿀조합_속성_초기화 = () => {
    setSelectedFilter(initFilter);
  };

  const 꿀조합_목록_페이지로_이동하기 = () => {
    navigate('/best-combination', { state: selectedFilter });
  };

  return (
    <Container>
      <IngredientButtonListWrap>
        <RefreshButton onClick={클릭핸들러_꿀조합_속성_초기화}>
          <img src={refreshIcon} alt="새로고침" />
        </RefreshButton>
        {더미데이터.map(data => (
          <IngredientButtonList
            key={data.제목}
            filterData={data}
            selectedFilter={selectedFilter}
            onSelectFilter={클릭핸들러_꿀조합_속성_토글}
          />
        ))}
      </IngredientButtonListWrap>
      <ButtonWrap>
        <Button
          onClick={꿀조합_목록_페이지로_이동하기}
          designType="primaryGreen"
          width={changeRem(330)}
          height={changeRem(50)}>
          꿀 조합 보러가기
        </Button>
      </ButtonWrap>
    </Container>
  );
}

export default BestCombinationPickPage;

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
