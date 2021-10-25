import React from 'react';
import img1 from "../Service/Toyxona/map.png"
import style from "../Service/Toyxona/Toyxona.module.css"
export const Content = ({ BlockPicture1, BlockPicture2, BlockPicture3, BLockText1, BLockText2, BLockText3, BLockTitle1, BLockTitle2, BLockTitle3, catalog_Name, address, blockImg1, blockImg2, blockImg3, blockImg4 }) => {
  const map1 = [
    { id: 1, img: BlockPicture1, text: BLockText1, title: BLockTitle1, class: BLockText2 ? style.borderRight : null },
    { id: 2, img: BlockPicture2, text: BLockText2, title: BLockTitle2, class: BLockText3 ? style.borderRight : null },
    { id: 3, img: BlockPicture3, text: BLockText3, title: BLockTitle3, class: null }
  ]
  const map2 = map1.map(a => <div key={a.id} className={style.Wedding_Hall_Cost + " " + a.class}>
    <img src={a.img} alt="" />
    <div className={style.summa}>
      <p>{a.text}</p>
      <h6>{a.title}</h6>
    </div>
  </div>
  )
  return (
    <div className={style.Wedding_Hall_Catalog}>
      <div className={style.plane}>
        <div className={style.Wedding_Hall_Catalog_name_servis}>
          <h1 className={style.Wedding_Hall_Catalog_name}>{catalog_Name}</h1>
          <p className={style.Wedding_Hall_address}><img src={img1} /> {address}</p>
        </div>
        <a href="#" className={style.Wedding_Hall_map}>Kartada</a>
      </div>
      <div className={style.Wedding_Hall_Img_Block}>
        <img src={blockImg1} className={style.Wedding_Hall_Img} />
        <img src={blockImg2} className={style.Wedding_Hall_Img} />
        <img src={blockImg3} className={style.Wedding_Hall_Img} />
        <img src={blockImg4} className={style.Wedding_Hall_Img} />
      </div>
      <div className={style.Wedding_Hall_Cost_Block}>
        {map2}
      </div>
    </div>
  );
};
export const HeaderContent = ({ img, name, text, holder }) => {
  return (
    <div className={style.Header}>
      <img src={img} alt="" className={style.Img} />
      <div className={style.block}>
        <h1 className={style.title}>{name}</h1>
        <p className={style.text}>{text}</p>
      </div>
      <div className={style.searche_input}>
        <input type="text" placeholder={holder} />
      </div>

    </div>
  )
}