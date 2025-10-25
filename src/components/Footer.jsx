import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-gray-200 bg-white/70 py-16 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">
              Ready to build something unforgettable?
            </h3>
            <p className="mt-3 max-w-xl text-gray-600">
              Tell us about your goals and we’ll propose a tailored roadmap across brand, product, and growth.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href="mailto:hello@servondigital.com?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800"
            >
              <Mail size={18} /> hello@servondigital.com
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Back to top <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} ServOn Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
