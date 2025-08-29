// src/components/layout/footer.tsx
import GitHubLink from './GitHubLink';
import GitHubIcon from './GitHubIcon';

const Footer = () => {
  const links = [
    'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations',
    'Instagram Lite', 'Threads', 'Contact Uploading & Non-Users', 'Meta Verified',
  ];

  return (
    <footer className="w-full py-8 text-center relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-gray-500 dark:text-gray-400 hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400">
          <span>English</span>
          <span>© 2025 Instagram from Meta</span>

          {/* Mobile GitHub icon inline */}
          <a
            href="https://github.com/deepanshu1420/InstagramClone.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="sm:hidden inline-flex items-center ml-2 text-black dark:text-white"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      {/* Desktop floating GitHub button */}
      <GitHubLink />
    </footer>
  );
};

export default Footer;
