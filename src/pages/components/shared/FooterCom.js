import { Footer } from "flowbite-react";
import React from "react";
import brangLogo from "../../../assets/logo/HrVisionLogoBlue.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container={true} className="bg-sky-100">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="mb-6 md:mb-0">
            <button className="flex items-center">
              <img src={brangLogo} className="mr-3 h-14 w-14" alt="FlowBite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                HR Vision
              </span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/#">HR Vision</Footer.Link>
                <Footer.Link href="/#">My Services</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/#">Github</Footer.Link>
                <Footer.Link href="/#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="/#">Privacy Policy</Footer.Link>
                <Footer.Link href="/#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              HR VISION BD
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="/#" icon={BsFacebook} />
            <Footer.Icon href="/#" icon={BsInstagram} />
            <Footer.Icon href="/#" icon={BsTwitter} />
            <Footer.Icon href="/#" icon={BsGithub} />
            <Footer.Icon href="/#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
