import { 인터페이스_생성단계_꿀조합, 인터페이스_재료데이터 } from '@typings/ISandwich';

type 타입_카테고리_목록 = {
  [key: number]: string[];
};

type 타입_버튼_텍스트 = {
  [key: number]: string;
};

export const 나만의_조합_초기값: 인터페이스_생성단계_꿀조합 = {
  작성자id: '',
  꿀조합제목: '',
  작성자: '',
  작성일: 0,
  좋아요: 0,
  베이스샌드위치: '',
  이미지: '',
  토스팅: '',
  칼로리: '',
  뱃지리스트: [],
  선택재료: [
    {
      id: 'v1',
      이름: '양상추',
      이미지: '/images/ingredients/vegetable/Lettuce.webp',
      칼로리: '2.9',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v2',
      이름: '양파',
      이미지: '/images/ingredients/vegetable/Red_Onions.webp',
      칼로리: '2.8',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v3',
      이름: '오이',
      이미지: '/images/ingredients/vegetable/Cucumbers.webp',
      칼로리: '1.5',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v4',
      이름: '올리브',
      이미지: '/images/ingredients/vegetable/Olives.webp',
      칼로리: '3.9',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v5',
      이름: '토마토',
      이미지: '/images/ingredients/vegetable/Tomatoes.webp',
      칼로리: '7.7',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v6',
      이름: '피망',
      이미지: '/images/ingredients/vegetable/Peppers.webp',
      칼로리: '1.4',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v7',
      이름: '피클',
      이미지: '/images/ingredients/vegetable/Pickles.webp',
      칼로리: '0.4',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v8',
      이름: '할라피뇨',
      이미지: '/images/ingredients/vegetable/Jalapenos.webp',
      칼로리: '0.6',
      카테고리: '야채',
      추가재료여부: false,
    },
  ],
};

export const 재료데이터_초기값: 인터페이스_재료데이터[] = [
  { 카테고리: '', 배경색: '', 글자색: '', 속성유무: false, 목록: [] },
];

export const 재료_카테고리 = {
  샌드위치: '샌드위치',
  빵: '빵',
  토스팅: '토스팅',
  치즈: '치즈',
  야채: '야채',
  소스: '소스',
  추가재료: '추가재료',
};

export const 스탭_재료_목록: 타입_카테고리_목록 = {
  1: [재료_카테고리.샌드위치],
  2: [재료_카테고리.빵, 재료_카테고리.토스팅, 재료_카테고리.치즈],
  3: [재료_카테고리.야채, 재료_카테고리.소스],
  4: [재료_카테고리.추가재료],
};

export const 필수_선택_재료 = [재료_카테고리.샌드위치, 재료_카테고리.빵, 재료_카테고리.토스팅];

export const PROGRESS = {
  FirstStep: 1,
  SecondStep: 2,
  ThirdStep: 3,
  LastStep: 4,
};

export const 버튼_텍스트: 타입_버튼_텍스트 = {
  1: '빵 선택하러가기',
  2: '재료 선택하러가기',
  3: '소스 선택하러가기',
  4: '조합 완료',
};

export const MODAL_TYPE_KEYS = {
  Required: 'Required',
  TitleCheck: 'TitleCheck',
  Delete: 'Delete',
  Limited: 'Limited',
  BackEvent: 'BackEvent',
  Login: 'Login',
  none: 'none',
};
