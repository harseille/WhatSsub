import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button, { TDesignType } from '@components/Common/UI/Button';
import styled from '@emotion/styled';
import { changeRem } from '@styles/mixin';
import mediaQuery from '@styles/media-queries';

type TProps = {
  title: string;
  message: string;
  onClose: () => void;
  onEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isConfirm: string;
  eventButtonDesignType?: TDesignType;
  cancelButtonDesignType?: TDesignType;
};

export function Backdrop({ onClose }: { onClose: () => void }) {
  return <BackdropWrap onClick={onClose} />;
}

function ModalOverlay({
  title,
  message,
  onEvent,
  onClose,
  isConfirm,
  eventButtonDesignType,
  cancelButtonDesignType,
}: TProps) {
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
            designType={eventButtonDesignType}
            width={changeRem(80)}
            height={changeRem(40)}
            borderRadius="8px">
            {isConfirm}
          </Button>
        )}
        <ModalButton
          ref={!isConfirm ? buttonRef : null}
          onClick={onClose}
          designType={cancelButtonDesignType}
          className={isConfirm ? 'cancel' : ''}
          width={changeRem(80)}
          height={changeRem(40)}
          borderRadius="8px">
          {!isConfirm ? '확인' : '취소'}
        </ModalButton>
      </ButtonWrap>
    </ModalWrap>
  );
}

function Modal({ title, message, onClose, onEvent, isConfirm, eventButtonDesignType, cancelButtonDesignType }: TProps) {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, document.getElementById('backdrop-root')!)}
      {createPortal(
        <ModalOverlay
          title={title}
          message={message}
          onClose={onClose}
          onEvent={onEvent}
          isConfirm={isConfirm}
          eventButtonDesignType={eventButtonDesignType}
          cancelButtonDesignType={cancelButtonDesignType}
        />,
        document.getElementById('modal-root')!
      )}
    </>
  );
}

Modal.defaultProps = {
  title: '',
  isConfirm: '',
  onEvent: () => {},
  eventButtonDesignType: 'primaryGreen',
  cancelButtonDesignType: 'normal',
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
  top: 40%;
  left: 0;
  right: 0;
  width: 60%;
  min-width: ${changeRem(360)};
  z-index: 100;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);

  ${mediaQuery} {
    top: 10%;
    max-width: 600px;
  }

  button:hover {
    background: ${props => props.theme.colors.primaryYellow};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Header = styled.header`
  background: ${props => props.theme.colors.primaryYellow};
  padding: 16px 32px;
  min-height: 50px;

  & h2 {
    font-size: 20px;
    color: white;
    text-align: center;
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

const ModalButton = styled(Button)`
  &.cancel:hover {
    background-color: ${props => props.theme.colors.gray87};
  }
`;
