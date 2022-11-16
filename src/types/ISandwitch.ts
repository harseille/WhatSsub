// Ingredient Button List
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

interface 인터페이스_샌드위치뱃지리스트 {
  id: string;
  가이드?: string;
  뱃지리스트: 인터페이스_뱃지[];
}

// Ingredient
export interface 인터페이스_재료 {
  id: string;
  이름: string;
  카테고리: string;
  칼로리: string;
  추가재료여부: boolean;
  맛속성?: string;
  재료사진?: string;
}

export interface 샌드위치뱃지리스트 {
  맛: string[];
  메인재료: string[];
  추가사항: string[];
}

// 꿀조합
export interface 인터페이스_꿀조합 {
  id: string;
  제목: string;
  작성자: string;
  작성일: string;
  좋아요: string;
  베이스샌드위치: string;
  이미지: string;
  칼로리: string;
  뱃지리스트: 샌드위치뱃지리스트;
  선택재료: 인터페이스_재료[];
}

export interface 인터페이스_샌드위치 {
  이미지: string;
  이름: string;
  베이스샌드위치: string;
  칼로리: string;
  뱃지리스트: 샌드위치뱃지리스트;
}

interface 인터페이스_선택재료 {
  빵: string;
  치즈: string;
  야채: string[];
  소스: string[];
  추가재료?: string[];
}

interface 인터페이스_리뷰프로퍼티 {
  작성자: string;
  프로필이미지: string;
  등록날짜: string;
  본문: string;
}

interface 인터페이스_메뉴 {
  메뉴명: string;
  이동링크: string;
  아이콘: any;
  아이콘설명: string;
}
