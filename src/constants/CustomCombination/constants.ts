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

export const 커스텀진행도_배열 = Object.values(PROGRESS);

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

type TModal = {
  [key: string]: {
    title: string;
    message: string;
  };
};

export const MODAL_TYPE: TModal = {
  Required: {
    title: '필수 재료 중 선택되지 않은 재료가 있습니다.',
    message: '카테고리에 별표가 있는 재료는 필수 선택 재료입니다. 필수 선택 재료를 선택 후 진행해 주세요.',
  },
  TitleCheck: {
    title: '샌드위치 이름을 정해주세요.',
    message: '샌드위치 이름을 정해주셔야 꿀 조합으로 등록할 수 있습니다.',
  },
  Delete: {
    title: '나만의 조합 등록을 취소합니다.',
    message: '확인을 누르시면 조합을 등록하지 않고 홈으로 이동합니다.',
  },
  Limited: {
    title: '선택 가능 개수를 초과했습니다.',
    message: '해당 재료는 최대 3개까지 선택하실 수 있습니다.',
  },
  BackEvent: {
    title: '뒤로 가기 경고',
    message: '뒤로 가기 시 데이터가 저장되지 않습니다. (홈으로 이동합니다)',
  },
  Login: {
    title: '로그인 확인',
    message: '로그인 이후 이용하실 수 있습니다.',
  },
};

export const ON_EVENT_TYPES = ['Delete', 'BackEvent'];
export const ON_CLOSE_TYPES = ['Login'];
export const MobileSize: number = 28;
export const DesktopSize: number = 34;
