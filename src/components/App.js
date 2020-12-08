import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../assets/products";
import Card from "./Card/Card";
import style from "./App.module.css";
import * as notesActions from "../redux/cart/cartActions";
import Cart from "./Cart/Cart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import shortId from "shortid";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({
      products: data.map((el) => ({
        ...el,
        selectedQuantity: 1,
        selectedColor: "",
        cost: el.price,
      })),
    });
  }
  closeDropdown = () => {
    // console.log("close");
  };
  radioChange = (id, volume) => {
    this.setState(
      (prevState) => ({
        products: prevState.products.map((el) =>
          el.id === id ? { ...el, selectedVolume: volume } : el
        ),
      }),
      () => {
        this.costHandler(id);
      }
    );
  };

  quantityChange = (target, id) => {
    switch (target) {
      case "increment":
        return this.setState(
          (prevState) => ({
            products: prevState.products.map((el) =>
              el.id === id
                ? { ...el, selectedQuantity: el.selectedQuantity + 1 }
                : el
            ),
          }),
          () => {
            this.costHandler(id);
          }
        );
      case "decrement":
        return this.setState(
          (prevState) => ({
            products: prevState.products.map((el) => {
              if (el.id === id) {
                if (el.selectedQuantity > 1) {
                  return { ...el, selectedQuantity: el.selectedQuantity - 1 };
                }
                return el;
              }
              return el;
            }),
          }),
          () => {
            this.costHandler(id);
          }
        );
    }
  };

  costHandler = (id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((el) =>
        el.id === id
          ? {
              ...el,
              cost:
                el.price *
                el.selectedQuantity *
                (el.selectedVolume / el.availableVolume[0] || 1),
            }
          : el
      ),
    }));
  };

  colorSelect = ({ value }, id) => {
    this.setState((prevState) => ({
      products: prevState.products.map((el) =>
        el.id === id ? { ...el, selectedColor: value } : el
      ),
    }));
  };

  buySubmit = (id) => {
    const { products } = this.state;
    const { addProductToCart } = this.props;
    let prodToCart = products.find((el) => {
      return el.id === id;
    });

    if (!prodToCart.selectedColor) {
      toast.warn("Выберите цвет", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    prodToCart = { ...prodToCart, shId: shortId.generate() };
    console.log(prodToCart);
    addProductToCart(prodToCart);
    toast.success("Товар добавлен в корзину", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={style.container}>
          <div className={style.wrapper}>
            {products.map((el) => {
              return (
                <Card
                  product={el}
                  key={el.id}
                  buySubmit={this.buySubmit}
                  quantityChange={this.quantityChange}
                  radioChange={this.radioChange}
                  quantity={el.selectedQuantity}
                  closeDropdown={this.closeDropdown}
                  colorSelect={this.colorSelect}
                />
              );
            })}
          </div>
          <div className={style.wrapper}>
            <Cart />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (store) => ({ cartProducts: [...store.cart.items] });

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (data) => dispatch(notesActions.addProductAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
