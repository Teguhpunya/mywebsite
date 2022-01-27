import { FaHome, FaMoon, FaProjectDiagram, FaSun, FaUserNinja } from "react-icons/fa";
import useDarkMode from '../hooks/DarkMode';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col 
        bg-gray-300 text-black shadow-lg
        dark:bg-gray-900 dark:text-white
        transition-all duration-100 ease-linear">
            <SideBarIcon icon={<FaHome size={32} />} />
            <SideBarIcon icon={<FaUserNinja size={32} />} />
            <SideBarIcon icon={<FaProjectDiagram size={32} />} />
            <ThemeIcon />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip 😀' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                //   <FaSun size='32' className='top-navigation-icon' />
                <SideBarIcon icon={<FaSun size={32} />} />
            ) : (
                // <FaMoon size='32' className='top-navigation-icon' />
                <SideBarIcon icon={<FaMoon size={32} />} />
            )}
        </span>
    );
};

export default SideBar;
