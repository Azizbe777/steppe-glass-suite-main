import { Globe, Menu, LogIn, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'tools', href: '#tools' },
  { key: 'works', href: '#works' },
  { key: 'price', href: '#price' },
  { key: 'blog', href: '#blog' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const LangSwitcher = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="glass" 
          size="sm"
          aria-label="Language" 
          className="h-8 w-8 rounded-full p-0 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <Globe size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-card backdrop-blur-xl bg-white/10 border border-white/20">
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('uz')}
          className="hover:bg-white/20 transition-colors duration-200"
        >
          {t('lang.uzbek')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('en')}
          className="hover:bg-white/20 transition-colors duration-200"
        >
          {t('lang.english')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => i18n.changeLanguage('ru')}
          className="hover:bg-white/20 transition-colors duration-200"
        >
          {t('lang.russian')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6">
      <nav className="mx-auto max-w-7xl mt-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl shadow-primary/20">
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src="/lovable-uploads/cf0318ce-2258-46f3-8a9f-4e23c6a5dad4.png" 
              alt="Steppe IT Logo" 
              className="h-10 w-10 transition-transform duration-500 hover:rotate-90"
            />
          </a>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.key} 
                href={item.href} 
                className="text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                {t(`nav.${item.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/80 to-white/40 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {LangSwitcher}
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-full px-4"
            >
              <LogIn size={16} className="mr-2" />
              {t('auth.login')}
            </Button>
            <Button 
              size="sm"
              className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white border border-white/30 hover:border-white/50 transition-all duration-300 rounded-full px-4 backdrop-blur-sm"
            >
              <Download size={16} className="mr-2" />
              {t('auth.install')}
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            {LangSwitcher}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Menu"
                  className="text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="backdrop-blur-xl bg-black/80 border-white/20">
                <div className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a 
                      key={item.key} 
                      href={item.href} 
                      onClick={() => setOpen(false)}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-lg font-medium"
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  ))}
                  <div className="flex flex-col gap-4 pt-6 border-t border-white/20">
                    <Button 
                      variant="ghost" 
                      className="text-white/90 hover:text-white hover:bg-white/10 justify-start"
                    >
                      <LogIn size={16} className="mr-2" />
                      {t('auth.login')}
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white border border-white/30 justify-start"
                    >
                      <Download size={16} className="mr-2" />
                      {t('auth.install')}
                    </Button>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
