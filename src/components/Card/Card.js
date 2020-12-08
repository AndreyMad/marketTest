import React from "react";
import Select, { components } from "react-select";
import style from "./Card.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const Card = ({
  product,
  closeDropdown,
  colorSelect,
  quantityChange,
  radioChange,
  buySubmit

}) => {
 
  const colorOptions = product.availableColors.map((el) => {
    return { value: el, label: el.charAt(0).toUpperCase() + el.slice(1) };
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
      paddingLeft:'5px'
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    }),
    option: (provided, state) => ({
      ...provided,
      maxWidth: "80%",
      padding: "3px",
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
  const quantityChangeHandler = ({ target }) => {
    quantityChange(target.value, product.id);
  };

  const colorSelectHandler = (value) => {
    colorSelect(value, product.id);
  };
  return (
    
    <div className={style.wrapper} onMouseLeave={closeDropdown}>
      {product.isNew ? <span className={style.newLogo}>NEW</span> : null}
      <span className={style.compareContainer}>a</span>
      <div className={style.imageWrapper}>
        <img src={product.img} alt="product " />
      </div>
      <span className={style.title}>{product.name} </span>
      <span className={style.description}>{product.description}</span>
      <div className={style.innerWrapper}>
        <Select
          onChange={colorSelectHandler}
          options={colorOptions}
          placeholder="Цвет"
          components={{ IndicatorSeparator: false, MenuList }}
          styles={dropDownStyles}
        ></Select>
        <span className={style.price}>{product.cost||product.price} грн.</span>
      </div>

      <form className={style.volumeCheckbox}>
        {product.availableVolume.map((el, index) => {
          return (
            <>
              <input
                className={style.volumeInput}
                key={product.id}
                defaultChecked={index == 0 ? true : false}
                onChange={() => radioChange(product.id, el)}
                name="volume"
                id={`volume${el}${product.id}`}
                type="radio"
              />
              <label htmlFor={`volume${el}${product.id}`}>{el} мл</label>
            </>
          );
        })}
      </form>
      <div className={style.innerWrapper}>
        <div className={style.quantityWrapper}>
    
          <button onClick={quantityChangeHandler} value="decrement">
            -
          </button>
          <span>{product.selectedQuantity}</span>
          <button onClick={quantityChangeHandler} value="increment">
            +
          </button>
        </div>
        <button onClick={()=>buySubmit(product.id)} className={style.buyButton}>
          <span>Купить</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
