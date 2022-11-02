import styled from '@emotion/styled';
import { changeRem } from '../styles/mixin';

interface commentProps {
  user: string;
  profile: string;
  createdAt: string;
  review: string;
}

const comment: commentProps = {
  user: 'test',
  profile: '아마 경로',
  createdAt: '2시간',
  review: '고소~고소~ 짭짤~짭짤~ 매워~매워~',
};

function CommentItem() {
  return (
    <Wrapper>
      <UserInfoWrapper>
        <ProfileImg />
        <UserName>{comment.user}</UserName>
        <CreatedTime>{comment.createdAt}</CreatedTime>
      </UserInfoWrapper>
      <Comment>{comment.review}</Comment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const UserInfoWrapper = styled.div`
  margin-bottom: 20px;

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

const ProfileImg = styled.div`
  float: left;
  width: ${changeRem(40)};
  height: ${changeRem(40)};
  border-radius: 50%;
  background: #ccc;
`;

const UserName = styled.div`
  float: left;
  width: ${`calc(100% - ${changeRem(40)})`};
  font-size: ${changeRem(16)};
  font-weight: bold;
  line-height: 1.25;
`;

const CreatedTime = styled.span`
  float: left;
  width: ${`calc(100% - ${changeRem(40)})`};
  font-size: ${changeRem(12)};
  line-height: 1.25;
  color: #979797;
`;

const Comment = styled.div`
  font-size: ${changeRem(14)};
  line-height: 1.25;
`;

export default CommentItem;
