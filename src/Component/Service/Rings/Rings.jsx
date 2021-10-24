import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { Rings_Block } from './Rings_Block';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class Rings extends Component {
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
      <HeaderContent img={img1} name='Uzuklar' text= "O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Uzuk nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Rings_Block />
        <Rings_Block />
        <Rings_Block />
        {this.state.show &&  <Rings_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Rings
