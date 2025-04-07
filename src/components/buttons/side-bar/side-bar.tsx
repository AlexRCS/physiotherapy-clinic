import NavBtn from '../nav-btn/nav-btn';
import './side-bar.css';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <NavBtn setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Sidebar;
