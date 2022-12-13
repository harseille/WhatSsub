import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/Common/UI/Modal';
import { MODAL_TYPE_KEYS, MODAL_TYPE, ON_EVENT_TYPES, ON_CLOSE_TYPES } from '@constants/CustomCombination/constants';

type TProps = {
  type: string;
  closeModal: () => void;
};

function CustomPageModal({ type, closeModal }: TProps) {
  const navigate = useNavigate();

  if (type === MODAL_TYPE_KEYS.none) return null;

  const onEventHandler = () => window.history.go(-2);
  const navigateLoginPage = () => navigate('/login');

  return (
    <Modal
      title={MODAL_TYPE[type].title}
      message={MODAL_TYPE[type].message}
      onClose={ON_CLOSE_TYPES.includes(type) ? navigateLoginPage : closeModal}
      cancelButtonDesignType={ON_EVENT_TYPES.includes(type) ? 'normal' : 'primaryGreen'}
      isConfirm={ON_EVENT_TYPES.includes(type) ? '확인' : ''}
      onEvent={ON_EVENT_TYPES.includes(type) ? onEventHandler : () => {}}
    />
  );
}
export default memo(CustomPageModal);
