"use client"

import * as React from "react"
import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

interface NFTItem {
  name: string
  image: string
  description?: {
    en: string
    tr: string
  }
  opensea_url: string
}

export default function Listing() {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [openModal, setOpenModel] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState<NFTItem>()
  const [listingResponse, setListingResponse] = React.useState({
    nfts: [] as NFTItem[],
  })

  const handleFetchNFTList = async () => {
    const response = await fetch("/api/nftList")
    const data = await response.json()
    data.nfts.sort((a: NFTItem, b: NFTItem) => {
      return a.name.localeCompare(b.name)
    })
    console.log(data)
    setListingResponse(data)
    setIsLoaded(true)
  }

  React.useEffect(() => {
    handleFetchNFTList()
  }, [])

  return isLoaded ? (
    <div id="collection">
      <Dialog open={openModal} onOpenChange={setOpenModel}>
        <DialogContent
          className={
            "max-w-screen max-h-screen overflow-y-scroll lg:max-h-[100vh] lg:max-w-[50vh]"
          }
        >
          <DialogHeader>
            <Image
              src={selectedItem?.image ?? ""}
              width={400}
              height={400}
              alt={""}
              quality={100}
              className="rounded-xl"
              style={
                {
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  WebkitUserDrag: "none",
                } as React.CSSProperties
              }
              priority
            />
            <br />
            <DialogTitle className="text-2xl font-semibold">
              {selectedItem?.name}
            </DialogTitle>
            <DialogDescription className="text-sm font-semibold">
              {selectedItem?.description?.en} <br /> <br />{" "}
              {selectedItem?.description?.tr}
            </DialogDescription>
          </DialogHeader>
          <DialogTitle>
            <Button
              style={{ width: "100%", height: "48px", alignContent: "center" }}
              className="rounded-lg bg-blue-800 hover:bg-blue-500 dark:text-white dark:hover:bg-blue-200 dark:hover:text-black"
              onClick={() => {
                window.open(selectedItem?.opensea_url)
              }}
            >
              <a
                href={selectedItem?.opensea_url}
                target="_blank"
                rel="noreferrer"
                style={{ width: "100%", height: "48px", alignContent: "center" }}
              >
                OpenSea
              </a>
            </Button>
          </DialogTitle>
          <DialogFooter>
            <DialogClose asChild>
              <div className="flex justify-center" style={{ width: "100%" }}>
                <Button
                  style={{
                    width: "50%",
                    height: "48px",
                    alignContent: "center",
                  }}
                  className="rounded-lg bg-gray-600 dark:text-white dark:hover:bg-gray-200 dark:hover:text-black"
                >
                  Close
                </Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="h-[100px]" />
      <h4 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        Collection ({listingResponse.nfts.length})
      </h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {listingResponse.nfts.map((item, index) => (
          <Card
            key={index}
            onClick={() => {
              setSelectedItem(item)
              setOpenModel(true)
            }}
          >
            <CardHeader>
              <Image
                src={item.image}
                width={400}
                height={400}
                alt={""}
                quality={100}
                className="rounded-xl"
                loading="lazy"
                style={
                  {
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    WebkitUserDrag: "none",
                  } as React.CSSProperties
                }
              />
              <br />
            </CardHeader>
            <CardContent>
              <CardTitle className="whitespace-nowrap">{item.name}</CardTitle>
            </CardContent>
            <CardFooter>
              <Button
                style={{
                  width: "100%",
                  height: "48px",
                  alignContent: "center",
                }}
                className="rounded-lg bg-blue-800 hover:bg-blue-500 dark:text-white dark:hover:bg-blue-200 dark:hover:text-black"
              >
                Show Detail
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  ) : (
    <div id="collection">
      <h4 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
        Collection
      </h4>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array(50)
          .fill(0)
          .map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <Skeleton className="width-full h-[190px] rounded-xl sm:h-[150px] md:h-[250px] xl:h-[270px]" />
                <br />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-[20px] w-full rounded-lg" />
                <br />
                <Skeleton className="h-[20px] w-full rounded-lg" />
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
}
