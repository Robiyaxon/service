import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Liboslar_block } from './Liboslar_block';
class Liboslar extends Component {
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
      <HeaderContent img={img1} name='Liboslar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Liboslar nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Liboslar_block />
        <Liboslar_block />
        <Liboslar_block />
        {this.state.show &&  <Liboslar_block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Liboslar
