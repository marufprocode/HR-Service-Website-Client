import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { sharedContext } from "../../../context/UserContext";

const Header = () => {
    const {user, handleSignOut} = useContext(sharedContext);

  return (
    <div>
      <Navbar fluid={true} rounded={true} className="shadow-lg">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
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
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
            <Navbar.Toggle />
        </div>
        <div className={`${user? "hidden":"flex md:order-2"}`} /* className="flex md:order-3" */>
        <Link to="/login">
            <Button>
            Login
            </Button>
        </Link>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
