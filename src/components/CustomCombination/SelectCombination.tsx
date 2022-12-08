import { useState, useEffect } from 'react';
import Ingredient from '@components/CustomCombination/Ingredient';
import {
  스탭_재료_목록,
  필수_선택_재료,
  재료데이터_초기값,
  재료_카테고리,
} from '@constants/CustomCombination/constants';
import ingredients from '@data/ingredients';
import recipe from '@data/recipe';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합, 인터페이스_선택된_재료 } from '@typings/ISandwich';

type TProps = {
  currentStep: number;
  customCombination: 인터페이스_생성단계_꿀조합;
  onChange: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  changeModalType: (type: string) => void;
};

function CustomStep({ currentStep: 현재진행도, customCombination: 나만의_조합, onChange, changeModalType }: TProps) {
  const [재료데이터, 재료데이터_수정] = useState(재료데이터_초기값);

  useEffect(() => {
    const 재료데이터 = ingredients.filter(data => data.카테고리 !== 재료_카테고리.샌드위치);
    const 추가재료 = [
      { 카테고리: 재료_카테고리.토스팅, 목록: [{ 이름: '네' }, { 이름: '아니요' }] },
      {
        카테고리: 재료_카테고리.샌드위치,
        목록: recipe.map(data => ({ 이름: data.이름, 칼로리: data.재료칼로리 })),
      },
    ];

    재료데이터_수정([...재료데이터, ...추가재료]);
  }, []);

  const 선택재료_확인하기 = (재료정보: 인터페이스_선택된_재료) => {
    if (재료정보.카테고리 === 재료_카테고리.샌드위치) return 나만의_조합.베이스샌드위치 === 재료정보.이름;
    if (재료정보.카테고리 === 재료_카테고리.토스팅) return 나만의_조합.토스팅 === 재료정보.이름;
    return !!나만의_조합.선택재료.find(
      선택재료 =>
        선택재료.이름 === 재료정보.이름 &&
        (재료정보.카테고리 === 재료_카테고리.추가재료 ? 선택재료.추가재료여부 : !선택재료.추가재료여부)
    );
  };

  return (
    <CustomStepWrap>
      {스탭_재료_목록[현재진행도].map(카테고리 => (
        <IngredientsSection key={카테고리}>
          <IngredientTitle
            tabIndex={0}
            aria-label={
              필수_선택_재료.find(필수재료 => 필수재료 === 카테고리 || 카테고리 === 재료_카테고리.야채)
                ? 카테고리 === 재료_카테고리.야채
                  ? 카테고리 + ' 의 경우 뺴고 싶은 경우 선택해 주세요. 기본적으로 전체 야채가 선택되어 있습니다.'
                  : 카테고리 + '선택 목록입니다. 해당 재료는 필수 선택 재료로 반드시 선택해 주셔야 합니다.'
                : 카테고리 + ' 선택 목록입니다'
            }>
            {필수_선택_재료.find(필수재료 => 필수재료 === 카테고리) ? 카테고리 + '*' : 카테고리}
          </IngredientTitle>
          <Ingredients>
            {재료데이터
              .find(재료데이터 => 재료데이터.카테고리 === 카테고리)
              ?.목록.map(재료정보 => (
                <Ingredient
                  IngredientInfo={{ ...재료정보, 카테고리 }}
                  isSelected={선택재료_확인하기({ ...재료정보, 카테고리 })}
                  customCombination={나만의_조합}
                  onChange={onChange}
                  key={재료정보.이름}
                  changeModalType={changeModalType}
                />
              ))}
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
