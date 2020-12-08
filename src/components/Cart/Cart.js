import React, { Component } from "react";
import style from "./Cart.module.css";
import { connect } from "react-redux";
import * as notesActions from "../../redux/cart/cartActions";
import shortId from "shortid";
class Cart extends Component {

  componentDidMount() {
    const { cartProducts } = this.props;
    console.log(cartProducts);
  }
  deleteProduct =(id)=>{
    const {deleteProductFromCart}=this.props
    deleteProductFromCart(id)
  }
quantityChangeHandler=(id, action)=>{
  const {incrementQuantity}=this.props
  switch (action){
    case 'increment':
      console.log('increment');
      return incrementQuantity(id)
  }
}
quantityChange=()=>{

}
  render() {
    const { cartProducts } = this.props;
    return (
      <div className={style.container}>
        <h2 className={style.title}>Корзина</h2>
        <div className={style.wrapper}>
          {cartProducts.length > 0 ? null : <h3>Нет продуктов в корзине</h3>}
          {cartProducts.map((el) => {
            return (
              <div key={shortId.generate()} className={style.innerWrapper}>
                <img src={el.img} className={style.image} alt="product"></img>
                <span>{el.name}</span>
                <span>{el.selectedColor}</span>
                <span>{el.selectedVolume}</span>
                <div className={style.quantityWrapper}>
                  <button  onClick={()=>this.quantityChangeHandler(el.shId,'decrement')} value="decrement">-</button>
                  <span>{el.selectedQuantity}</span>
                  <button onClick={()=>{this.quantityChangeHandler(el.shId, 'increment')}} value="increment">+</button>
                </div>
            <span>{el.cost}</span>
                <button onClick={()=>this.deleteProduct(el.shId)} className={style.deleteButton}>
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.617 28.333H7.383A2.443 2.443 0 015 25.833V9.358h1.667v16.475a.775.775 0 00.716.834h15.234a.775.775 0 00.716-.834V9.358H25v16.475a2.442 2.442 0 01-2.383 2.5zM25.65 7.5H4.167a.833.833 0 110-1.667H25.65a.833.833 0 010 1.667z"
                      fill="#000"
                    />
                    <path
                      d="M17.5 10.833h1.667v12.5H17.5v-12.5zM10.833 10.833H12.5v12.5h-1.667v-12.5zM19.167 4.883h-1.584v-1.55h-5.166v1.55h-1.584v-1.55a1.666 1.666 0 011.584-1.666h5.166a1.667 1.667 0 011.584 1.666v1.55z"
                      fill="#000"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({ cartProducts: [...store.cart.items] });

const mapDispatchToProps = (dispatch) => ({
  deleteProductFromCart: (id) => dispatch(notesActions.deleteProductAction(id)),
  incrementQuantity: (id)=>dispatch(notesActions.incrementQuantity(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
