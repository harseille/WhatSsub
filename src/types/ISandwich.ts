// Ingredient Button List
export interface 인터페이스_꿀조합선택페이지_속성 {
  id: string;
  이름: string;
}

export interface 인터페이스_꿀조합선택페이지_속성선택 {
  제목: string;
  속성목록: 인터페이스_꿀조합선택페이지_속성[];
  최대선택개수: number;
}

export interface 인터페이스_꿀조합선택페이지_필터 {
  [key: string]: string[];
}

interface 인터페이스_꿀조합_카테고리_속성 {
  id: string;
  카테고리명: string;
  글자색상: string;
  배경색상: string;
}

export interface 인터페이스_뱃지 {
  id: string;
  이름: string;
  꿀조합_카테고리_속성: 인터페이스_꿀조합_카테고리_속성;
}

// Ingredient
export interface 인터페이스_재료정보 {
  id: string;
  이름: string;
  카테고리: string;
  칼로리: string;
}

export interface 인터페이스_재료 {
  id?: string;
  이름: string;
  카테고리: string;
  칼로리?: string;
  추가재료여부: boolean;
  속성?: string;
  이미지?: string;
}

export interface 인터페이스_샌드위치뱃지리스트 {
  맛: string[];
  재료: string[];
  추가사항: string[];
}

// 꿀조합
export interface 인터페이스_꿀조합 {
  id: string;
  이름: string;
  작성자: string;
  작성일: string;
  좋아요: string;
  토스팅?: string;
  베이스샌드위치: string;
  이미지: string;
  칼로리: string;
  뱃지리스트: 인터페이스_샌드위치뱃지리스트;
  선택재료: 인터페이스_재료[];
}

export interface 인터페이스_꿀조합상세페이지_꿀조합 {
  작성자Id: string;
  작성자_이름: string;
  작성일: string;
  제목: string;
  좋아요: string;
  베이스샌드위치: string;
  칼로리: string;
  이미지: string;
  선택재료: 인터페이스_꿀조합_선택재료[];
  뱃지리스트: 인터페이스_샌드위치뱃지리스트;
}

export interface 인터페이스_꿀조합_선택재료 {
  이름: string;
  이미지?: string;
  속성?: string;
  칼로리?: string;
}

export interface 인터페이스_샌드위치 {
  id: string;
  이미지: string;
  이름: string;
  베이스샌드위치: string;
  칼로리: string;
  뱃지리스트: 인터페이스_샌드위치뱃지리스트;
}

export interface 인터페이스_재료목록 {
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
  목록: 인터페이스_재료목록[];
}
export interface 인터페이스_레시피 {
  이름: string;
  재료목록: string[];
  재료칼로리: string;
}

export interface 인터페이스_랜덤재료샌드위치 {
  이름: string;
  베이스샌드위치: string;
  빵: string;
  치즈: string;
  소스: string;
  칼로리: string;
  뱃지리스트: string[];
}
export interface 인터페이스_선택된_재료 extends 인터페이스_꿀조합_선택재료 {
  카테고리: string;
  id?: string;
}
