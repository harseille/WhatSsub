import { Link } from 'react-router-dom';
import LikeRedBtn from '@components/Common/Button/LikeRed';
import SandwichInfo from '@components/Common/SandwichInfo';
import styled from '@emotion/styled';
import { 인터페이스_꿀조합 } from '@typings/ISandwich';

type TProps = {
  likeCombination: 인터페이스_꿀조합[] | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteList: string[];
};

function LikeCombinationList({ likeCombination, onClick, deleteList }: TProps) {
  const 좋아요_내림차순_꿀조합_목록 = (prev: 인터페이스_꿀조합, next: 인터페이스_꿀조합): number =>
    +next.좋아요 - +prev.좋아요;

  return (
    <ul>
      {likeCombination?.sort(좋아요_내림차순_꿀조합_목록).map(sandwich => (
        <Card className={deleteList.includes(sandwich.id) ? 'delete' : ''} key={sandwich.꿀조합제목} id={sandwich.id}>
          <LikeRedBtn onClick={onClick} isLiked={!deleteList.includes(sandwich.id)} />
          <Link to={`/best-combination/${sandwich.id}`}>
            <SandwichInfo sandwich={sandwich} />
          </Link>
        </Card>
      ))}
    </ul>
  );
}

export default LikeCombinationList;

const Card = styled.li`
  box-sizing: border-box;
  padding: 20px 35px;
  width: 100%;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  margin: 20px auto 0;
  position: relative;

  &.delete {
    background: #e4e4e4;
  }
`;
