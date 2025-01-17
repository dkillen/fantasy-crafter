"use client";

interface NFTCardProps {
  id: number; // Keep the id prop if you want to use it
  name: string;
  image: string;
  isOwned: number;
  onActionClick: (id: number) => void; // Use id in the action
  actionText: string;
  requirements?: { id: number; owned: number }[];
}

export default function NFTCard({
  id, // You can use this for tracking purposes
  name,
  image,
  isOwned,
  onActionClick,
  actionText,
  requirements,
}: NFTCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-800 via-purple-900 to-black border-4 border-yellow-500 rounded-lg p-4 w-64 text-center flex flex-col justify-between shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div>
        <p className="text-2xl font-bold mb-2 text-yellow-400">{name}</p>
        <div className="h-40 bg-gray-300 rounded mb-4 shadow-inner">
          <img src={image} alt={name} className="h-full w-full object-cover rounded" />
        </div>
        <p className="text-lg font-bold mb-2 text-white">{isOwned} NFTs Owned</p>
        {requirements && (
          <div className="mb-2">
            <p className="text-yellow-300">Requires:</p>
            {requirements.map((req) => (
              <p key={req.id} className="text-yellow-400">
                1 x id {req.id} ({req.owned} Owned)
              </p>
            ))}
          </div>
        )}
      </div>
      {/* Use the id in the onClick handler */}
      <button
        onClick={() => onActionClick(id)} // Pass the id to the parent when clicked
        className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition transform hover:scale-110 shadow-md"
      >
        {actionText}
      </button>
    </div>
  );
}
