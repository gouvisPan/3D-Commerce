import React from "react";
import "./Shop.css";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Delay from "./../../helpers/Delay";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { commerceActions } from "../../store/commerce-slice";

const SideMenu = () => {
  const myCommerce = useSelector((state) => state.commerce);
  const dispach = useDispatch();

  const myModels = myCommerce.categories;
  const choosenModel = myCommerce.activeCategory;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuCSS = isMenuOpen ? "menu expanded" : "menu";

  const handleClick = (event, key) => {
    dispach(commerceActions.setActiveCategory(key));
    setIsMenuOpen(false);
  };

  const handleOpening = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="wrapper">
      <div className={menuCSS}>
        {!isMenuOpen && (
          <div className="selected-option" onClick={handleOpening}>
            <p>{choosenModel.name}</p>
            <IoIosMenu />
          </div>
        )}

        {isMenuOpen &&
          myModels.map((model, key) => (
            <Delay>
              <div
                className="model-list-item"
                onClick={(event) => handleClick(event, key)}
                key={key}
              >
                <p>{model.name}</p>
              </div>
            </Delay>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
