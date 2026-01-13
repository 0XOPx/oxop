export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-[#f0f0f0] p-6">
      <h1 className="text-9xl font-black mb-4 text-[#ff00aa] drop-shadow-2xl">404</h1>
      <h2 className="text-5xl font-bold mb-8">Page Not Found</h2>
      <p className="text-2xl mb-12 text-center max-w-2xl">
        We searched everywhere, we could not find this page.
      </p>
      <a 
        href="/" 
        className="px-10 py-5 bg-[#ff00aa] hover:bg-[#cc0088] text-white font-bold text-2xl rounded-xl transition-all hover:scale-105 shadow-2xl"
      >
        Back to Home
      </a>
      <div className="mt-16 text-6xl animate-pulse opacity-50">♪ ♫ ♬</div>
    </div>
  );
}