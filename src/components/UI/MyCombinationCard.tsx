import styled from '@emotion/styled';
import SandwichBL from '@assets/images/sandwich_B.L.png';
import BelieverDanji from '@assets/images/believerDanji.png';
import { changeRem } from '../../styles/mixin';

function MyCombinationCard() {
  return (
    <Container>
      <Danji src={BelieverDanji} alt="believer-danji" />
      <Card className="card">
        <div className="text">
          <Text>
            <UserName className="title">단찌</UserName>
            <span>만의 조합 완성</span>
          </Text>
          <SubTitle>맛있게 먹기 전에!</SubTitle>
        </div>
        <Img src={SandwichBL} alt="샌드위치 이미지" />
        <Input type="text" placeholder="왓썹의 이름은..?" />
      </Card>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  /* margin-top: 150px; */
`;

const Card = styled.div`
  position: relative;
  top: 200px;
  margin: 0 auto;
  width: ${changeRem(370)};
  height: ${changeRem(371)};
  border-radius: 15px;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
`;

const UserName = styled.h2`
  display: inline;
  color: #fab608;
  font-weight: 700;
  font-size: 24px;
  padding-right: 3px;
`;
const Text = styled.div`
  text-align: center;
  padding-top: 25px;
  & span {
    font-weight: 700;
    font-size: 20px;
  }
`;
const SubTitle = styled.p`
  font-weight: 400;
  text-align: center;
  color: #979797;
  margin: 0;
  padding-top: 5px;
`;

const Img = styled.img`
  position: absolute;
  top: 48px;
  left: -4px;
  text-align: center;
`;

const Input = styled.input`
  position: absolute;
  bottom: 22px;
  left: 6px;
  border: none;
  border-radius: 6px;
  padding-left: 15px;
  background-color: #f5f5f5;
  width: ${changeRem(340)};
  height: ${changeRem(50)};
`;

// 단지 위치 좀 도와조..
const Danji = styled.img`
  position: absolute;
  top: 70px;
  left: 45%;
`;
export default MyCombinationCard;

// Container -> position: relative
// BelieverDanji -> position: absolute

// Card -> position: relative
// Img -> position: absolute
// Input -> position: absolute

// card를 relative로, 이미지가 png라 투명 영역이 차지하는 부분 때문에 absolute로 조절
// Input도 이미지 투명 영역 떄문에 absolute
