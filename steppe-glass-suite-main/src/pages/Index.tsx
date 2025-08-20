import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Navbar } from '@/components/layout/Navbar';
import { BackgroundParallax } from '@/components/BackgroundParallax';
import { useToast } from '@/hooks/use-toast';

import {
  Code2, Cpu, Layers, Rocket, Wand2,
  Smartphone, Globe2, Palette, Cog, Link2, Wrench
} from 'lucide-react';
import { Tilt3D } from '@/components/effects/Tilt3D';
import { ProjectsCarousel } from '@/components/ProjectsCarousel';
import { Footer } from '@/components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const services = [
  { icon: Globe2, key: 'websites' },
  { icon: Code2, key: 'webapps' },
  { icon: Smartphone, key: 'mobile' },
  { icon: Layers, key: 'branding' },
  { icon: Palette, key: 'design' },
  { icon: Wand2, key: 'ai' },
  { icon: Link2, key: 'n8n' },
  { icon: Cpu, key: 'saas' },
  { icon: Wrench, key: 'mechanical' },
];

const technologies = [
  ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Python'],
  ['Docker', 'Kubernetes', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL', 'Figma', 'n8n']
];

export default function Index() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      username: formData.get("username"),
      message: formData.get("message"),
    };

    const text = `
📩 Yangi xabar keldi!

👤 Ism: ${data.firstName}
👤 Familiya: ${data.lastName}
📧 Email: ${data.email}
📞 Telefon: ${data.phone}
💻 Foydalanuvchi: ${data.username}
📝 Xabar: ${data.message}
`;

    try {
      await fetch(`https://api.telegram.org/bot8012308771:AAGaMvQuqylGZ-ETvRR5p9SbhxW9MUcCGgE/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "-1002614300697",
          text,
        }),
      });
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Telegram error:", err);
      toast({ title: "Xato", description: "Xabar yuborishda muammo bo‘ldi." });
    } finally {
      setLoading(false);
    }
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Steppe IT Company',
    url: '/',
    sameAs: [],
  };

  return (
    <div>
      <BackgroundParallax />
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="relative pt-36 pb-24">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <motion.div {...fadeIn} className="mx-auto glass-card rounded-3xl p-8 md:p-10">
              <h1 className="font-heading text-3xl md:text-5xl font-semibold tracking-tight">
                {t('hero.headline')}
              </h1>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                {t('hero.subheadline')}
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button variant="hero" className="rounded-full px-6 py-5">{t('hero.ctaDemo')}</Button>
                <a href="#services" className="story-link">{t('hero.ctaServices')}</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn}>
              <h2 className="font-heading text-2xl md:text-3xl mb-3">{t('about.title')}</h2>
              <div className="text-muted-foreground whitespace-pre-line">{t('about.copy')}</div>
            </motion.div>
            <motion.div {...fadeIn} className="glass-card min-h-60 md:min-h-80 rounded-3xl overflow-hidden">
              <video
                src="/photo/ls.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-8">{t('services.title')}</motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ icon: Icon, key }) => (
                <Tilt3D key={key}>
                  <motion.div {...fadeIn} className="glass-card p-6 rounded-2xl">
                    <Icon className="mb-3" />
                    <div className="font-medium">{t(`services.items.${key}`)}</div>
                    <p className="text-sm text-muted-foreground mt-1">{t(`services.descriptions.${key}`)}</p>
                  </motion.div>
                </Tilt3D>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-6">{t('tools.title')}</motion.h2>
            <div className="space-y-4">
              {technologies.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                  {row.map((tool) => (
                    <Tilt3D key={tool} scale={1.05} intensity={8}>
                      <div className="glass-card px-4 py-3 rounded-xl text-center text-sm font-medium">
                        {tool}
                      </div>
                    </Tilt3D>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-6">{t('works.title')}</motion.h2>
            <ProjectsCarousel />
          </div>
        </section>

        {/* PRICE */}
        <section id="price" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-8">{t('price.title')}</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: t('price.basic'), price: '$500+' },
                { name: t('price.standard'), price: '$1000+' },
                { name: t('price.premium'), price: '$2000+' },
              ].map((p) => (
                <Tilt3D key={p.name}>
                  <Card className="glass-card rounded-2xl">
                    <CardHeader>
                      <CardTitle>{p.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-semibold">{p.price}</div>
                      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <li>Design + Development</li>
                        <li>CI/CD & Monitoring</li>
                        <li>QA & Documentation</li>
                      </ul>
                      <Button
                        variant="hero"
                        className="mt-6 w-full rounded-full"
                        onClick={() =>
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {t('price.cta')}
                      </Button>
                    </CardContent>
                  </Card>
                </Tilt3D>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-8">{t('blog.title')}</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Tilt3D key={i}>
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <img src="/photo/az.png" alt={`Blog ${i}`} loading="lazy" className="w-full h-40 object-cover" />
                    <div className="p-5">
                      <div className="font-medium mb-1">How we build resilient systems</div>
                      <p className="text-sm text-muted-foreground mb-3">Patterns, trade-offs, and pragmatic tooling.</p>
                      <a className="story-link text-sm" href="#">{t('blog.readMore')}</a>
                    </div>
                  </div>
                </Tilt3D>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 pb-28">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
            <div>
              <motion.h2 {...fadeIn} className="font-heading text-2xl md:text-3xl mb-6">{t('contact.title')}</motion.h2>
              <form onSubmit={onSubmit} className="glass-card rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="firstName" placeholder={t('contact.firstName')!} required />
                <Input name="lastName" placeholder={t('contact.lastName')!} />
                <Input name="email" placeholder={t('contact.email')!} type="email" required className="sm:col-span-2" />
                <Input name="phone" placeholder={t('contact.phone')!} className="sm:col-span-2" />
                <Input name="username" placeholder={t('contact.username')!} />
                <Textarea name="message" placeholder={t('contact.message')!} className="sm:col-span-2 min-h-28" />

                <div className="sm:col-span-2 flex items-center gap-4">
                  <Button type="submit" variant="hero" disabled={loading} className="rounded-full px-6 py-5">
                    {loading ? "Yuborilmoqda..." : t('contact.submit')}
                  </Button>

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-green-500 font-medium"
                    >
                      ✅ Yuborildi!
                    </motion.div>
                  )}
                </div>
              </form>
            </div>

            <div className="glass-card rounded-2xl min-h-80">
              <iframe
                title="Map"
                className="w-full h-full rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.6146688472795!2d67.83794801157623!3d40.12858997136846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b2953195dc5f9b%3A0x7da67bc7e1866b4!2sJizzax%20Yoshlar%20Texnoparki!5e0!3m2!1sen!2s!4v1755649519545!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </div>
  );
}
