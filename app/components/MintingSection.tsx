"use client";

import NFTCard from './NFTCard';

const mintableNFTs = [
  { id: 0, name: 'Raw Material A', image: '/images/raw-material-a.jpg', owned: 0 },
  { id: 1, name: 'Raw Material B', image: '/images/raw-material-b.jpg', owned: 0 },
  { id: 2, name: 'Raw Material C', image: '/images/raw-material-c.jpg', owned: 0 },
];

export default function MintingSection() {
  const handleGather = (id: number) => {
    console.log(`Gather NFT id: ${id}`);
    // Add any other logic you need here based on the id
  };

  return (
    <section className="w-full max-w-6xl mb-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#5d4037] border-b-4 border-[#5d4037] pb-2 shadow-md">
        Gather Materials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {mintableNFTs.map((nft) => (
          <NFTCard
            key={nft.id}
            id={nft.id} // Pass the id to the NFTCard
            name={nft.name}
            image={nft.image}
            isOwned={nft.owned}
            onActionClick={handleGather} // Use the id in the action handler
            actionText="Gather"
          />
        ))}
      </div>
    </section>
  );
}
