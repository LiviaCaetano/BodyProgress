import { Button } from '../../ui/components/Button';
import { Modal } from '../../ui/components/Modal';
import './styles.scss';

type ConfirmModalProps = {
  title: string;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({ onConfirm, onCancel, text, title }: ConfirmModalProps) => {
  return <Modal.Root>
    <Modal.Header title={title} onClose={() => onCancel()} />
    <Modal.Body>
      <div className="confirm-modal">
        <p>{text}</p>
      </div>
    </Modal.Body>
    <Modal.Actions>
      <div className="confirm-modal-actions">
        <Button text='Confirmar' variant='primary' onClick={() => onConfirm()} />
        <Button text='Cancelar' variant='secondary' onClick={() => onCancel()} />
      </div>
    </Modal.Actions>
  </Modal.Root>
}