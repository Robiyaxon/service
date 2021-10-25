import React from 'react'
import { NavLink } from 'react-router-dom'

import moduleName from './__ServiceLink.module.css'

export const ServiceLink = ({ path, name, icon }) => {
    return (
        <NavLink className={moduleName.link} activeClassName={moduleName.linkActive} to={`/service/${path}`} title={name}>
            <div className={moduleName.sm_img}>
                <img src={icon} alt="" />
            </div>
            <div className={moduleName.name}>{name}</div>
        </NavLink>
    );
};
