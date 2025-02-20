import { useState } from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { ManagePersonModal } from "../../../components/ManagePersonModal";
import "./styles.scss";

export const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="default-layout-header">
      <FaUserCircle onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div className="default-layout-header-menu">
          <li onClick={() => setShowModal(true)}>
            <FaUserEdit />
            <span>Editar perfil</span>
          </li>
          <li>
            <FaPowerOff />
            <span>Sair</span>
          </li>
        </div>
      )}
      {showModal && <ManagePersonModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
