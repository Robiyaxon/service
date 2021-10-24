import style from "./Toyxona.module.css"
import img1 from "./toyxona.jpg"
import { Wedding_Hall_Catalog } from './Wedding_Hall_Catalog';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class Toyxona2 extends Component {
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
      <HeaderContent img={img1} name='To’yxonalar, Banketniy zal' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="To’yxona nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <Wedding_Hall_Catalog />
        <Wedding_Hall_Catalog />
        <Wedding_Hall_Catalog />
        {this.state.show &&  <Wedding_Hall_Catalog />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Toyxona2
