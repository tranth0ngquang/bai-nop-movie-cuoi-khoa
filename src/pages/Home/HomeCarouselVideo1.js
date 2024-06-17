import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

const HomeVideo = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeToggle = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = isMuted;
    };

    useEffect(() => {
        const video = videoRef.current;

        video.addEventListener('play', () => setIsPlaying(true));
        video.addEventListener('pause', () => setIsPlaying(false));

        return () => {
            video.removeEventListener('play', () => setIsPlaying(true));
            video.removeEventListener('pause', () => setIsPlaying(false));
        };
    }, [videoRef]);

    return (
        <div className="duration-700 ease-in-out" data-carousel-item>
            <div className="videoHome">
                <div className="absolute videoHome-controls z-20 bottom-40 lg:bottom-8 left-1/2 -translate-x-1/2 lg:left-40 lg:translate-x-0 w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 text-white">
                    <div className="">
                        <h2 className="text-6xl">DUNE</h2>
                        <p className="text-white/60 text-2xl pb-3">Khởi chiếu: 20/05/2024</p>
                    </div>
                    <div className="show_text_6s">
                        <p className="text-xl">Viễn tưởng | Hành động | 16+</p>
                        <p className="pb-3">'Dune' tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding...</p>
                    </div>

                    <span className="pr-3">
                        <button type="button" class="btn_trang text-xl">Xem chi tiết</button>
                    </span>
                    <span>
                        <button type="button" class="btn_den text-xl">Đặt vé ngay</button>
                    </span>
                    <p className="text-white/60 italic">*Ưu đãi khi đăng ký thành hội viên</p>
                </div>
                <div className="absolute videoHome-controls z-20 bottom-20 lg:bottom-8 right-1/2 translate-x-1/2 lg:right-40 lg:translate-x-0">
                    <span className="pr-3">
                        <button className="videoHome_play-pause" onClick={handlePlayPause}>
                            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                        </button>
                    </span>
                    <span>
                        <button className="videoHome_volume" onClick={handleVolumeToggle}>
                            <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                        </button>
                    </span>
                </div>
                <video className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" loop ref={videoRef} muted={isMuted}>
                    <source src="https://imdb-video.media-imdb.com/vi3049046297/1434659607842-pgv4ql-1599668656226.mp4?Expires=1718712610&Signature=We8GW1K1uL0XTq6T1kaJN2SaV9QjCLi1yYldyqyPlYr95u5RouG16RK6hAXL83ZuQFeYUE9VHq2J8qrx6T~F6zo3WcbEyKsYVqLiXggEPT8nDnVhVlCAUO6fTc79f04~KulQZtSqsL323M0m0fLTQKTneZV85hfaX-W-YiR4cAAho-ptvDDbtYdwKGqC0bBBgmstGTThxpBpVpCQ7AFs~p-vcaDgMJoGXlATUVJ6OrXhqEVu2cdNSADXNn31m3FGyvuz~tmCz-K2YU7dbysqjLK-ouIqrI2E2NmRhmoiY9-WGh2fLk1cIdWCnVw7wEsSL9BiJk83pNkybUX4CDe8eQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" type="video/mp4" />
                </video>
                {/* <video className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" ref={videoRef} src="../src/assets/movieDune.mp4" muted={isMuted} loop /> */}
            </div>

        </div>
    );
};

export default HomeVideo;