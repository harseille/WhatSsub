import { useNavigate } from 'react-router-dom';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { 인터페이스_꿀조합선택페이지_필터 } from '@typings/ISandwich';

function NavigateListPageButton({ filteredAttr }: { filteredAttr: 인터페이스_꿀조합선택페이지_필터 }) {
  const navigate = useNavigate();
  const attr = Object.values(filteredAttr).flat();

  const 꿀조합_목록_페이지로_이동하기 = () => {
    navigate('/best-combination', { state: attr });
  };

  return (
    <ButtonWrap>
      <Button
        onClick={꿀조합_목록_페이지로_이동하기}
        designType="primaryGreen"
        // width="100%"
        minWidth={changeRem(330)}
        height={changeRem(50)}>
        꿀 조합 보러가기
      </Button>
    </ButtonWrap>
  );
}

export default NavigateListPageButton;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 100px;
`;
