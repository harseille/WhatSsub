// * Ingredient Badge List
export interface 인터페이스_꿀조합선택페이지_속성 {
  id: string;
  이름: string;
}

export interface 인터페이스_꿀조합선택페이지_속성선택 {
  이름: string;
  속성목록: 인터페이스_꿀조합선택페이지_속성[];
  최대선택개수: number;
}
export interface 인터페이스_샌드위치뱃지리스트 {
  맛: string[];
  재료: string[];
  추가사항: string[];
}

export interface 인터페이스_꿀조합선택페이지_필터 {
  [key: string]: string[];
}

// Ingredient

// 인터페이스_재료목록 , 인터페이스_꿀조합_선택재료 => 인터페이스_꿀조합_재료
export interface 인터페이스_꿀조합_재료 {
  이름: string;
  이미지?: string;
  속성?: string;
  칼로리?: string;
}

export interface 인터페이스_재료데이터 {
  카테고리: string;
  배경색?: string;
  글자색?: string;
  속성유무?: boolean;
  목록: 인터페이스_꿀조합_재료[];
}
export interface 인터페이스_재료정보 {
  id: string;
  이름: string | string[];
  카테고리: string;
  칼로리: string;
}

export type 인터페이스_메인재료 = 인터페이스_꿀조합_재료;

export interface 인터페이스_재료 {
  id?: string;
  이름: string;
  카테고리: string;
  칼로리?: string;
  추가재료여부: boolean;
  속성?: string;
  이미지?: string;
}

// 꿀조합
export interface 인터페이스_샌드위치 {
  id?: string;
  꿀조합제목: string;
  이미지: string;
  베이스샌드위치: string;
  칼로리: string;
  뱃지리스트: string[];
}

export interface 인터페이스_꿀조합 extends 인터페이스_샌드위치 {
  작성자id: string;
  작성자: string;
  작성일: string;
  좋아요: string;
  선택재료: 인터페이스_재료[];
  토스팅?: string;
}

export interface 인터페이스_레시피 {
  이름: string;
  재료목록: string[];
  재료칼로리: string;
}

export interface 인터페이스_랜덤재료샌드위치 {
  꿀조합제목: string;
  베이스샌드위치: string;
  빵: string;
  치즈: string;
  소스: string[];
  칼로리: string;
  이미지: string;
  id: string;
}
export interface 인터페이스_선택된_재료 extends 인터페이스_꿀조합_재료 {
  카테고리: string;
  id?: string;
}

export interface 인터페이스_꿀조합_랜덤칼로리포함 extends 인터페이스_재료데이터 {
  칼로리: string;
  이름: string;
}
export interface 인터페이스_꿀조합_랜덤 extends 인터페이스_랜덤재료샌드위치 {
  속성: string;
}
export interface 인터페이스_꿀조합_랜덤2 extends 인터페이스_랜덤재료샌드위치 {
  속성: string[];
}
// 보내주려는 샌드위치 데이터
