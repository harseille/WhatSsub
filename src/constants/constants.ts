import homeImg from '@assets/icons/home.svg';
import rankingImg from '@assets/icons/ranking.svg';
import customImg from '@assets/icons/custom.svg';
import myPageImg from '@assets/icons/myPage.svg';
import { 인터페이스_꿀조합선택페이지_필터, 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

type 타입_메뉴 = {
  메뉴명: string;
  이동링크: string;
  아이콘: string;
  아이콘설명: string;
  로그인상관여부: boolean;
};
export const DEFAULT_SIZE = 16;
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
    로그인상관여부: false,
  },
  {
    메뉴명: '마이페이지',
    이동링크: '/myPage',
    아이콘: myPageImg,
    아이콘설명: '마이페이지 아이콘',
    로그인상관여부: true,
  },
];

export const 꿀조합_초기값: 인터페이스_생성단계_꿀조합 = {
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

export const 꿀조합_픽_초기_필터: 인터페이스_꿀조합선택페이지_필터 = {
  맛: [],
  재료: [],
  추가사항: [],
};

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
