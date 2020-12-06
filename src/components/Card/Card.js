import React from "react";
import Select, { components } from "react-select";
import style from "./Card.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Card = ({ product, closeDropdown, selectedColor }) => {
  console.log(product);
  const colorOptions = product.availableColors.map((el) => {
    return { value: el, label: el };
  });

  const dropDownStyles = {
    container: (base, state) => ({
      ...base,
      height: "28px",
      width: "30%",
      minWidth: "130px",
      backgroundColor: "#ffffff",
      borderRadius: state.selectProps.menuIsOpen
        ? "14px  14px 0px 0px"
        : "14px",
    }),
    ValueContainer: (style) => ({
      ...style,
      // height:'100%',
      padding: "3px 12px",
    }),
    menu: (style) => ({
      ...style,
      marginTop: "0px",
      boxShadow: "none",
      borderRadius: "0px 0px 14px 14px",
    }),
    menuList: (style) => ({
      ...style,
    }),
    control: (style) => ({
      display: "flex",
      height: "inherit",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    }),
    option: (provided, state) => ({
      ...provided,
      maxWidth: "80%",
      padding: "3px 10px 3px 0px",
      marginLeft: "12px",
    }),
  };

  const MenuList = (props) => {
    return (
      <PerfectScrollbar style={{ maxHeight: "100px" }}>
        <components.MenuList {...props}>{props.children}</components.MenuList>
      </PerfectScrollbar>
    );
  };

  return (
    <div className={style.container} onMouseLeave={closeDropdown}>
      {product.isNew ? <span className={style.newLogo}>NEW</span> : null}
      <span className={style.compareContainer}>a</span>
      <div className={style.imageWrapper}>
        <img src={product.img} alt="product " />
      </div>
      <span className={style.title}>{product.name} </span>
      <span className={style.description}>{product.description}</span>
      <div className={style.innerWrapper}>
        <Select
          options={colorOptions}
          placeholder="Цвет"
          // defaultMenuIsOpen="true"
          components={{ IndicatorSeparator: false, MenuList }}
          styles={dropDownStyles}
        ></Select>
        <span className={style.price}>{product.price} грн.</span>
      </div>
     
        <form className={style.volumeCheckbox}>
          {product.availableVolume.map((el) => {
            return (
              <label >
            
              <input name="volume" id={`volume${el}`} checked type="radio"/>
              {el} мл
            </label>
            );
          })}
        </form>
        <div className={style.innerWrapper}>
          <div className={style.quantityWrapper}>
            <button>+</button>
             <span>1</span>
            <button>-</button>
          </div>
          <button className={style.buyButton}><span>Купить</span></button>
        </div>
      </div>
  
  );
};

export default Card;
