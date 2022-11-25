import { useEffect, useState } from 'react';

import SelectCombination from '@components/CustomCombination/SelectCombination';
import NextStepButton from '@components/CustomCombination/NextStepButton';
import CombinationRegistration from '@components/CustomCombination/CombinationRegistration';
import { fetchIngredients, fetchRecipe } from '@utils/fetchJson';

import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';

import { 인터페이스_생성단계_꿀조합, 인터페이스_재료데이터, 인터페이스_레시피 } from '@typings/ISandwich';

type TProps = {
  customCombination: 인터페이스_생성단계_꿀조합;
  currentStep: number;
  onChange: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  onNextStep: () => void;
};

function SelectComponent(props: TProps) {
  const {
    currentStep: 현재진행도,
    onNextStep: 다음_선택지로_이동하기,
    onChange: 체인지핸들러_나만의_조합_수정,
    customCombination: 나만의_조합,
  } = props;

  const [ingredientsData, setIngredientsData] = useState<인터페이스_재료데이터[]>();
  const [recipeData, setRecipeData] = useState<인터페이스_레시피[]>();

  useEffect(() => {
    const request = async () => {
      const ingredients = await fetchIngredients();
      const recipe = await fetchRecipe();
      setIngredientsData(ingredients);
      setRecipeData(recipe);
    };
    request();
  }, []);

  if (!ingredientsData || !recipeData) return null;

  return (
    <SelectWrap>
      {현재진행도 <= 4 ? (
        <>
          <SelectCombination
            jsonData={{ ingredientsData, recipeData }}
            currentStep={현재진행도}
            customCombination={나만의_조합}
            onChange={체인지핸들러_나만의_조합_수정}
          />

          <NextStepButton currentStep={현재진행도} onNextStep={다음_선택지로_이동하기} />
        </>
      ) : (
        <CombinationRegistration jsonData={{ ingredientsData, recipeData }} customCombination={나만의_조합} />
      )}
    </SelectWrap>
  );
}

export default SelectComponent;
const SelectWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  min-height: ${changeRem(510)};
`;
