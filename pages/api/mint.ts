// pages/api/mint.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Your logic to call Crossmint API to mint the NFT
    // Example:
    // const response = await fetch(crossmintApiUrl, options);
    // const data = await response.json();

    return res.status(200).json({
      message: "NFT minted successfully",
      tokenId: "",
    });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
