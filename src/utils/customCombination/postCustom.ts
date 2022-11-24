import axios from 'axios';
import dbPush from '@api/dbPush';

import { RECIPE_PATH, INGREDIENT_PATH } from '@constants/constants';

import { 인터페이스_생성단계_꿀조합, 인터페이스_레시피, 인터페이스_메인재료 } from '@typings/ISandwich';

type TProps = {
  customCombination: 인터페이스_생성단계_꿀조합;
  onChange?: (선택한재료: 인터페이스_생성단계_꿀조합) => void;
  inputValue: string;
  userInfo: { id: string | undefined; name: string | null | undefined };
};

const 뱃지리스트_추가하기 = async (
  조합: 인터페이스_생성단계_꿀조합,
  나만의_조합: 인터페이스_생성단계_꿀조합,
  recipeData: 인터페이스_레시피[]
) => {
  const ingredientRes = await axios.get(INGREDIENT_PATH);
  const 전체_메인재료_목록: 인터페이스_메인재료[] = ingredientRes.data[0].목록;

  const 메인재료 = recipeData.find(레시피 => 레시피.이름 === 조합.베이스샌드위치)?.재료목록 as string[];
  const 재료_뱃지 = 메인재료.map(메인재료 => 전체_메인재료_목록.find(재료 => 재료.이름 === 메인재료)?.속성);

  조합.뱃지리스트 = [...new Set(재료_뱃지)] as string[];

  나만의_조합.선택재료.map(재료 => {
    if (재료.카테고리 === '추가재료' && !조합.뱃지리스트.includes(재료.속성 as string))
      조합.뱃지리스트.push(재료.속성 as string);
    else if (재료.카테고리 === '소스' && !조합.뱃지리스트.includes(재료.속성 as string))
      조합.뱃지리스트.push(재료.속성 as string);
    return undefined;
  });
};

const 조합_정리하기 = async (props: TProps) => {
  const { customCombination: 나만의_조합, inputValue: 꿀조합_제목, userInfo } = props;

  const 조합 = { ...나만의_조합 };
  const recipeRes = await axios.get(RECIPE_PATH);
  const recipeData: 인터페이스_레시피[] = recipeRes.data;
  let 총_칼로리 = Number(recipeData.find(레시피 => 레시피.이름 === 조합.베이스샌드위치)?.재료칼로리 as string);
  총_칼로리 += 조합.선택재료
    .map(재료 => (재료.이름 === '더블업' ? 총_칼로리 : Number(재료.칼로리)))
    .reduce((pre, cur) => pre + cur, 0);

  조합.꿀조합제목 = 꿀조합_제목;
  조합.작성자 = userInfo.name as string;
  조합.작성자id = userInfo.id as string;
  조합.작성일 = Date.now();
  조합.칼로리 = 총_칼로리.toFixed(1).toString();

  await 뱃지리스트_추가하기(조합, 나만의_조합, recipeData);

  return 조합;
};

const postCustom = async (props: TProps) => {
  const { customCombination, onChange: 체인지핸들러_나만의_조합_수정, inputValue, userInfo } = props;

  if (!inputValue.trim()) return alert('제목을 입력해주세요');

  const 조합_정보 = await 조합_정리하기({ customCombination, inputValue, userInfo });

  console.log(조합_정보);
  dbPush('꿀조합', 조합_정보);
};

export default postCustom;
