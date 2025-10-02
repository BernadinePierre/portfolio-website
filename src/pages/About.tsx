export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-mono font-bold mb-8 border-b-4 border-black pb-4">
          &lt;/About Me&gt;
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800 leading-relaxed text-lg mb-6">
            I build data-driven solutions by combining hands-on experience in IT support, software
            development, and cloud infrastructure. With a background in supporting SaaS platforms
            and a recent Data Engineering, AI & Machine Learning bootcamp, I enjoy turning messy
            data into reliable insights.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-black pl-6">
              <h2 className="font-mono font-bold text-xl mb-3">Skills</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Data Engineering</li>
                <li>Machine Learning</li>
                <li>Cloud Infrastructure</li>
                <li>Software Development</li>
                <li>IT Support</li>
              </ul>
            </div>

            <div className="border-l-4 border-black pl-6">
              <h2 className="font-mono font-bold text-xl mb-3">Focus Areas</h2>
              <ul className="space-y-2 text-gray-700">
                <li>Data Pipeline Development</li>
                <li>AI/ML Integration</li>
                <li>SaaS Platform Support</li>
                <li>ETL Processes</li>
                <li>Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
