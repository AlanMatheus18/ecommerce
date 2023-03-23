import img_logo from "../../assets/img_logo.png";
import "./style.css";
import {BsCart4} from "react-icons/bs"

export const Header = () => {
  return (
    <div className="header">
      <div className="subheader">
      <img className="img_logo" src={img_logo} alt="logo ecommerce" />
      <p className="title_logo">Atacadista</p>
      </div>
      <BsCart4 className="img_carrinho"/>
    </div>
  );
};
