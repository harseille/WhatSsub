import { useNavigate } from 'react-router-dom';

import Modal from '@components/UI/Modal';

type TProps = {
  type: string;
  closeModal: () => void;
};

type TModal = {
  [key: string]: {
    title: string;
    message: string;
  };
};

const MODAL_TYPE: TModal = {
  Required: {
    title: '필수 재료 중 선택되지 않은 재료가 있습니다.',
    message: '카테고리에 별표가 있는 재료는 필수 선택 재료입니다. 필수 선택 재료를 선택 후 진행해 주세요.',
  },
  TitleCheck: {
    title: '샌드위치 이름을 정해주세요.',
    message: '샌드위치 이름을 정해주셔야 꿀 조합으로 등록할 수 있습니다.',
  },
  Delete: {
    title: '나만의 조합 등록을 취소합니다.',
    message: '확인을 누르시면 조합을 등록하지 않고 홈으로 이동합니다.',
  },
  Limited: {
    title: '선택 가능 개수를 초과했습니다.',
    message: '해당 재료는 최대 3개까지 선택하실 수 있습니다.',
  },
  BackEvent: {
    title: '뒤로 가기 경고',
    message: '뒤로 가기 시 데이터가 저장되지 않습니다. (홈으로 이동합니다)',
  },
  Login: {
    title: '로그인 확인',
    message: '로그인 이후 이용하실 수 있습니다.',
  },
};

const ON_EVENT_TYPES = ['Delete', 'BackEvent'];
const ON_CLOSE_TYPES = ['Login'];

function CustomPageModal(props: TProps) {
  const navigate = useNavigate();
  const { type, closeModal } = props;

  if (type === 'none') return null;

  const onEventHandler = () => navigate('/');
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
export default CustomPageModal;
