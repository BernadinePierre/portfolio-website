import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import BlogPost from './pages/BlogPost';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    document.title = `${currentPage === 'Home' ? 'Bernadine Pierre Portfolio Website' : `${currentPage} | Bernadine Pierre Portfolio Website`}`;
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (currentPage.startsWith('Project-')) {
      const projectId = parseInt(currentPage.replace('Project-', ''));
      return <ProjectDetail projectId={projectId} onNavigate={handleNavigate} />;
    }

    if (currentPage.startsWith('BlogPost-')) {
      const postId = parseInt(currentPage.replace('BlogPost-', ''));
      return <BlogPost postId={postId} onNavigate={handleNavigate} />;
    }

    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'Blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
