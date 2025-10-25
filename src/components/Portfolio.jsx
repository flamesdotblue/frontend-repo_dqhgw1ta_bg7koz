import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NeuronX — AI SaaS Platform',
    tag: 'AI, SaaS',
    img: 'https://images.unsplash.com/photo-1534759846116-57968a6bfa6a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Aurora Commerce',
    tag: 'E-commerce',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Helix BioTech',
    tag: 'Healthcare, Branding',
    img: 'https://images.unsplash.com/photo-1559757175-08c5f8d05330?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Vantage Capital',
    tag: 'Finance, Web',
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse Fitness',
    tag: 'Lifestyle, Campaign',
    img: 'https://images.unsplash.com/photo-1571907480495-69ae5f58bd03?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const trackRef = useRef(null);

  // Auto-scroll carousel with smooth behavior
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let dir = 1;
    const id = setInterval(() => {
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 2) dir = -1;
      if (el.scrollLeft <= 2) dir = 1;
      el.scrollTo({ left: el.scrollLeft + dir * 2, behavior: 'smooth' });
    }, 40);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="work" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">Selected work</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            A portfolio built on outcomes
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg">
            Visual craft, performance, and measurable business impact.
          </p>
        </motion.div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[360px] w-[82%] shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:w-[520px]"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-800 shadow">
                  {p.tag}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white drop-shadow">{p.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
