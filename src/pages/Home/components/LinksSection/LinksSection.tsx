import { Link } from "react-router-dom";
import "./LinksSection.scss";
export const LinksSection = () => {
    const avatarVideoUrl =
        "https://res.cloudinary.com/dimfha9hq/video/upload/f_auto:video,q_auto/v1/portfolio_react/exjrkqwwa2rreahbh4mh";

    return (
        <div className="links-container">
            <video
                className="avatar-video"
                src={avatarVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                controlsList="nodownload"
                disableRemotePlayback={false}></video>
            <div className="links-text">
                <p>Envie de me contacter ?</p>
                <p>J'attends vos retours avec impatience !</p>
                <Link to="/contact" className="link">
                    {/* <button className="contact-button">Me contacter</button> */}
                    Me contacter
                </Link>
            </div>
        </div>
    );
};
