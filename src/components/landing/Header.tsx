'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import BobaPearlIcon from '../icons/BobaPearlIcon';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const messengerLink = 'https://m.me/pinoyentrepreneur.me?ref=webdev_order_header';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call on mount to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#locations', label: 'Lokasyon' },
    { href: '#reviews', label: 'Reviews' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BobaPearlIcon className="h-7 w-7 text-primary" />
            <span className="text-xl font-headline">Tambay Tea</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
                <Link href={messengerLink} target="_blank" rel="noopener noreferrer">Quick Chat Order</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  <Link href="/" className="flex items-center gap-2 font-bold">
                     <BobaPearlIcon className="h-7 w-7 text-primary" />
                    <span className="text-xl font-headline">Tambay Tea</span>
                  </Link>
                  <nav className="grid gap-2 text-lg font-medium">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-foreground/80 hover:text-primary transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <Button asChild size="lg" className="w-full">
                    <Link href={messengerLink} target="_blank" rel="noopener noreferrer">Quick Chat Order</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
