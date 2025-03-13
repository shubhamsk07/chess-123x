  ```typescript
  import Link from 'next/link';
  import Image from 'next/image';

  const Landing = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Image
          src="/chess-logo.svg" // Replace with actual logo path
          alt="Chess App Logo"
          width={200}
          height={200}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">Welcome to Chess App</h1>
        <p className="text-lg mb-8">Play chess against the computer or a friend.</p>
        <Link href="/game" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Game
        </Link>
      </div>
    );
  };

  export default Landing;
  ```
  