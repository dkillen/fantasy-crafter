import Header from './components/Header';
import MintingSection from './components/MintingSection';
import ForgingSection from './components/ForgingSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="flex-grow flex flex-col justify-center items-center p-6">
        {/* Minting Section */}
        <MintingSection />

        {/* Forging Section */}
        <ForgingSection />
      </main>
    </div>
  );
}
