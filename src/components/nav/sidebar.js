import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../asset/style/sidebar.css';

const sideBarList = [
    {
        path: '/info_bitcoin',
        label: 'Info Bitcoin',
        active: true,
    },
    {
        path: '/idr_to_btc',
        label: 'IDR to BTC',
        active: false,
    },
    {
        path: '/btc_to_idr',
        label: 'BTC to IDR',
        active: false,
    },
];

const Sidebar = () => {
    const [sideBar, setSideBar] = useState(sideBarList);

    const changeActiveValue = (index) => {
        setSideBar(prev => prev.map((child, indx) => ({
            ...child,
            active: indx === index ? true : false,
        })));
    };

    return (
        <div id="sidebar" className="navy">
            <div className="sidebar-upper-menu">
                <div className="company-container">
                    BTC Converter
                </div>
                <div className="sidebar-list">
                    {
                        sideBar.map(({ label, path, active }, index) => (
                            <Link to={path}>
                                <div className={`sidebar-menu ${active ? 'active' : ''}`} key={index} onClick={() => changeActiveValue(index)}>
                                    {label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;