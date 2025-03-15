import { Measure } from '../../models/measures';
import { Divider } from '../../ui/components/Divider';
import { Modal } from '../../ui/components/Modal';
import './styles.scss';

type ViewMeasureModalProps = {
  onClose: () => void;
  measure: Measure.Return | any;
}

export const ViewMeasureModal = ({ measure, onClose }: ViewMeasureModalProps) => {
  return (
    <Modal.Root>
      <Modal.Header title="Visualizar medida" onClose={() => onClose()} />
      <Modal.Body>
        <div className="view-measure-modal">
          <div className="view-measure-modal-content">
            <div className="measure-modal-item">
              <label>ID</label>
              <span>{measure?.id}</span>
            </div>
            <div className="measure-modal-item">
              <label>Nome</label>
              <span>{`Minha ${measure?.id}ª medição`}</span>
            </div>
            <div className="measure-modal-item">
              <label>Data da medição</label>
              <span>{new Date(measure?.measurementDate)?.toLocaleDateString()}</span>
            </div>
          </div>
          <Divider text='Tronco' />
          <div className="view-measure-modal-content">
            <div className="measure-modal-item">
              <label>Ombro</label>
              <span>{measure?.shoulder} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Peitoral relaxado</label>
              <span>{measure?.relaxedChest} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Peitoral contraído</label>
              <span>{measure?.contractedChest} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Cintura</label>
              <span>{measure?.hip} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Abdomen</label>
              <span>{measure?.abdomen} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Quadril</label>
              <span>{measure?.waist} cm</span>
            </div>
          </div>
          <Divider text='Braços' />
          <div className="view-measure-modal-content">
            <div className="measure-modal-item">
              <label>Braço direito relaxado</label>
              <span>{measure?.relaxedArmR} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Braço esquerdo relaxado</label>
              <span>{measure?.relaxedArmL} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Braço direito contraído</label>
              <span>{measure?.contractedArmR} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Braço esquerdo contraído</label>
              <span>{measure?.contractedArmL} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Antebraço direito</label>
              <span>{measure?.foreArmR} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Antebraço esquerdo</label>
              <span>{measure?.foreArmL} cm</span>
            </div>
          </div>
          <Divider text='Pernas' />
          <div className="view-measure-modal-content">
            <div className="measure-modal-item">
              <label>Coxa esquerda</label>
              <span>{measure?.haunchL} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Coxa direita</label>
              <span>{measure?.haunchR} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Panturrilha esquerda</label>
              <span>{measure?.calfL} cm</span>
            </div>
            <div className="measure-modal-item">
              <label>Panturrilha direita</label>
              <span>{measure?.calfR} cm</span>
            </div>
          </div>
          <Divider text='Peso' />
          <div className="view-measure-modal-content">
            <div className="measure-modal-item">
              <label>Peso atual</label>
              <span>{measure?.currentWeight} kg</span>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal.Root>
  )
}