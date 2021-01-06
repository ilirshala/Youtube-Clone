import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to={`/`}>
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
                </Link>

            </div>

            <div className="header__input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>

            </div>

            <div className="header__right">
                <VideoCallIcon className="header__icon " />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Ilir Shala"
                    src="https://instagram.fprn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/91860314_1123000318053901_461521345788772352_n.jpg?_nc_ht=instagram.fprn4-1.fna.fbcdn.net&_nc_ohc=ZRKFJdv2pdgAX_a0Wbr&tp=1&oh=9aa21da74ae63780965f91870c0dac9c&oe=5FFAD3D4"
                />
            </div>

        </div>
    )
}

export default Header
