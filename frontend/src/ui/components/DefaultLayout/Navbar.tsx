import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { TbRulerMeasure } from "react-icons/tb";
import { TfiDashboard } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { BPIcon } from "../../../assets/svgIcons/BPIcon";
import "./styles.scss";

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = location;

  useEffect(() => {}, [pathname]);

  const listLinks = [
    {
      icon: <FaHome size={30} color="white" />,
      label: "Home",
      link: "/",
    },
    {
      icon: <TbRulerMeasure size={30} color="white" />,
      label: "Medidas",
      link: "/measures",
    },
    {
      icon: <TfiDashboard size={30} color="white" />,
      label: "IMC",
      link: "/imc",
    },
  ];

  return (
    <div className="default-layout-navbar">
      <div className="default-layout-navbar-icon">
        <BPIcon />
      </div>
      <div className="default-layout-navbar-links">
        {listLinks?.map((link, index) => (
          <div
            key={index}
            className={`default-layout-navbar-option ${
              link?.link === pathname && "default-layout-navbar-option-active"
            }`}
            onClick={() => navigate(link?.link)}
          >
            <div className="default-layout-navbar-option-icon">
              {link?.icon}
            </div>
            <span>{link?.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
