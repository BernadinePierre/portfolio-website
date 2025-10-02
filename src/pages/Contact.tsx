import { useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xwprbrne', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-mono font-bold mb-12 border-b-4 border-black pb-4">
          &lt;/Contact&gt;
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-mono font-bold text-xl mb-6">Get In Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              I'm always interested in hearing about new opportunities, collaborations, or just
              connecting with fellow data enthusiasts. Feel free to reach out!
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/in/bernadinep/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/BernadinePierre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            {isSubmitted && (
              <div className="mb-6 p-4 bg-black text-white font-mono text-sm">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-mono text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-black outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-black outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border-2 border-gray-300 focus:border-black outline-none transition-colors font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white font-mono text-sm hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
