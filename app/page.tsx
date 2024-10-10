'use client';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  holesky,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import Header from './components/Header';
import MintingSection from './components/MintingSection';
import ForgingSection from './components/ForgingSection';

const config = getDefaultConfig({
  appName: 'Fantasy Crafter',
  projectId: 'bc9a800ed2519e99f384f031b09975e0',
  chains: [sepolia, holesky],
  ssr: true,
});

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
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
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
