import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Sartaroshxona_block } from './Sartaroshxona_block';
class Sartaroshxona extends Component {
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
      <HeaderContent img={img1} name='Sartarosh/Stilistlar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."  holder="Satrarosh nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <Sartaroshxona_block />
        <Sartaroshxona_block />
        <Sartaroshxona_block />
        {this.state.show &&  <Sartaroshxona_block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Sartaroshxona
