import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';

import logo from './assets/images/logo.png';
import fbBtn from './assets/images/header_share_fb_btn.png';
import igBtn from './assets/images/header_share_ig_btn.png';
import lineBtn from './assets/images/header_share_line_btn.png';

import "./assets/scss/header.scss";

import jsonData from "./assets/JSON/infoData.json";

export default function Header() {

    const [menuShow,setMentShow]=useState(false);
    const [whatDevice,setWhatDevice]=useState(null);

    useEffect(() => {

        // 監聽視窗大小變化事件
        window.addEventListener('resize', function() {
            // 獲取當前瀏覽器寬度
            var browserWidth = window.innerWidth;
        
            // 檢查是否小於或等於 1024 像素
            if (browserWidth <= 1024) {
                setWhatDevice("mb");
            } else {
                setWhatDevice("pc");
            }
        });
        
        // 初始狀態下的瀏覽器寬度
        var initialWidth = window.innerWidth;
        if (initialWidth <= 1024) {
            setWhatDevice("mb");
        } else {
            setWhatDevice("pc");
        }

    }, []);

    const menuOpen = () =>{
        setMentShow(!menuShow);
    };

    const menuHide = () =>{
        setMentShow(!menuShow);
    };

    const menuClick = () =>{
        setMentShow(!menuShow);
    };

    return (
        <>
            <header>
                <nav className="navbar">
                    <a className="logo" href="https://www.businesstoday.com.tw/">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className={`navbar_menu ${whatDevice}`} style={{width:menuShow===true? "100%" : "0"}}>
                       
                        <ul className="navbar_nav">
                            <li className="nav_item">
                                 <FontAwesomeIcon icon={faTimes} className='menu_icon_close' onClick={menuHide}/>
                            </li>
                            {
                                jsonData.menu.map((item,index)=>(
                                    <li key={index} className="nav_item" onClick={menuClick}>
                                        <a className="nav_link" href={item.url}><p>{item.title}</p></a>
                                    </li>
                                ))
                            }
                            <li className="nav_item" onClick={menuClick}>
                                <a className='community_a' href='https://www.facebook.com/BToday/'>
                                    <img src={fbBtn} alt="fb_btn" />
                                </a>
                                <a className='community_a' href='https://page.line.me/btoday?openQrModal=true'>
                                    <img src={lineBtn} alt="line_btn" />
                                </a>
                                <a className='community_a' href='https://www.instagram.com/btoday_ig/'>
                                    <img src={igBtn} alt="ig_btn" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='community_area' style={whatDevice==="mb"?{display:"none"}:{display:"block"}}>
                        <ul className='community_box'>
                            <a className='community_a' href='https://www.facebook.com/BToday/'>
                                <img src={fbBtn} alt="fb_btn" />
                            </a>
                            <a className='community_a' href='https://page.line.me/btoday?openQrModal=true'>
                                <img src={lineBtn} alt="line_btn" />
                            </a>
                            <a className='community_a' href='https://www.instagram.com/btoday_ig/'>
                                <img src={igBtn} alt="ig_btn" />
                            </a>
                        </ul>
                    </div>
                    <FontAwesomeIcon icon={faBars} className='menu_icon' onClick={menuOpen} style={whatDevice==="mb"?{display:"block"}:{display:"none"}}/>
                </nav>
            </header>
        <div className='header_box'></div>
        </>
    )
};
  