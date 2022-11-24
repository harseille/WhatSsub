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
  아이콘: any;
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
  선택재료: [],
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
  3: ['야채', '추가재료'],
  4: ['소스'],
};

export const 필수_선택_재료 = ['샌드위치', '빵', '토스팅'];
