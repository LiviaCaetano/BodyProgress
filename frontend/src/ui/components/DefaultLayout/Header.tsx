import { useState } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { ManagePersonModal } from "../../../components/ManagePersonModal";
import { loginFailure } from './../../../store/modules/auth/actions';
import "./styles.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch()

  return (
    <div className="default-layout-header">
      <FaUserCircle onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div className="default-layout-header-menu">
          <li onClick={() => setShowModal(true)}>
            <FaUserEdit />
            <span>Editar perfil</span>
          </li>
          <li onClick={() => dispatch(loginFailure())}>
            <FaPowerOff />
            <span>Sair</span>
          </li>
        </div>
      )}
      {showModal && <ManagePersonModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
