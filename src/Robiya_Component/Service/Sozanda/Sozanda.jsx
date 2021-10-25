import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Sozanda_Block } from './Sozanda_block';
class Sozanda extends Component {
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
      <HeaderContent img={img1} name='Sozanda' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Sozanda nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Sozanda_Block />
        <Sozanda_Block />
        <Sozanda_Block />
        {this.state.show &&  <Sozanda_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Sozanda
