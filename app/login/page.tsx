"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider, signInWithPopup } from "../../firebase";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/create-wallet");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/create-wallet");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="logo">
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "20px", // Adjust font size for logo
          fontWeight: "bold",
        }}
      >
        <h1>🟢CHAINMINT🔘</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black-100">
        <h1 className="text-3xl font-bold mb-6">Login to ChainMint</h1>
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
