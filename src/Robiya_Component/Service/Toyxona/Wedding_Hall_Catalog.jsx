import React from 'react';
import img1 from "./restaran1.png"
import img2 from "./restaran2.png"
import img3 from "./restaran3.png"
import people from "./people1.png"
import gift from "./gift.png"
import salary from "./salary.png"
import img4 from "./restaran4.png"
import { Content } from '../../halpers_object/Content'
export const Wedding_Hall_Catalog = () => {
  return (
    <>
      <Content BlockPicture1={people} BlockPicture2={salary} BlockPicture3={gift} 
      BLockText1="Sig‘imi" BLockText2="Narxi (kishi boshiga)"  BLockText3="Qo‘shimcha bonus"  
      BLockTitle1='500' BLockTitle2='40 000 100 000 so‘m' BLockTitle3='Bor' 
      catalog_Name='To’yxona nomi' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={img1} blockImg2={img2} blockImg3={img3} blockImg4={img4}  />
   </>
  );
};