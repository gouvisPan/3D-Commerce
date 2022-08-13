import React from "react";
import "./Shop.css";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const models = [
  {
    id: 1,
    name: "Toyota MR2",
    parts: [
      { id: 1, name: "Vent", desc: "BlahBlah", price: 130 },
      { id: 2, name: "Bent", desc: "BlahBlah", price: 110 },
      { id: 1, name: "zent", desc: "BlahBlah", price: 100 },
    ],
  },
  {
    id: 2,
    name: "Mazda Rx8",
    parts: [
      { id: 1, name: "Vent", desc: "BlahBlah", price: 130 },
      { id: 2, name: "Bent", desc: "BlahBlah", price: 110 },
      { id: 1, name: "zent", desc: "BlahBlah", price: 100 },
    ],
  },
  {
    id: 3,
    name: "Toyota Celica",
    parts: [
      { id: 1, name: "Vent", desc: "BlahBlah", price: 130 },
      { id: 2, name: "Bent", desc: "BlahBlah", price: 110 },
      { id: 1, name: "zent", desc: "BlahBlah", price: 100 },
    ],
  },
  {
    id: 3,
    name: "Mazda MX-5",
    parts: [
      { id: 1, name: "Vent", desc: "BlahBlah", price: 130 },
      { id: 2, name: "Bent", desc: "BlahBlah", price: 110 },
      { id: 1, name: "zent", desc: "BlahBlah", price: 100 },
    ],
  },
];

const SideMenu = () => {
  const [choosenOption, setChoosenOption] = useState(models[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event, key) => {
    setChoosenOption(models[key]);
    setIsMenuOpen(false);
  };

  const handleOpening = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className="wrapper">
      <div className="menu-container">
        {!isMenuOpen && (
          <div className="selected-option" onClick={handleOpening}>
            <p>{choosenOption.name}</p>
            <IoIosMenu />
          </div>
        )}

        {isMenuOpen &&
          models.map((model, key) => (
            <div
              className="model-list-item"
              onClick={(event) => handleClick(event, key)}
              key={key}
            >
              <p>{model.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
