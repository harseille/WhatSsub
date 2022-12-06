import { memo } from 'react';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import getTimePassedBy from '@utils/getTimePassedBy';
import { 인터페이스_댓글_읽기 } from '@typings/IComment';

function CommentItem(props: { comment: 인터페이스_댓글_읽기 }) {
  const {
    comment: { author, authorProfileImg, content, createdAt },
  } = props;
  return (
    <Wrapper>
      <UserInfoWrapper>
        <Profile>{authorProfileImg && <ProfileImg src={authorProfileImg} aria-label={author!} />}</Profile>
        <UserName>{author}</UserName>
        <CreatedTime>{getTimePassedBy(createdAt)}</CreatedTime>
      </UserInfoWrapper>
      <Comment>{content}</Comment>
    </Wrapper>
  );
}

export default memo(CommentItem);

const Wrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 16px;
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

const Profile = styled.div`
  float: left;
  margin-right: 8px;
  background: #ccc;
  border-radius: 50%;
  width: ${changeRem(40)};
  height: ${changeRem(40)};
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: ${changeRem(40)};
  height: ${changeRem(40)};
`;

const UserName = styled.div`
  float: left;
  width: ${`calc(100% - ${changeRem(48)})`};
  margin: 2px 0;
  font-size: ${changeRem(16)};
  font-weight: bold;
  line-height: 1.25;
`;

const CreatedTime = styled.span`
  float: left;
  width: ${`calc(100% - ${changeRem(48)})`};
  font-size: ${changeRem(12)};
  line-height: 1.25;
  color: #979797;
`;

const Comment = styled.div`
  font-size: ${changeRem(16)};
  line-height: 1.25;
`;
