import style from "../Toyxona/Toyxona.module.css"
import img1 from "./Img/header.png"
import { Car_Block } from './Car_Block';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class CAR extends Component {
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
      <HeaderContent img={img1} name='To‘y avtomobilllari' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."  holder="Avtomabil nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <Car_Block />
        <Car_Block />
        <Car_Block />
        {this.state.show &&  <Car_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default CAR
