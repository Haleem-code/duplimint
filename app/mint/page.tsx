"use client";
import React from "react";

const MintPage = () => {
  const handleMintButtonClick = () => {
    window.location.href =
      "https://staging.crossmint.com/collections/onchainnft-33/claim";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "400px", width: "100%" }}>
        <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
          Mint ChainMint NFT
        </h1>
        <p>copy password: onchainmint</p>
        <button
          style={{
            backgroundColor: "#2BB673", // Teal green color
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "2rem",
          }}
          onClick={handleMintButtonClick}
        >
          Mint NFT
        </button>
      </div>
    </div>
  );
};

export default MintPage;
