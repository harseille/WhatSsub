import homeImg from '@assets/images/home.svg';
import rankingImg from '@assets/images/ranking.svg';
import customImg from '@assets/images/custom.svg';
import myPageImg from '@assets/images/myPage.svg';
import {
  인터페이스_꿀조합선택페이지_필터,
  인터페이스_생성단계_꿀조합,
  인터페이스_재료데이터,
} from '@typings/ISandwich';

type 타입_메뉴 = {
  메뉴명: string;
  이동링크: string;
  아이콘: string;
  아이콘설명: string;
  로그인상관여부: boolean;
};
export const DEFAULT_SIZE = 16;
export const API_URL_PATH_PREFIX = '/data';
export const 메뉴정보: 타입_메뉴[] = [
  { 메뉴명: '홈', 이동링크: '/', 아이콘: homeImg, 아이콘설명: '홈 아이콘', 로그인상관여부: false },
  {
    메뉴명: '맛잘알랭킹',
    이동링크: '/best-combination/ranking',
    아이콘: rankingImg,
    아이콘설명: '맛잘알랭킹 아이콘',
    로그인상관여부: false,
  },
  {
    메뉴명: '커스텀',
    이동링크: '/custom-combination',
    아이콘: customImg,
    아이콘설명: '커스텀 아이콘',
    로그인상관여부: true,
  },
  {
    메뉴명: '마이페이지',
    이동링크: '/myPage',
    아이콘: myPageImg,
    아이콘설명: '마이페이지 아이콘',
    로그인상관여부: true,
  },
];

export const 꿀조합_픽_초기_필터: 인터페이스_꿀조합선택페이지_필터 = {
  맛: [],
  재료: [],
  추가사항: [],
};

// CustomCombinationPage 관련 상수

export const INGREDIENT_PATH = '/data/ingredients.json';
export const RECIPE_PATH = '/data/recipe.json';

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
      이미지: '/images/ingredients/vegetable/Lettuce.png',
      칼로리: '2.9',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v2',
      이름: '양파',
      이미지: '/images/ingredients/vegetable/Red_Onions.png',
      칼로리: '2.8',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v3',
      이름: '오이',
      이미지: '/images/ingredients/vegetable/Cucumbers.png',
      칼로리: '1.5',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v4',
      이름: '올리브',
      이미지: '/images/ingredients/vegetable/Olives.png',
      칼로리: '3.9',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v5',
      이름: '토마토',
      이미지: '/images/ingredients/vegetable/Tomatoes.png',
      칼로리: '7.7',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v6',
      이름: '피망',
      이미지: '/images/ingredients/vegetable/Peppers.png',
      칼로리: '1.4',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v7',
      이름: '피클',
      이미지: '/images/ingredients/vegetable/Pickles.png',
      칼로리: '0.4',
      카테고리: '야채',
      추가재료여부: false,
    },
    {
      id: 'v8',
      이름: '할라피뇨',
      이미지: '/images/ingredients/vegetable/Jalapenos.png',
      칼로리: '0.6',
      카테고리: '야채',
      추가재료여부: false,
    },
  ],
};

export const 재료데이터_초기값: 인터페이스_재료데이터[] = [
  { 카테고리: '', 배경색: '', 글자색: '', 속성유무: false, 목록: [] },
];

type 타입_카테고리_목록 = {
  [key: number]: string[];
};

export const 스탭_재료_목록: 타입_카테고리_목록 = {
  1: ['샌드위치'],
  2: ['빵', '토스팅', '치즈'],
  3: ['야채', '소스'],
  4: ['추가재료'],
};

export const 필수_선택_재료 = ['샌드위치', '빵', '토스팅'];

export const 화면용_재료_아이디: { [key: string]: number } = {
  b1: 11,
  b2: 12,
  b3: 13,
  b4: 14,
  b5: 15,
  b6: 16,
  c1: 21,
  c3: 22,
  c2: 23,
  v1: 31,
  v2: 32,
  v3: 33,
  v4: 34,
  v5: 35,
  v6: 36,
  v7: 37,
  v8: 38,
  s1: 401,
  s2: 402,
  s3: 403,
  s4: 404,
  s5: 405,
  s6: 406,
  s7: 407,
  s8: 408,
  s9: 409,
  s10: 410,
  s11: 411,
  s12: 412,
  s13: 413,
  s14: 414,
  s15: 415,
  a1: 501,
  a2: 502,
  a3: 503,
  a4: 504,
  a5: 505,
  a6: 506,
  a7: 507,
  a8: 508,
  a9: 509,
};
