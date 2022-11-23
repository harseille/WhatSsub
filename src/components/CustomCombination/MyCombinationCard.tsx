import Button from '@components/UI/Button';

import SandwichBL from '@assets/images/sandwich_B.L.png';
import danzziTrust from '@assets//images/danzzi/danzzi_trust.svg';
import deleteBtn from '@assets/icons/deleteBtn.png';

import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem } from '@styles/mixin';

function MyCombinationCard() {
  return (
    <Container>
      <Danzzi src={danzziTrust} alt="단찌 믿음 아이콘" />
      <Card className="card">
        <DeleteBtn type="button">
          <img src={deleteBtn} alt="조합 삭제 버튼" />
        </DeleteBtn>
        <Text>
          <UserName className="title">단찌</UserName>
          <span>만의 조합 완성</span>
        </Text>
        <SubTitle>이 조합으로 세계정복!!</SubTitle>
        <CardContentWrap>
          <Img src={SandwichBL} alt="샌드위치 이미지" />
          <CardInputButtonWrap>
            <Input type="text" placeholder="왓썹의 이름은..?" />
            <CreateCombinationButton
              designType="primaryGreen"
              width="100%"
              padding="15px"
              fontSize="16px"
              fontWeight="700">
              나만의 조합 만들기
            </CreateCombinationButton>
          </CardInputButtonWrap>
        </CardContentWrap>
      </Card>
    </Container>
  );
}

export default MyCombinationCard;

const Container = styled.div`
  position: relative;
`;

const Card = styled.div`
  position: relative;
  margin: 152px auto 10px;
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);

  ${mediaQuery} {
    margin: 160px auto 10px;
  }
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

const CardContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  ${mediaQuery} {
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
  }
`;

const CardInputButtonWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 1vw 0;
  ${mediaQuery} {
    width: 100%;
  }
`;

const Img = styled.img`
  display: block;
  margin: 4vw auto;
  max-width: 66%;
`;

const Input = styled.input`
  display: block;
  border: none;
  border-radius: 6px;
  padding-left: 15px;
  background-color: #f5f5f5;
  width: 100%;
  height: ${changeRem(50)};
`;

const CreateCombinationButton = styled(Button)`
  display: none;
  width: 100%;

  ${mediaQuery} {
    display: block;
  }
`;

const Danzzi = styled.img`
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translate(-50%);
  z-index: 0;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 3%;
  right: 3%;
  border: none;
  background-color: ${props => props.theme.colors.primaryGreen};
  width: 9%;
  height: 10%;
  border-radius: 5px;
  box-shadow: 0px 2px 3px #313030;
  cursor: pointer;
  ${mediaQuery} {
    top: 3%;
    right: 1%;
  }

  :active {
    box-shadow: none;
    margin-top: 3px;
  }

  & img {
    max-width: 100%;
    vertical-align: middle;
    width: initial;
    filter: drop-shadow(1px 3px 1px #1f1f1f);
  }
`;