import Link  from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/rickdev8' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/rickdevv/' },
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
