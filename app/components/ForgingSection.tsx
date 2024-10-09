"use client";

import NFTCard from './NFTCard';

const forgedNFTs = [
  {
    id: 3,
    name: 'Crafted Item 1',
    image: '/images/crafted-item-1.jpg',
    owned: 0,
    requirements: [
      { id: 0, owned: 0 },
      { id: 1, owned: 0 },
    ],
  },
  {
    id: 4,
    name: 'Crafted Item 2',
    image: '/images/crafted-item-2.jpg',
    owned: 0,
    requirements: [
      { id: 1, owned: 0 },
      { id: 2, owned: 0 },
    ],
  },
  {
    id: 5,
    name: 'Crafted Item 3',
    image: '/images/crafted-item-3.jpg',
    owned: 0,
    requirements: [
      { id: 0, owned: 0 },
      { id: 2, owned: 0 },
    ],
  },
  {
    id: 6,
    name: 'Master Crafted Item',
    image: '/images/master-crafted-item.jpg',
    owned: 0,
    requirements: [
      { id: 0, owned: 0 },
      { id: 1, owned: 0 },
      { id: 2, owned: 0 },
    ],
  },
];

export default function ForgingSection() {
  const handleCraft = (id: number) => {
    console.log(`Craft NFT id: ${id}`);
    // Add any other logic you need here based on the id
  };

  return (
    <section className="w-full max-w-6xl">
      <h2 className="text-4xl font-bold text-center mb-8 text-[#5d4037] border-b-4 border-[#5d4037] pb-2 shadow-md">
        Craft Items
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {forgedNFTs.map((nft) => (
          <NFTCard
            key={nft.id}
            id={nft.id} // Pass the id to the NFTCard
            name={nft.name}
            image={nft.image}
            isOwned={nft.owned}
            onActionClick={handleCraft} // Use the id in the action handler
            actionText="Craft"
            requirements={nft.requirements}
          />
        ))}
      </div>
    </section>
  );
}
