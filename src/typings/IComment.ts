export interface 인터페이스_댓글_추가 {
  꿀조합id: string;
  작성자id: string;
  작성자이름: string | null;
  작성자프로필이미지: string | null;
  작성일?: number;
  내용: string;
}
export interface 인터페이스_댓글_읽기 {
  댓글id: string;
  bestCombinationId: string;
  authorId: string;
  author: string | null;
  authorProfileImg: string | null;
  createdAt: number;
  content: string;
}
