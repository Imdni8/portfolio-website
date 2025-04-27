import * as React from "react";
import { Menu } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Logo } from "./Logo";

interface MobileNavProps {
  currentPath: string;
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { href: "/", label: "PROJECTS" },
    { href: "/essays", label: "ESSAYS" },
    { href: "/about", label: "ABOUT ME" }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.href === window.location.href) {
      e.preventDefault();
    }
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild className="md:hidden">
        <button 
          aria-label="Open navigation menu" 
          title="Open navigation menu"
          className="p-2 -mr-2 hover:bg-accent/50 rounded-md transition-colors"
        >
          <Menu className="size-6 text-primary" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[360px] bg-accent">
        <div className="flex flex-col items-center pt-8 pb-6">
          <Logo size={64} className="mb-4" />
          <div className="w-full px-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavigation}
                className={`block w-full text-center py-3 px-4 rounded-md font-sans text-[16px] transition-all duration-200 ${
                  currentPath === link.href 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-accent hover:bg-primary/90 hover:text-primary-foreground border border-primary/20"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}