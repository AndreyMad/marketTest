import React, {Component} from "react";
import { connect } from "react-redux";
import data from "../assets/products";
import Card from "./Card/Card";
import style from './App.module.css'
class App extends Component {
  state ={
    products:[]
  }
componentDidMount() {
  this.setState({products:[...data]})
}
closeDropdown=()=>{
  console.log('close');
}
  render() {
    const {products}=this.state
    return (

       <div className={style.container}>
       {products.map((el) => {
          return <Card product={el} key={el.id} closeDropdown={this.closeDropdown} />;
        })}

       </div>

    );
  }
}
const mapStateToProps = (store) => ({});
export default connect(mapStateToProps, null)(App);
