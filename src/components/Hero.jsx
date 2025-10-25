import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* Hero content */}
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pb-28">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} className="text-yellow-500" />
            Tech-forward creative studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-6xl"
          >
            We craft brands and build high-performance web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
          >
            Branding. Design. Web development. AI automation. Content marketing. Everything you need to move with speed and confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              Explore services <Rocket size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 transition hover:-translate-y-0.5 hover:border-gray-400"
            >
              View portfolio
            </Link>
          </motion.div>
        </div>

        {/* 3D Spline scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[460px] w-full rounded-2xl border border-gray-200 bg-white/70 shadow-xl backdrop-blur md:h-[560px]"
        >
          <Spline
            scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Gentle gradient overlay to add depth without blocking interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
