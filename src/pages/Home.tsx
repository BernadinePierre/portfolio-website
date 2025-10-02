import { Linkedin, Github } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="w-64 h-64 bg-gray-200 rounded-sm overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGC8HEDFonYjA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725464754701?e=1762387200&v=beta&t=Vx6WQfP703gRNQhGvqiKst4WT0_pF3gxLgwLB4IK23w"
              alt="Bernadine Pierre"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-mono font-bold tracking-tight mb-2">
              &lt;BERNADINE PIERRE&gt;
            </h1>
            <p className="text-xl text-gray-600 font-mono">Data Engineer</p>
          </div>

          <button
            onClick={() => onNavigate('Contact')}
            className="w-full md:w-auto px-8 py-3 bg-black text-white font-mono text-sm hover:bg-gray-800 transition-colors"
          >
            Email me
          </button>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/bernadinep/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/BernadinePierre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h2 className="font-mono text-2xl font-bold mb-4">&lt;/About Me&gt;</h2>
              <p className="text-gray-700 leading-relaxed">
                I build data-driven solutions by combining hands-on experience in IT support,
                software development, and cloud infrastructure.
              </p>
            </div>

            <button
              onClick={() => onNavigate('Portfolio')}
              className="w-full px-6 py-3 border-2 border-black font-mono text-sm hover:bg-black hover:text-white transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => onNavigate('Blog')}
              className="w-full px-6 py-3 border-2 border-black font-mono text-sm hover:bg-black hover:text-white transition-colors"
            >
              Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
