import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-xl font-semibold mb-4">{t('footer.company')}</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Azizbe777" className="glass-card p-3 rounded-full hover:scale-110 transition-transform">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/aziz-norpulat-7a81ab308/" className="glass-card p-3 rounded-full hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </a>
              <a href="https://t.me/Only_dear" className="glass-card p-3 rounded-full hover:scale-110 transition-transform">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="story-link text-sm text-muted-foreground hover:text-foreground">{t('nav.home')}</a></li>
              <li><a href="#about" className="story-link text-sm text-muted-foreground hover:text-foreground">{t('nav.about')}</a></li>
              <li><a href="#services" className="story-link text-sm text-muted-foreground hover:text-foreground">{t('nav.services')}</a></li>
              <li><a href="#works" className="story-link text-sm text-muted-foreground hover:text-foreground">{t('nav.works')}</a></li>
              <li><a href="#blog" className="story-link text-sm text-muted-foreground hover:text-foreground">{t('nav.blog')}</a></li>
            </ul>
          </div>

          {/* Contact iiiInfo */}
          <div>
            <h4 className="font-medium mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>{t('footer.email')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>{t('footer.phone')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {t('footer.company')}. {t('footer.rights')}.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}