import { 인터페이스_꿀조합 } from '@typings/ISandwich';
import LikeCard from './LikeCard';

type TProps = {
  likeCombination: 인터페이스_꿀조합[] | undefined;
};

function LikeCombinationList({ likeCombination }: TProps) {
  const 좋아요_내림차순_꿀조합_목록 = (이전_꿀조합: 인터페이스_꿀조합, 다음_꿀조합: 인터페이스_꿀조합): number =>
    +다음_꿀조합.좋아요 - +이전_꿀조합.좋아요;

  return (
    <ul>
      {likeCombination?.sort(좋아요_내림차순_꿀조합_목록).map(sandwich => (
        <LikeCard
          key={sandwich.꿀조합제목}
          id={sandwich.id}
          imgUrl={`/best-combination/${sandwich.id}`}
          sandwich={sandwich}
        />
      ))}
    </ul>
  );
}

export default LikeCombinationList;
