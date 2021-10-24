import style from "../Toyxona/Toyxona.module.css"
import img1 from "../Toyxona/toyxona.jpg"
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
import { Artist_Block } from './Artists_BLock';
class Artist extends Component {
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
      <HeaderContent img={img1} name='San`atkorlar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping." holder="San`atkor nomi orqali qidiruv..." />
      <div className={style.Catalog}>
        <Artist_Block />
        <Artist_Block />
        <Artist_Block />
        {this.state.show &&  <Artist_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Artist
