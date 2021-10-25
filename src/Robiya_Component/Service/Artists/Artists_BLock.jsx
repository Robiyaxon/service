import React from 'react';
import img1 from "./img/aida.png"
import img2 from "./img/aida2.png"
import img3 from "./img/block2_2.png"
import salary from "../Toyxona/salary.png"

import img4 from "./img/block2_1.png"
import { Content } from '../../halpers_object/Content'
export const Artist_Block = () => {
  return (
    <>
      <Content BlockPicture1={salary}
      BLockText1="To‘y o‘tkazish narxi"
      BLockTitle1="10 000 000 so‘m"
      catalog_Name='AIDA' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={img1} blockImg2={img2} blockImg3={img3} blockImg4={img4}  />
   </>
  );
};