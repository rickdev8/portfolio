import Link  from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/yourusername' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/yourusername/' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/c/yourchannel' },
    { icon: <FaTwitter />, path: 'https://twitter.com/yourusername' }
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link key={index} href={social.path} className={iconStyles}>
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Social;
