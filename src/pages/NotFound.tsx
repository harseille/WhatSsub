import Wrapper from '@components/Common/UI/Wrapper';
import styled from '@emotion/styled';
import danzziSpeechLess from '@assets/images/danzzi/danzzi_speechless.png';
import danzziQM from '@assets/images/danzzi/danzzi_QM.png';
import { changeRem, flexbox } from '@styles/mixin';
import { useLocation } from 'react-router-dom';
import theme from '@styles/theme';

function NotFound() {
  const location = useLocation();
  const isBestCombinationPage = location.pathname.startsWith('/best-combination/');

  return (
    <Wrapper>
      <Header>
        <Title>404</Title>
        {isBestCombinationPage ? (
          <SubTitle>꿀조합을 찾을 수 없습니다.</SubTitle>
        ) : (
          <SubTitle>페이지를 찾을 수 없습니다.</SubTitle>
        )}
      </Header>
      <PageContainer>
        {isBestCombinationPage ? (
          <Danzzi src={danzziSpeechLess} alt="할 말을 잃은 단찌" />
        ) : (
          <Danzzi src={danzziQM} alt="물음표 단찌" />
        )}
      </PageContainer>
    </Wrapper>
  );
}

export default NotFound;

const Header = styled.div`
  ${flexbox('column', 'center', 'center')}
`;

const Title = styled.h1`
  font-size: ${changeRem(60)};
  font-weight: 700;
  margin-top: ${changeRem(80)};
  color: ${theme.colors.gray87};
`;

const SubTitle = styled.h2`
  font-size: ${changeRem(30)};
  margin-top: ${changeRem(40)};
`;

const PageContainer = styled.div`
  ${flexbox('column', 'center', 'center')}
`;

const Danzzi = styled.img`
  max-width: ${changeRem(600)};
`;
