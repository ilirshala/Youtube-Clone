import React from 'react';
import TuneIcon from '@material-ui/icons/Tune';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0xffffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="665k"
                noOfVideos={400}
                description="You can find awsome programming lessons here!"
            />
            <hr />
            <VideoRow
                views="1.4M"
                subs="650K"
                description="Do you want to learn REACT JS?"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Build a TWITTER Clone with React JS for Beginners"
                image="https://i.ytimg.com/vi/rJjaqSTzOxI/mqdefault.jpg"

            />
            <VideoRow
                views="40K"
                subs="650K"
                description="In this FREE LIVE training, Sonny and Frankie will build a Hulu Clone LIVE with REACT JS and firebase!🚀🔥 "
                timestamp="2 months ago"
                channel="Clever Programmer"
                title="Let's Build a Hulu Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/vi/du_FuBTrclo/sddefault.jpg#404_is_fine"

            />
            <VideoRow
                views="142K"
                subs="850K"
                description="Register for the FREE Whiteboard Webinar Training that teaches you how to become a profitable software developer in 2021 and beyond 👉"
                timestamp="2 weeks ago"
                channel="Clever Programmer"
                title=" 
                Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)"
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--cX6HI9gA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j71o6fyry39eaz1eyjna.jpg"

            />
            <VideoRow
                views="102K"
                subs="850K"
                description="#reactjs #webdeveloper #javascript"
                timestamp="4 Mnths ago"
                channel="Clever Programmer"
                title="7 Skills You Need as a JavaScript Developer in 2020s"
                image="https://i.ytimg.com/vi/1_IYL9ZMR_Y/maxresdefault.jpg"

            />
            <VideoRow
                views="158K"
                subs="850K"
                description="#Do you want a FREE Training on How to Become a 6-Figure React JS Developer in 2021? (We go even deeper here)👇https://www.crowdcast.io/e/how-to-bec... "
                timestamp="1 month ago"
                channel="Clever Programmer"
                title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
                image="https://i.ytimg.com/vi/RDV3Z1KCBvo/maxresdefault.jpg"

            />
            <VideoRow
                views="23K"
                subs="850K"
                description="Today I wanted to reveal the biggest opportunity for developers in 2021 that a lot of us have discovered but nobody has ever shared before... Click here to jump in  "
                timestamp="1 day ago"
                channel="Clever Programmer"
                title="Biggest Opportunity for Developers in 2021"
                image="https://i.ytimg.com/vi/R7PhEdxrhB4/mqdefault.jpg "

            />
        </div>
    )
}

export default SearchPage
