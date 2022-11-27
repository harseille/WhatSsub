import React from 'react';
import { Link } from 'react-router-dom';
import SandwichInfo from '@components/Sandwich/SandwichInfo';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import deleteBtn from '@assets/icons/deleteBtn.png';
import { 인터페이스_꿀조합_아이디 } from '@pages/MyPagePage';

type TProps = {
  userCombination: 인터페이스_꿀조합_아이디[] | null;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

function UserCombinatonList({ userCombination, onClick }: TProps) {
  return (
    <ul>
      {userCombination?.map(sandwich => (
        <Card key={sandwich.꿀조합제목} id={sandwich.id}>
          <EditListBtn onClick={onClick}>
            <img className="close-btn" src={deleteBtn} alt="닫기 버튼" />
          </EditListBtn>
          <Link to={`/best-combination/${sandwich.id}`}>
            <SandwichInfo sandwich={sandwich} />
          </Link>
        </Card>
      ))}
    </ul>
  );
}

export default UserCombinatonList;

const Card = styled.li`
  box-sizing: border-box;
  padding: 20px 35px;
  /* width: ${changeRem(370)}; */
  width: 100%;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
  position: relative;

  &.delete {
    background: #e4e4e4;
  }
`;

const EditListBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 15px;
  border: none;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
  .close-btn {
    filter: opacity(0.5) drop-shadow(0 0 0 #505050);
    &:hover {
      filter: opacity(0.5) drop-shadow(0 0 0 #0b0b0b);
    }
  }
`;
