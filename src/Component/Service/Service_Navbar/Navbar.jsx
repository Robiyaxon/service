import React from 'react'
import { ServiceLink } from './Service_Link/ServiceLink'

import weddingRoom from './picture/weddingRoom.jpg'
import inivitation from './picture/inivitation.jpg'
import flower from './picture/flower.jpg'
import ring from './picture/ring.png'
import decoration from './picture/decoration.png'
import artist from './picture/artist.png'
import musician from './picture/musician.png'
import dress from './picture/dress.png'
import style from './picture/style.jpg'
import machine from './picture/car.png'
import sweet from './picture/sweet.png'
import gift from './picture/gift.jpg'
import operator from './picture/operator.png'
import heroe from './picture/heroe.png'

import moduleName from './__Navbar.module.css'

const Navbar = () => {
    return (
        <div className={moduleName.navbar}>
            <ServiceLink path={'weddingRooms'} name={"To’yxonalar"} icon={weddingRoom} />
            <ServiceLink path={'invitations'} name={"Taklifnomalar"} icon={inivitation} />
            <ServiceLink path={'flowers'} name={"Gullar"} icon={flower} />
            <ServiceLink path={'rings'} name={"Uzuk"} icon={ring} />
            <ServiceLink path={'stageDecorations'} name={"Sahna bezagi"} icon={decoration} />
            <ServiceLink path={'artists'} name={"San’atkorlar"} icon={artist} />
            <ServiceLink path={'musician'} name={"Sozandalar"} icon={musician} />
            <ServiceLink path={'weddingDress'} name={"To’y liboslari"} icon={dress} />
            <ServiceLink path={'stylist'} name={"Sartarosh/Stilistlar"} icon={style} />
            <ServiceLink path={'weddingMachine'} name={"To’y avtomobili"} icon={machine} />
            <ServiceLink path={'Sweets'} name={"Shirinliklar"} icon={sweet} />
            <ServiceLink path={'gifts'} name={"Sovg’alar"} icon={gift} />
            <ServiceLink path={'operators'} name={"Foto Video operator"} icon={operator} />
            <ServiceLink path={'cartoonHeroes'} name={"Multi qahramonlar"} icon={heroe} />
        </div>
    )
}

export default Navbar
