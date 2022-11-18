import { useState, useEffect } from 'react';
import axios from 'axios';

import Ingredient from '@components/CustomCombination/Ingredient';

import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

import { 인터페이스_꿀조합, 인터페이스_재료데이터, 인터페이스_레시피 } from '../../types/ISandwich';

const INGREDIENT_PATH = '/data/ingredients.json';
const RECIPE_PATH = '/data/recipe.json';

type 타입_재료선택 = {
  customCombination: 인터페이스_꿀조합;
  currentStep: number;
  onChange: (선택한재료: 인터페이스_꿀조합) => void;
};

type 타입_스탭_목록 = {
  [key: number]: string[];
};

const 스탭_재료_목록: 타입_스탭_목록 = {
  1: ['샌드위치'],
  2: ['빵', '토스팅', '치즈'],
  3: ['야채', '추가재료'],
  4: ['소스'],
};

const 재료데이터_초기값: 인터페이스_재료데이터[] = [
  { 카테고리: '', 배경색: '', 글자색: '', 속성유무: false, 목록: [] },
];

function CustomStep(props: 타입_재료선택) {
  const { currentStep: 현재진행도, customCombination: 나만의_조합, onChange: 나만의_조합_수정_이벤트 } = props;

  const [재료데이터, 재료데이터_수정] = useState(재료데이터_초기값);

  useEffect(() => {
    const request = async () => {
      const ingredientRes = await axios.get(INGREDIENT_PATH);
      const recipeRes = await axios.get(RECIPE_PATH);

      let ingredientsData: 인터페이스_재료데이터[] = ingredientRes.data;
      const recipeData: 인터페이스_레시피[] = recipeRes.data;

      ingredientsData = ingredientsData.filter(data => data.카테고리 !== '샌드위치');

      const additionalData = [
        { 카테고리: '토스팅', 목록: [{ 이름: '네' }, { 이름: '아니오' }] },
        { 카테고리: '샌드위치', 목록: recipeData.map(data => ({ 이름: data.이름 })) },
      ];

      재료데이터_수정([...ingredientsData, ...additionalData]);
    };
    request();
  }, []);

  return (
    <CustomStepWrap>
      {스탭_재료_목록[현재진행도].map(카테고리 => (
        <IngredientsSection key={카테고리}>
          <IngredientTitle>{카테고리}</IngredientTitle>
          <Ingredients>
            {재료데이터
              ? 재료데이터
                  .find(재료데이터 => 재료데이터.카테고리 === 카테고리)
                  ?.목록.map(재료정보 => <Ingredient key={재료정보.이름}>{재료정보.이름}</Ingredient>)
              : null}
          </Ingredients>
        </IngredientsSection>
      ))}
    </CustomStepWrap>
  );
}

export default CustomStep;

const CustomStepWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 0 0;
  gap: 16px 0;
`;
const IngredientsSection = styled.section``;
const IngredientTitle = styled.h3`
  font-size: ${changeRem(18)};
  font-weight: bold;
`;
const Ingredients = styled.ul`
  display: flex;
  gap: 20px 4px;
  flex-wrap: wrap;
  align-items: center;
`;
