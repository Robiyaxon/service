import React from 'react'
import block1 from "../Artists/img/munisa.png"
import block2 from "../Artists/img/munisa.png"
import block3 from "../Artists/img/munisa.png"
import block4 from "../Artists/img/munisa.png"
import salary from "../Toyxona/salary.png"
import { Content } from '../../halpers_object/Content'

export const Sozanda_Block = () => {
  return (
    <>
      <Content BlockPicture1={salary}
      BLockText1="Narxi"
      BLockTitle1='40 000      100 000 so‘m' 
      catalog_Name='Firma nomi' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={block1} blockImg2={block2} blockImg3={block3} blockImg4={block4}  />
   </>
  );
};