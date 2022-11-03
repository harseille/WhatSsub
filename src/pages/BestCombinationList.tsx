import SandwitchInfoCard from '@components/SandwitchInfoCard';
import styled from '@emotion/styled';
import cryingDanji from '@assets/images/cryingDanji.png';
import Button from '@components/UI/Button';
import { changeRem } from '../styles/mixin';

function BestCombinationListPage() {
  if (true) {
    return (
      <Container>
        <Title>꿀조합 찾기 실패</Title>
        <ImgWrap>
          <img src={cryingDanji} alt="cryingDanji" />
        </ImgWrap>
        <Desc>검색하신 샌드위치를 찾을 수 없습니다.</Desc>
        <Desc>꿀 조합을 다시 선택해주세요.</Desc>
        <Button designType="primaryYellow" width={changeRem(330)} height={changeRem(50)} marginTop="40px">
          다시 찾기
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <ul>
        <SandwitchInfoCard />
        <SandwitchInfoCard />
        <SandwitchInfoCard />
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
  background: url(cryingDanji) no-repeat center;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const ImgWrap = styled.div`
  max-width: 250px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.p`
  padding-top: 60px;
  font-weight: 700;
  font-size: 24px;
`;

const Desc = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
  color: rgb(65, 65, 65);
`;

export default BestCombinationListPage;
