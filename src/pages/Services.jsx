import PageTransition from '../components/PageTransition';
import ServicesGrid from '../components/Services';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <PageTransition>
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-2xl text-gray-600 md:text-lg"
          >
            From brand systems to production-grade engineering and AI automation—tailored to your roadmap.
          </motion.p>
        </div>
      </section>
      <ServicesGrid />
    </PageTransition>
  );
}
