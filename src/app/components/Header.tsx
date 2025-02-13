import { Button } from "@/components/ui/button";
import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between w-full items-center" >
      <Logo />
      <Button variant="link" className="text-base p-8 desktop-content">Contáctame</Button>
    </header>
  );
};

export default Header;
