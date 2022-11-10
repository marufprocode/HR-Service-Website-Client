import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../../assets/logo/HrVisionLogoBlue.png"
import { sharedContext } from "../../../context/UserContext";

const Header = () => {
    const {user, handleSignOut} = useContext(sharedContext);

  return (
    <div>
      <Navbar fluid={true} rounded={true} className="shadow-lg">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={brandLogo}
            className="mr-3 h-6 w-10 sm:h-9"
            alt="HR VISION"
          />
          <span className="font-blackHan self-center whitespace-nowrap text-xl font-semibold dark:text-white text-sky-600 hidden sm:block">
            HR VISION
          </span>
        </Navbar.Brand>
        <div className={`${user? "flex md:order-2":"hidden"}`} /* className="flex md:order-2 hidden" */>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={`${user?.photoURL? user?.photoURL:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"}`}
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item><Link to="/dashboard">Dashboard</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/dashboard/add-service">Add Services</Link></Dropdown.Item>
            <Dropdown.Item><Link to="/dashboard/my-reviews">My Reviews</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
            <Navbar.Toggle />
        </div>
        <div className={`${user? "hidden":"flex md:order-2"}`} /* className="flex md:order-3" */>
        <Link to="/login" className="mr-3">
            <Button>
            Login
            </Button>
        </Link>
        <Link to="/register">
            <Button>
            Sign Up
            </Button>
        </Link>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/home">Home</Link>
          </Navbar.Link>

          <Link to="/#">About me</Link>
          <Link to="/services">Services</Link>
          <Link to="/blogs">Blogs</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
