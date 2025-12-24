export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="w-16 h-16 bg-yellow-500 rounded-full mb-4"></div>
        <div className="text-yellow-500 text-lg font-semibold">Loading Coaching Services...</div>
      </div>
    </div>
  );
}
