import type { NextApiRequest, NextApiResponse } from "next"

import listingResponse from "./listings.json"

type ResponseData = {
  nfts: {
    name: string
    image: string
    description?: {
      en: string
      tr: string
    }
    opensea_url: string
  }[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    var data = listingResponse
    for (var nft of data.nfts) {
        nft.opensea_url = `https://opensea.io/assets/matic/0xd6ef91b821c98016fe397572639f0596228e01ef/${nft.index}`
    }

    res.status(200).json(data as ResponseData)
}
