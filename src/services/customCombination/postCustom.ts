import setFirebaseImgURL from '@services/Firebase/setFirebaseImgURL';
import { dbPush } from '@api/index';
import ingredients from '@data/ingredients';
import recipe from '@data/recipe';
import { 재료_카테고리 } from '@constants/CustomCombination/constants';
import { 인터페이스_생성단계_꿀조합, 인터페이스_메인재료 } from '@typings/ISandwich';

type TArgument = {
  customCombination: 인터페이스_생성단계_꿀조합;
  value: string;
  userInfo: { id: string | undefined; name: string | null | undefined };
};

const 뱃지리스트_추가하기 = (꿀조합: 인터페이스_생성단계_꿀조합, 나만의_조합: 인터페이스_생성단계_꿀조합) => {
  const 전체_메인재료_목록: 인터페이스_메인재료[] = ingredients[0].목록;

  const 메인재료 = recipe.find(레시피 => 레시피.이름 === 꿀조합.베이스샌드위치)?.재료목록 as string[];
  const 재료_뱃지 = 메인재료.map(메인재료 => 전체_메인재료_목록.find(재료 => 재료.이름 === 메인재료)?.속성);

  꿀조합.뱃지리스트 = [...new Set(재료_뱃지)] as string[];

  나만의_조합.선택재료.map(재료 => {
    if (재료.카테고리 === 재료_카테고리.추가재료 && !꿀조합.뱃지리스트.includes(재료.속성 as string))
      꿀조합.뱃지리스트.push(재료.속성 as string);
    else if (재료.카테고리 === 재료_카테고리.소스 && !꿀조합.뱃지리스트.includes(재료.속성 as string))
      꿀조합.뱃지리스트.push(재료.속성 as string);
    return undefined;
  });
};

const 조합_정리하기 = (args: TArgument) => {
  const { customCombination: 나만의_조합, value: 꿀조합_제목, userInfo } = args;

  const 조합 = { ...나만의_조합 };

  let 총_칼로리 = Number(recipe.find(레시피 => 레시피.이름 === 조합.베이스샌드위치)?.재료칼로리 as string);
  총_칼로리 += 조합.선택재료
    .map(재료 => (재료.이름 === '더블업' ? 총_칼로리 : Number(재료.칼로리)))
    .reduce((pre, cur) => pre + cur, 0);

  조합.꿀조합제목 = 꿀조합_제목;
  조합.작성자 = userInfo.name as string;
  조합.작성자id = userInfo.id as string;
  조합.작성일 = Date.now();
  조합.칼로리 = 총_칼로리.toFixed(1).toString();

  조합.이미지 = setFirebaseImgURL(recipe.find(레시피 => 레시피.이름 === 조합.베이스샌드위치)?.이미지 as string);
  조합.선택재료 = 조합.선택재료.map(선택재료 => ({
    ...선택재료,
    이미지: setFirebaseImgURL(선택재료?.이미지 as string),
  }));

  뱃지리스트_추가하기(조합, 나만의_조합);

  return 조합;
};

const 꿀조합_등록하기 = async (args: TArgument) => {
  const { customCombination, value, userInfo } = args;

  const 조합_정보 = 조합_정리하기({ customCombination, value, userInfo });
  const 조합_등록 = await dbPush('꿀조합', 조합_정보);

  return 조합_등록;
};

export default 꿀조합_등록하기;
