import homeImg from '@assets/images/home.svg';
import rankingImg from '@assets/images/ranking.svg';
import customImg from '@assets/images/custom.svg';
import myPageImg from '@assets/images/myPage.svg';
import { 인터페이스_꿀조합선택페이지_필터 } from '../types/ISandwich';

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

export const 꿀조합_픽_초기_필터: 인터페이스_꿀조합선택페이지_필터 = {
  맛: [],
  재료: [],
  추가사항: [],
};
