import React from "react";
import Input from "./Input";
import Menu from "./Menu";
import { menuOptions } from "../config/menuConfig";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-between bg-green-primary fixed top-0 z-10">
      <div className="flex">
        <Menu options={menuOptions} />
        <Input placeholder="So'z qidirish..." />
      </div>
      <Link to="/login">
        <Button className="text-lg text-white active:hover:text-black active:hover:bg-gray-300">
          <p>Kirish</p>
        </Button>
      </Link>
    </div>
  );
};

export default Header;
