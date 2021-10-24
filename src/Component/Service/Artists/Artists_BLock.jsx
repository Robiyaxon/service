import React from 'react';
import img1 from "./img/aida.png"
import img2 from "./img/aida2.png"
import img3 from "./img/aida.png"
import people from "../Toyxona/people1.png"
import gift from "../Toyxona/gift.png"
import salary from "../Toyxona/salary.png"
import img4 from "./img/aida2.png"
import { Content } from '../../halpers_object/Content'
export const Artist_Block = () => {
  return (
    <>
      <Content BlockPicture2={salary}
      BLockText2="To‘y o‘tkazish narxi"
      catalog_Name='AIDA' address='Toshkent sh. Shayxontohur tumani, 23 -uy'
      blockImg1={img1} blockImg2={img2} blockImg3={img3} blockImg4={img4}  />
   </>
  );
};