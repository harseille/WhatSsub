import { createPortal } from 'react-dom';
import Button from '@components/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import { useEffect, useRef } from 'react';

type TProps = {
  title: string;
  message: string;
  onClose: () => void;
  onEvent: () => void;
  isConfirm: string;
};

function Backdrop({ onClose }: { onClose: () => void }) {
  return <BackdropWrap onClick={onClose} />;
}

function ModalOverlay({ title, message, onEvent, onClose, isConfirm }: TProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return (
    <ModalWrap>
      <Header>
        <h2>{title}</h2>
      </Header>
      <Content>
        <p>{message}</p>
      </Content>
      <ButtonWrap>
        {isConfirm && (
          <Button
            ref={isConfirm && buttonRef}
            onClick={onEvent}
            designType="primaryGreen"
            width={changeRem(80)}
            height={changeRem(40)}
            borderRadius="8px">
            {isConfirm}
          </Button>
        )}
        <Button
          ref={!isConfirm ? buttonRef : null}
          onClick={onClose}
          designType={!isConfirm ? 'primaryGreen' : 'normal'}
          width={changeRem(80)}
          height={changeRem(40)}
          borderRadius="8px">
          {!isConfirm ? '확인' : '취소'}
        </Button>
      </ButtonWrap>
    </ModalWrap>
  );
}

function Modal({ title, message, onClose, onEvent, isConfirm }: TProps) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root')!)}
      {createPortal(
        <ModalOverlay title={title} message={message} onClose={onClose} onEvent={onEvent} isConfirm={isConfirm} />,
        document.getElementById('modal-root')!
      )}
    </>
  );
}

Modal.defaultProps = {
  title: '',
  isConfirm: '',
  onEvent: () => {},
};

export default Modal;

const BackdropWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const ModalWrap = styled.div`
  position: fixed;
  margin: 0 auto;
  top: 10%;
  left: 0;
  right: 0;
  max-width: 40%;
  min-width: ${changeRem(200)};
  z-index: 100;
  overflow: hidden;
  background: #fff;
  border-radius: 12px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
`;

const Header = styled.header`
  background: ${props => props.theme.colors.primaryYellow};
  padding: 16px 32px;
  min-height: 50px;

  & h2 {
    font-size: 16px;
    color: white;
  }
`;

const Content = styled.div`
  padding: 20px 32px;
`;

const ButtonWrap = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 4px;
`;
