import { motion } from 'framer-motion';
import { Cpu, Palette, Bot, Megaphone, Globe, Code } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Identity',
    desc: 'Positioning, naming, visual systems, and design languages that scale across platforms.',
    gradient: 'from-pink-100 via-rose-100 to-amber-100',
  },
  {
    icon: Globe,
    title: 'Web Design',
    desc: 'Conversion-focused UX/UI with premium motion. Figma to production with pixel accuracy.',
    gradient: 'from-sky-100 via-cyan-100 to-indigo-100',
  },
  {
    icon: Code,
    title: 'Web Development',
    desc: 'Modern stacks, optimized performance, and robust infrastructure for reliability.',
    gradient: 'from-emerald-100 via-teal-100 to-green-100',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Chatbots, data pipelines, and workflow automation to scale your operations.',
    gradient: 'from-violet-100 via-fuchsia-100 to-purple-100',
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    desc: 'Narratives and campaigns that build trust, drive traffic, and convert.',
    gradient: 'from-amber-100 via-yellow-100 to-orange-100',
  },
  {
    icon: Cpu,
    title: 'Tech Advisory',
    desc: 'Architecture, audits, and roadmap planning to de-risk and accelerate delivery.',
    gradient: 'from-slate-100 via-zinc-100 to-gray-100',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">What we do</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            End-to-end creative and engineering
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            We blend brand strategy, design craft, and technical execution to ship experiences that perform.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${s.gradient} blur-2xl opacity-70`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gray-900">
                  Learn more
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
