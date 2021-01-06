import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recomended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GidOBYRrLz8iVpEGTpAPOutnaKuuYNWYTXhZA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Sonny Sangha"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtE1JjS5tlGSqCHnPcrJPkN5Z3PVR1KF_Vw&usqp=CAU"

                />
                <VideoCard
                    title="15 MIN FULL BODY WORKOUT"
                    views="37M Views"
                    timestamp="2 years ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GjlStYRYWts5tR_5eeg1ZssuzSxYfcea_PcPw=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Pamela Reif"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN73_qx2udlPlqs3dYxsLT_TBA2LYxZMEOZA&usqp=CAU"

                />
                <VideoCard
                    title="Introduction to Programming and Computer Science"
                    views="603K Views"
                    timestamp="7 months ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="freeCodeCamp.org"
                    image="https://i.morioh.com/2020/04/22/c927e98cbdf0.jpg"
                />
                <VideoCard
                    title="Fastest way to become a Java Developer"
                    views="102K Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GiU5asvJjNAA18UyOF5skS6G31ybTiQ-NlsDA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Imtiaz Ahmad"
                    image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190911190208/How-to-Become-A-Successful-Java-Developer.png"
                />
                <VideoCard
                    title="Best Of LeBron James | 2019-20 NBA Seasonr"
                    views="4.3M Views"
                    timestamp="8 months ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgfwTVXgp14poAkE0RBJbc-pIXRxGgBg1Ze=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="NBA"
                    image="https://theundefeated.com/wp-content/uploads/2020/10/Lebron-James-01-e1602251387530.jpg?w=1024"
                />


                <VideoCard
                    title="Fastest way to become a Java Developer"
                    views="102K Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GiU5asvJjNAA18UyOF5skS6G31ybTiQ-NlsDA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Imtiaz Ahmad"
                    image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190911190208/How-to-Become-A-Successful-Java-Developer.png"
                />


                <VideoCard
                    title="Python Tutorial - Python for Beginners [Full Course]"
                    views="16M Views"
                    timestamp="1 year ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14GgRakJo9HGmRzwTAjdcYFMYBLCl1fP2Z4YgbA=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Programming with Mosh "
                    image="https://d2h0cx97tjks2p.cloudfront.net/blogs/wp-content/uploads/sites/2/2019/10/How-to-become-a-python-developer.jpg"
                />


                <VideoCard
                    title="Mega Cardio Boxing Workout | I barely completed these three sets!"
                    views="46K Views"
                    timestamp="2 months ago"
                    channelImage="https://yt3.ggpht.com/a-/AOh14Gis5ZFQZS6gC_ON_p_5R7wDcwlCdz_jclPL=s68-c-k-c0x00ffffff-no-rj-mo"
                    channel="Precision Striking"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6KQ5K8gR4kok4beR-QghW-wWgkaqvOPMXaw&usqp=CAU"
                />
                <VideoCard
                    title="Laravel - Blade, Single Action Controller, request, response, aborting request, view composers"
                    views="93 Views"
                    timestamp="2 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwngzZBfUvEP9tYhwxq6VyT8NbsKIcZJ-QY8-BAN0=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="PËR PROGRAMERA"
                    image="https://i.ytimg.com/vi/NI7TyzayB4E/maxresdefault.jpg"
                />
                <VideoCard
                    title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
                    views="158K Views"
                    timestamp="1 month ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0xffffffff-no-rj-mo"
                    channel="Clever Programmer"
                    image="https://i.ytimg.com/vi/RDV3Z1KCBvo/maxresdefault.jpg"
                />


            </div>
        </div>
    )
}

export default RecommendedVideos
