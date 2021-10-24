import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Shirinliklar_block } from './Shirinliklar_block';
class Shirinliklar extends Component {
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
      <HeaderContent img={img1} name='Shirinliklar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Shirinlik nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Shirinliklar_block />
        <Shirinliklar_block />
        <Shirinliklar_block />
        {this.state.show &&  <Shirinliklar_block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Shirinliklar
