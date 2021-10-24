import React from 'react'
import block1 from "./block1.png"
import block2 from "./block1.png"
import block3 from "./block1.png"
import block4 from "./block1.png"
import salary from "../Toyxona/salary.png"
import { Content } from '../../halpers_object/Content'
export const Aperator_block = () => {
  return (
    <>
      <Content BlockPicture1={salary}
      BLockText1="Narxi"
      BLockTitle1='40 000      100 000 so‘m' 
      catalog_Name='Mustafoyev Amir' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={block1} blockImg2={block2} blockImg3={block3} blockImg4={block4}  />
   </>
  );
};