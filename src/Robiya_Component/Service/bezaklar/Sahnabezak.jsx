import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { SahnaBezak_Block } from './Bezak_block';
class SahnaBezak extends Component {
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
      <HeaderContent img={img1} name='Sahna bezaklari' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."  holder="Bezaklar nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <SahnaBezak_Block />
        <SahnaBezak_Block />
        <SahnaBezak_Block />
        {this.state.show &&  <SahnaBezak_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default SahnaBezak
