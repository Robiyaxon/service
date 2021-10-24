import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Sovga_block } from './Sovga_block';
class Sovga extends Component {
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
      <HeaderContent img={img1} name='Shirinliklar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Sovg`a nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <Sovga_block />
        <Sovga_block />
        <Sovga_block />
        {this.state.show &&  <Sovga_block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Sovga
