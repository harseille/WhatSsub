import { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { changeRem, buttonNone } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type TProps = {
  currentTab: string;
  onClick: (title: string, e: MouseEvent<HTMLButtonElement>) => void;
};

function RankingTab({ currentTab: 현재탭, onClick: 클릭핸들러_탭_변경 }: TProps) {
  const tabList: string[] = ['맛잘알랭킹', '신규조합'];

  return (
    <TabGroup>
      {tabList.map(title => (
        // eslint-disable-next-line react/jsx-no-bind
        <TitleTab className={현재탭 === title ? 'on' : ''} onClick={클릭핸들러_탭_변경.bind(null, title)}>
          {title}
        </TitleTab>
      ))}
    </TabGroup>
  );
}

export default RankingTab;

const TabGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const TitleTab = styled.button`
  ${buttonNone}
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: #6b6b6b;
  cursor: pointer;

  &.on {
    color: #252525;
  }

  ${mediaQuery} {
    font-size: ${changeRem(22)};
  }
`;
