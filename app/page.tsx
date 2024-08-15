import Card from "./components/Card/Card";

const Page: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-20 bg-gray-50">
      <header className="flex flex-col items-center mb-8 text-center">
        <h1 className="text-6xl font-bold text-blue-500">🐋 Docker</h1>
        <h1 className="mt-6 text-3xl font-bold text-gray-600">
          Welcome to Your Dockerized Next.js Project 🚀
        </h1>
        <p className="mt-4 text-gray-600 text-md">
          Start building and deploying your Next.js app with Docker in minutes!
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card
          title="Quick Setup"
          content="Follow the simple steps in the documentation to get your Next.js app running inside Docker with ease."
        />
        <Card
          title="Dev Experience"
          content="Develop locally, build with Docker, and deploy to production effortlessly."
        />
        <Card
          title="Livecycle Integration"
          content="Streamline collaboration and testing using Livecycle integration."
          linkText="Learn more"
          linkHref="https://livecycle.io/"
        />
        <Card
          title="Build & Push"
          content="Easily push your Dockerized app to Docker Hub and share it anywhere."
          linkText="Docker Hub"
          linkHref="https://hub.docker.com/"
        />
      </div>

      <footer className="mt-20 text-center text-gray-500">
        <div className="text-sm text-center text-gray-400">
          Visit the link below to view the documentation and GitHub repository
        </div>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Navishh/nextjs-dockerized"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navish
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Page;
