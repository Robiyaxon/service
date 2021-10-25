import style from "../Toyxona/Toyxona.module.css"
import img1 from "./picture/header.png"
import { Invitations_Block } from './Invitations_Block';
import { HeaderContent } from '../../halpers_object/Content';
import React, { Component } from 'react'
class Invitations extends Component {
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
      <HeaderContent img={img1} name='Taklifnomalar' text="O'zingiz uchun eng yaxshi to'yxonalardan  mukammal joyni toping."  holder="Taklifnoma nomi orqali qidiruv..."/>
      <div className={style.Catalog}>
        <Invitations_Block />
        <Invitations_Block />
        <Invitations_Block />
        {this.state.show &&  <Invitations_Block />}
        <div className={style.Yana}>
          <button onClick={this.foo}>{this.state.show===false? this.state.text2:"Berkitish"}</button>
        </div>
      </div>
    </>
    )
  }
}
export default Invitations
