import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { Heroes_Block } from './Qahramon_Block';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class Heroes extends Component {
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
      <HeaderContent img={img1} name='Multi qahramonlar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="Qahramon nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Heroes_Block />
        <Heroes_Block />
        <Heroes_Block />
        {this.state.show &&  <Heroes_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Heroes
