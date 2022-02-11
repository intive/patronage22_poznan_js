import { openModal } from 'actions/app';

export const Button = () => {
  return (
    <button
      onClick={() => {
        openModal('Hello World Payload');
      }}
    >
      Open Modal
    </button>
  );
};
