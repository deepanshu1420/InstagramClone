// src/components/layout/GitHubLink.tsx
import GitHubIcon from './GitHubIcon';

const GitHubLink = () => {
  return (
    <a
      href="https://github.com/deepanshu1420/InstagramClone.git"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Repository"
      className="hidden sm:flex fixed bottom-8 right-14 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <GitHubIcon />
    </a>
  );
};

export default GitHubLink;
