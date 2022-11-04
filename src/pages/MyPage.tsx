import SandwitchInfo from '@components/SandwitchInfo';
import styled from '@emotion/styled';
// import { sandwitch } from '@components/SandwitchInfoCard';
import { sandwitch } from '@components/SandwitchInfoCard';
import Wrapper from '@components/UI/Wrapper';
import { changeRem } from '../styles/mixin';

function MyPage() {
  return (
    <Wrapper>
      <Content>
        <Title>
          <UserName className="title">단찌</UserName>
          <span>만의 조합</span>
        </Title>
        <span className="sub-title">좋아요 꿀조합</span>
        <Card>
          <SandwitchInfo sandwitch={sandwitch} />
        </Card>

        <Card>
          <SandwitchInfo sandwitch={sandwitch} />
        </Card>
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  width: 380px;
  margin: 30px auto 0;
  & .sub-title {
    color: #979797;
    font-weight: 700;
  }
`;

const Title = styled.span`
  text-align: left;
  padding: 25px 15px 0 0;
  & span {
    font-weight: 700;
    font-size: 20px;
  }
`;
const UserName = styled.h2`
  display: inline;
  color: #fab608;
  font-weight: 700;
  font-size: 24px;
  padding-right: 3px;
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 20px 35px;
  width: ${changeRem(370)};
  height: ${changeRem(286)};
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);
  border-radius: 15px;
  /* margin-bottom: 10px; */
  margin: 20px 0 10px;
`;

export default MyPage;
