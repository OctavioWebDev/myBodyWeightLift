import { Suspense } from 'react';
import GymSuccessContent from './GymSuccessContent';

export default function GymSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
        </div>
      }
    >
      <GymSuccessContent />
    </Suspense>
  );
}