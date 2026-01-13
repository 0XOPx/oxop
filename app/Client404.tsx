"use client";

export default function Client404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-red-700 p-6">
      <h1 className="text-9xl font-black mb-4 text-red-600 drop-shadow-2xl">
        404
      </h1>
      <h2 className="text-5xl font-bold mb-8 text-red-700">
        Page Not Found
      </h2>
      <p className="text-2xl mb-12 text-center max-w-2xl text-red-600">
        We searched everywhere, we could not find this page.
      </p>
      <a
        href="/"
        className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl rounded-xl transition-all hover:scale-105 shadow-2xl"
      >
        Back to Home
      </a>
    </div>
  );
}
