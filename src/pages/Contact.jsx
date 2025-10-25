import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ service: '', name: '', email: '', details: '' });

  const next = () => setStep((s) => Math.min(3, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just open a prefilled email. Backend can be wired later.
    const body = encodeURIComponent(
      `Service: ${form.service}\nName: ${form.name}\nEmail: ${form.email}\nDetails: ${form.details}`
    );
    window.location.href = `mailto:hello@servondigital.com?subject=Project%20Inquiry&body=${body}`;
  };

  return (
    <PageTransition>
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl font-semibold tracking-tight text-gray-900 md:text-6xl"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-gray-600 md:text-lg"
          >
            Start your project in three quick steps.
          </motion.p>

          <form onSubmit={onSubmit} className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
              <span className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-gray-900' : 'bg-gray-300'}`} />
              <span className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-gray-900' : 'bg-gray-300'}`} />
              <span className={`h-2 w-2 rounded-full ${step >= 3 ? 'bg-gray-900' : 'bg-gray-300'}`} />
            </div>

            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <label className="block text-sm font-medium text-gray-900">Choose a service</label>
                <select
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-gray-900 focus:outline-none"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                >
                  <option value="">Select…</option>
                  <option>Branding & Identity</option>
                  <option>Web Design</option>
                  <option>Web Development</option>
                  <option>AI Automation</option>
                  <option>Content Marketing</option>
                  <option>Tech Advisory</option>
                </select>
                <div className="mt-6 flex justify-end">
                  <button type="button" onClick={next} className="rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-900">Name</label>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900">Email</label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-900">Project details</label>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
                    rows={5}
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    required
                  />
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button type="button" onClick={back} className="rounded-full border border-gray-300 px-5 py-3 text-gray-900 hover:border-gray-400">
                    Back
                  </button>
                  <button type="button" onClick={next} className="rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
                    Next
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-sm text-gray-600">Review and submit</p>
                <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <p><span className="font-medium">Service:</span> {form.service || '-'}</p>
                  <p className="mt-1"><span className="font-medium">Name:</span> {form.name || '-'}</p>
                  <p className="mt-1"><span className="font-medium">Email:</span> {form.email || '-'}</p>
                  <p className="mt-1"><span className="font-medium">Details:</span> {form.details || '-'}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button type="button" onClick={back} className="rounded-full border border-gray-300 px-5 py-3 text-gray-900 hover:border-gray-400">
                    Back
                  </button>
                  <button type="submit" className="rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
                    Submit
                  </button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>
    </PageTransition>
  );
}
