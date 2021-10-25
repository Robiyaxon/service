import React from 'react';
import block1 from "./Img/block1.png"
import block2 from "./Img/block2.png"
import block3 from "./Img/block3.png"
import block4 from "./Img/block4.png"
import salary from "../Toyxona/salary.png"
import { Content } from '../../halpers_object/Content'

export const Car_Block = () => {
  return (
    <>
      <Content BlockPicture1={salary}
      BLockText1="Narxi"
      BLockTitle1='40 000      100 000 so‘m' 
      catalog_Name='Botir Tursunmurodov' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={block1} blockImg2={block2} blockImg3={block3} blockImg4={block4}  />
   </>
  );
};