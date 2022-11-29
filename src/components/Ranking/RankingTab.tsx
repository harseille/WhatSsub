import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { changeRem, buttonNone } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type TProps = {
  currentTab: string;
  onClick: (title: string, e: MouseEvent<HTMLButtonElement>) => void;
};

type 타입_타이틀_탭 = {
  id: string;
  타이틀: string;
};

function RankingTab({ currentTab: 현재탭, onClick: 클릭핸들러_탭_변경 }: TProps) {
  const 탭_리스트: 타입_타이틀_탭[] = [
    { id: 'like__ranking__tab', 타이틀: '맛잘알랭킹' },
    { id: 'created__at__ranking__tab', 타이틀: '신규조합' },
  ];

  return (
    <TabGroup>
      {탭_리스트.map(({ id, 타이틀 }, i) => (
        <TitleTab
          key={id}
          className={현재탭 === 타이틀 ? 'on' : ''}
          // eslint-disable-next-line react/jsx-no-bind
          onClick={클릭핸들러_탭_변경.bind(null, 타이틀)}>
          {타이틀}
        </TitleTab>
      ))}
    </TabGroup>
  );
}

export default React.memo(RankingTab);

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
