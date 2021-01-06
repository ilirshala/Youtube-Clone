import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({ image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>{subs} subscribers &#8226; {noOfVideos} videos</p>
                <p>{ description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;
