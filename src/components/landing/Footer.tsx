import { Facebook, Instagram, Twitter } from 'lucide-react';
import BobaPearlIcon from '../icons/BobaPearlIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <BobaPearlIcon className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-headline">Tambay Tea</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          © {new Date().getFullYear()} Tambay Tea. Tara, tambay tayo!
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
