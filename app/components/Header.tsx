import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white p-4 flex justify-between items-center border-b-4 border-yellow-500 shadow-lg">
      <h1 className="text-4xl font-bold tracking-wider">Fantasy Crafter</h1>
      {/* <button className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600 transition transform hover:scale-105 shadow-md">
        Connect Wallet
      </button> */}
      <ConnectButton />
    </header>
  );
}
