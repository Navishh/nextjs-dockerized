import Image from "next/image";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <header className="flex flex-col items-center mb-8 text-center">
        <Image
          src="/logo2.svg"
          alt="Docker Logo"
          width={100}
          height={100}
          priority
        />
        <h1 className="mt-4 text-4xl font-bold text-gray-900">
          Welcome to Your Dockerized Next.js Project 🚀
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Start building and deploying your Next.js app with Docker in minutes!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Quick Setup
          </h2>
          <p className="text-gray-600">
            Follow the simple steps in the documentation to get your Next.js app
            running inside Docker with ease.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Dev Experience
          </h2>
          <p className="text-gray-600">
            Develop locally, build with Docker, and deploy to production
            effortlessly.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Livecycle Integration
          </h2>
          <p className="text-gray-600">
            Streamline collaboration and testing using Livecycle integration.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Build & Push
          </h2>
          <p className="text-gray-600">
            Easily push your Dockerized app to Docker Hub and share it anywhere.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-center text-gray-500">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://medium.com/@itsuki.enjoy"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Navish
          </a>
        </p>
      </footer>
    </main>
  );
};

export default page;
