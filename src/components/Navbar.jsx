import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600" />
          <span className="text-lg font-semibold tracking-tight text-gray-900">ServOn Digital</span>
        </NavLink>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/portfolio', label: 'Portfolio' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative transition hover:text-gray-900 ${isActive ? 'text-gray-900' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-gray-900"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
