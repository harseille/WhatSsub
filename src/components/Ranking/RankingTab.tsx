import { useCallback, memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { changeRem, buttonNone } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type 타입_타이틀_탭 = {
  id: string;
  타이틀: string;
};

function RankingTab() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const 현재탭: string = state || '맛잘알랭킹';

  const 탭_리스트: 타입_타이틀_탭[] = [
    { id: 'like__ranking__tab', 타이틀: '맛잘알랭킹' },
    { id: 'created__at__ranking__tab', 타이틀: '신규조합' },
  ];

  const 클릭핸들러_탭_변경 = useCallback(
    (title: string) => {
      navigate(`/best-combination/ranking?currentTab=${title}`, { state: title });
      console.log(state);
    },
    [navigate]
  );

  return (
    <TabGroup>
      {탭_리스트.map(({ id, 타이틀 }) => (
        <TitleTab key={id} className={현재탭 === 타이틀 ? 'on' : ''} onClick={클릭핸들러_탭_변경.bind(null, 타이틀)}>
          {타이틀}
        </TitleTab>
      ))}
    </TabGroup>
  );
}

export default memo(RankingTab);

const TabGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const TitleTab = styled.button`
  ${buttonNone}
  font-size: ${changeRem(20)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black6b};
  cursor: pointer;

  &.on {
    color: ${({ theme }) => theme.colors.black25};
  }

  ${mediaQuery} {
    font-size: ${changeRem(22)};
  }
`;
