"use client";
import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "@/assets/SCE.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card">
      {/* Top banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <ul className="flex justify-center gap-6">
          <li>
            <Link 
              href="/contact" 
              className="hover:text-amber-500 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="hover:text-amber-500 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              href="/customize" 
              className="hover:text-amber-500 transition-colors duration-300"
            >
              Customize Rugs
            </Link>
          </li>
        </ul>
      </div> 


      {/* Main header */}
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={"/"} className="flex-1 flex items-center">
            <Image src={Logo} alt="Logo" width={100} height={100} className="object-cover"/>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Shop Rugs</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold mb-2">By Collection</h4>
                      <ul className="space-y-2">
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">All Rugs</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Heritage Collection</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Amber Lewis</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">One-Of-A-Kind</NavigationMenuLink></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">By Style</h4>
                      <ul className="space-y-2">
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Traditional</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Contemporary</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Modern</NavigationMenuLink></li>
                        <li><NavigationMenuLink className="hover:text-white cursor-pointer">Vintage</NavigationMenuLink></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white cursor-pointer">
                  New Arrivals
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-white cursor-pointer">
                  Sale
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-6 w-[400px]">
                    <ul className="space-y-2">
                      <li><NavigationMenuLink className="hover:text-white cursor-pointer">Rug Guide</NavigationMenuLink></li>
                      <li><NavigationMenuLink className="hover:text-white cursor-pointer">Care & Maintenance</NavigationMenuLink></li>
                      <li><NavigationMenuLink className="hover:text-white cursor-pointer">Design Services</NavigationMenuLink></li>
                      <li><NavigationMenuLink className="hover:text-white cursor-pointer">Trade Program</NavigationMenuLink></li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right icons */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Link href={"/signin"}><User className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium hover:text-white">Shop Rugs</a>
              <a href="#" className="text-sm font-medium hover:text-white">New Arrivals</a>
              <a href="#" className="text-sm font-medium hover:text-white">Sale</a>
              <a href="#" className="text-sm font-medium hover:text-white">Resources</a>
              <div className="pt-4 border-t">
                <Input placeholder="Search rugs..." className="mb-2" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
