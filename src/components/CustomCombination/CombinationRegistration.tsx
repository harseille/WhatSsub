import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState } from '@state/index';
import postCustom from '@services/customCombination/postCustom';
import MyCombinationCard from '@components/CustomCombination/MyCombinationCard';
import Button from '@components/Common/UI/Button';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { flexbox } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

type TProps = {
  customCombination: 인터페이스_생성단계_꿀조합;
  changeModalType: (type: string) => void;
};

function CombinationRegistration(props: TProps) {
  const { customCombination, changeModalType } = props;
  const user = useRecoilValue(userState);
  const userInfo = { id: user?.uid, name: user?.displayName };
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const 클릭핸드러_나만의_조합_등록하기 = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value.trim()) {
      (inputRef.current as HTMLInputElement).value = '';
      return changeModalType('TitleCheck');
    }

    const 조합_등록 = await postCustom({ customCombination, value: inputRef.current.value, userInfo });
    navigate(`/best-combination/${조합_등록?.id}`);
  };

  return (
    <CustomForm onSubmit={클릭핸드러_나만의_조합_등록하기}>
      <MyCombinationCard
        userName={user?.displayName}
        ref={inputRef}
        customCombination={customCombination}
        changeModalType={changeModalType}
      />
      <CreateCombinationButton
        designType="AccessibilityGreen"
        width="100%"
        padding="15px"
        fontSize="16px"
        fontWeight="700">
        나만의 조합 만들기
      </CreateCombinationButton>
    </CustomForm>
  );
}

export default CombinationRegistration;

const CustomForm = styled.form`
  ${flexbox('column', 'space-between')}
  flex-grow: 1;
`;

const CreateCombinationButton = styled(Button)`
  ${mediaQuery} {
    display: none;
  }
`;
