import Like from '@components/Common/Button/Like';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem, flexbox } from '@styles/mixin';

type Tprops = {
  author: string;
  like: number;
};

function HeaderContiner({ author, like }: Tprops) {
  return (
    <Header>
      <h1>
        <span>{author}</span> 만의 조합
      </h1>
      <Like count={like} />
    </Header>
  );
}

export default HeaderContiner;

const Header = styled.div`
  ${flexbox('row', 'space-between', 'center')}
  height: 48px;
  background: #fff;
  position: relative;
  padding: 0px 32px 0px 32px;
  & h1 {
    font-weight: 700;
    font-size: ${changeRem(20)};

    & span {
      color: ${props => props.theme.colors.primaryYellow};
      font-size: ${changeRem(24)};
    }
  }
  ${mediaQuery} {
    height: ${changeRem(72)};
    padding: 0px 48px 0px 48px;
    & h1 {
      font-size: ${changeRem(28)};

      & span {
        color: ${props => props.theme.colors.primaryYellow};
        font-size: ${changeRem(36)};
      }
    }
  }
`;
