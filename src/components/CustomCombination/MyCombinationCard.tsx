/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState, forwardRef, ForwardedRef } from 'react';
import setFirebaseImgURL from '@services/Firebase/setFirebaseImgURL';
import Button from '@components/Common/UI/Button';
import { MODAL_TYPE_KEYS } from '@constants/CustomCombination/constants';
import recipe from '@data/recipe';
import danzziTrust from '@assets//images/danzzi/danzzi_trust.svg';
import deleteBtn from '@assets/icons/deleteBtn.png';
import styled from '@emotion/styled';
import mediaQuery from '@styles/media-queries';
import { changeRem } from '@styles/mixin';
import { 인터페이스_생성단계_꿀조합 } from '@typings/ISandwich';

type TProps = {
  userName: string | undefined | null;
  customCombination: 인터페이스_생성단계_꿀조합;
  changeModalType: (type: string) => void;
};

function MyCombinationCard(
  { userName, customCombination: 나만의_조합, changeModalType }: TProps,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  const [샌드위치이미지, 샌드위치이미지_수정] = useState('');

  useEffect(() => {
    샌드위치이미지_수정(
      setFirebaseImgURL(recipe.find(레시피 => 레시피.이름 === 나만의_조합.베이스샌드위치)?.이미지 as string)
    );
  }, [나만의_조합.베이스샌드위치]);

  const 클릭핸들러_나만의_조합_취소하기 = () => changeModalType(MODAL_TYPE_KEYS.Delete);

  return (
    <Container>
      <h2 tabIndex={0} className="sr-only">
        지금까지 선택한 재료를 모두에게 공유하는 나만의 조합 만들기 페이지입니다. 만드신 샌드위치의 이름을 정하고 나만의
        조합 만들기 버튼을 선택해 주세요.
      </h2>
      <Danzzi src={danzziTrust} alt="단찌 믿음 아이콘" />
      <Card className="card">
        <DeleteBtn onClick={클릭핸들러_나만의_조합_취소하기} aria-label="조합 삭제 버튼" type="button">
          <img src={deleteBtn} alt="삭제 아이콘" />
        </DeleteBtn>
        <Text>
          <UserName className="title">{userName}</UserName>
          <span>만의 조합 완성</span>
        </Text>
        <SubTitle>이 조합으로 세계정복!!</SubTitle>
        <CardContentWrap>
          <Img src={샌드위치이미지} alt="샌드위치 이미지" />
          <CardInputButtonWrap>
            <Input
              ref={inputRef}
              pattern=".{2,20}"
              required
              title="2 ~ 20 글자 이내로 제목을 정해주세요"
              type="text"
              placeholder="왔썹의 이름은..?"
            />
            <CreateCombinationButton
              designType="AccessibilityGreen"
              width="100%"
              padding="15px"
              fontSize="16px"
              fontWeight="700">
              나만의 조합 만들기
            </CreateCombinationButton>
          </CardInputButtonWrap>
        </CardContentWrap>
      </Card>
    </Container>
  );
}

export default forwardRef(MyCombinationCard);

const Container = styled.div`
  position: relative;
`;

const Card = styled.div`
  position: relative;
  margin: 152px auto 10px;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px 4px 5px 3px rgba(194, 194, 194, 0.5);

  ${mediaQuery} {
    margin: 160px auto 10px;
  }
`;

const Text = styled.div`
  text-align: center;
  & span {
    vertical-align: text-bottom;
    font-weight: 700;
    font-size: 20px;
  }
`;

const UserName = styled.h2`
  display: inline;
  color: #fab608;
  font-weight: 700;
  font-size: 24px;
  padding-right: 3px;
`;

const SubTitle = styled.p`
  font-weight: 400;
  text-align: center;
  color: #979797;
  margin: 0;
  padding-top: 4px;
`;

const CardContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;

  ${mediaQuery} {
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
  }
`;

const CardInputButtonWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 1vw 0;
  ${mediaQuery} {
    width: 100%;
  }
`;

const Img = styled.img`
  display: block;
  max-width: 62%;
  margin: 0 auto;
  min-width: ${changeRem(193)};
  min-height: ${changeRem(136)};
  ${mediaQuery} {
    max-width: 50%;
    min-height: ${changeRem(230)};
  }
`;

const Input = styled.input`
  display: block;
  border: none;
  border-radius: 6px;
  padding-left: 15px;
  background-color: #f5f5f5;
  width: 100%;
  height: ${changeRem(50)};
`;

const CreateCombinationButton = styled(Button)`
  display: none;
  width: 100%;

  ${mediaQuery} {
    display: block;
  }
`;

const Danzzi = styled.img`
  position: absolute;
  width: 200px;
  left: 50%;
  transform: translate(-50%);
  z-index: 0;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 20%;
  right: 7%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  width: 8%;
  height: 9%;
  border-radius: 5px;
  box-shadow: 0px 2px 3px #313030;
  cursor: pointer;
  ${mediaQuery} {
    top: 3%;
    right: 3%;
  }

  :active {
    box-shadow: none;
    margin-top: 3px;
  }

  & img {
    max-width: 90%;
    vertical-align: middle;
    width: initial;
    filter: drop-shadow(1px 3px 1px #1f1f1f);
  }
`;
