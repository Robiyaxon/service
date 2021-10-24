import style from "../Toyxona/Toyxona.module.css"
import img1 from "./header.png"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Aperator_block } from './Aperator_block';
class Aperator extends Component {
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
      <HeaderContent img={img1} name='Vedio va photo operator' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="photo operator nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Aperator_block />
        <Aperator_block />
        <Aperator_block />
        {this.state.show &&  <Aperator_block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Aperator
