import useScrollTop from '@hooks/useScrollTop';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';

function Top() {
  const { scrollToTop } = useScrollTop();

  return (
    <TopWrap>
      <TopBtn onClick={scrollToTop} aria-label="최상단 이동 버튼">
        TOP
      </TopBtn>
    </TopWrap>
  );
}
export default Top;

const TopWrap = styled.div`
  position: fixed;
  right: 10px;
  bottom: 90px;
  z-index: 100;

  ${mediaQuery} {
    right: 30px;
    bottom: 30px;
  }
`;

const TopBtn = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 12px 8px;
  background-color: #181818;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    color: ${({ theme }) => theme.colors.primaryGreen};
    background-color: ${({ theme }) => theme.colors.primaryYellow};
  }

  ${mediaQuery} {
    font-size: 15px;
    padding: 15px 10px;
  }
`;
