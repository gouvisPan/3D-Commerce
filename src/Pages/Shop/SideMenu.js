import React from "react";
import "./Shop.css";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Delay from './../../helpers/Delay'

const SideMenu = (props) => {
  const myModels = props.models;
  const [choosenModel, setChoosenModel] = useState(myModels[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuCSS = isMenuOpen ? "menu expanded" : "menu";


  const handleClick = (event, key) => {
    setChoosenModel(myModels[key]);
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
