import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const values = [
  { title: 'Clarity', desc: 'Strategy before screens. We align on outcomes, then design and ship fast.' },
  { title: 'Craft', desc: 'Premium motion, pristine typography, and scalable systems are non‑negotiable.' },
  { title: 'Performance', desc: 'We obsess over speed and stability. Experiences should feel instant.' },
];

export default function About() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-200 via-sky-200 to-indigo-200 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gradient-to-tr from-rose-200 via-fuchsia-200 to-purple-200 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-3xl text-gray-600 md:text-lg"
          >
            ServOn Digital is a tech-savvy creative studio. We merge brand, product design, and engineering with AI‑native thinking. The result: experiences that feel inevitable—clean, confident, and unmistakably modern.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-gray-600">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Timeline</h3>
            <ol className="mt-6 space-y-6">
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gray-900" />
                <p className="font-medium text-gray-900">2019 — Founded</p>
                <p className="text-gray-600">Started with brand systems and motion‑driven web experiences.</p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gray-900" />
                <p className="font-medium text-gray-900">2021 — Engineering at scale</p>
                <p className="text-gray-600">Expanded into complex web apps with performance at the core.</p>
              </li>
              <li className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gray-900" />
                <p className="font-medium text-gray-900">2023 — AI‑native</p>
                <p className="text-gray-600">Integrated automation and AI chat experiences into client stacks.</p>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
