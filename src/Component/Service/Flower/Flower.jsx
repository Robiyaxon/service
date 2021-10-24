import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { Flower_Block } from './Flower_Block';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class Flower extends Component {
state={
  show:false,
  text2:"Yana ko’rsatish"
}
foo=()=>{
  this.setState({show:!this.state.show})
}
  render() {
    return (
      <>
      <HeaderContent img={img1} name='Gullar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Gul nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Flower_Block />
        <Flower_Block />
        <Flower_Block />
        {this.state.show &&  <Flower_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Flower
