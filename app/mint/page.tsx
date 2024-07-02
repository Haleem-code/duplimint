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
        flexDirection: "column",
        minHeight: "100vh",
        padding: "20px",
        position: "relative",
      }}
    >
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "400px", width: "100%" }}>
          <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
            Mint ChainMint NFT
          </h1>
          <img
            src="/barcode.png"
            alt="Mint ChainMint NFT"
            style={{
              width: "150px",
              height: "150px",
              marginBottom: "1rem",
              display:"inline",
              alignItems: "center",
            }} // Adjust size as needed
          />
          <p style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
            SCAN TO MINT🔼
          </p>
          <p style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
            copy password: onchainmint
          </p>
          <button
            style={{
              backgroundColor: "#2BB673", // Teal green color
              color: "white",
              padding: "12px 24px",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "1rem",
            }}
            onClick={handleMintButtonClick}
          >
            Mint NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintPage;
