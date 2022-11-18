import styled from '@emotion/styled';
import useScrollTop from '../../../hooks/useScrollTop';

function Top() {
  const { scrollToTop } = useScrollTop();

  return (
    <TopWrap>
      <TopBtn onClick={scrollToTop}>Top</TopBtn>
    </TopWrap>
  );
}
export default Top;

const TopWrap = styled.div`
  position: fixed;
  right: 4%;
  bottom: 15%;
  z-index: 100;
`;

const TopBtn = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: #000;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primaryGreen};
    background-color: ${props => props.theme.colors.primaryYellow};
  }
`;
