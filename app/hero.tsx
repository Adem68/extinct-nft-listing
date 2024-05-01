/* eslint-disable @next/next/no-img-element */
"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

var images = [
    "https://cdn.midjourney.com/d6b100d1-e9d3-4d50-977f-d058e468d4b7/0_3.webp?method=shortest&qst=6&quality=15",
    "https://cdn.midjourney.com/1b78c425-7b0f-4580-b715-fb5529334e8c/0_3.webp?method=shortest&qst=6&quality=15",
    "https://cdn.midjourney.com/f1bbc36d-4f54-4ab7-bb35-0bbd689ddd3d/0_0.webp?method=shortest&qst=6&quality=15",
    "https://cdn.midjourney.com/1110e367-534f-4592-86a1-1eb66d3f44cf/0_2.webp?method=shortest&qst=6&quality=15",
    "https://cdn.midjourney.com/1110e367-534f-4592-86a1-1eb66d3f44cf/0_0.webp?method=shortest&qst=6&quality=15"
]

export default function HeroSection() {
    return (
        <>
            <div id="hero-section" className="flex h-screen min-h-screen flex-col">
                <div className="h-[60vh] w-full justify-center">
                    <Carousel
                        className="h-[60vh] w-full rounded-2xl shadow-lg"
                        plugins={[
                            Autoplay({
                                delay: 5000,
                                stopOnInteraction: false,
                            }),
                        ]}
                        opts={{ loop: true }}
                    >
                        <CarouselContent>
                            {Array.from({ length: images.length }).map((_, index) => (
                                <CarouselItem key={index} className="relative h-[60vh] w-full rounded-2xl">
                                    <div className="absolute bottom-4 right-4 rounded-xl bg-black shadow-lg">
                                        <div className="mx-2 select-none font-semibold text-white">{index + 1}/{images.length}</div>
                                    </div>
                                    <img
                                        className="h-[60vh] w-full rounded-2xl object-cover object-top"
                                        src={`${images[index % images.length]}`}
                                        alt=""
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="mx-auto h-[20vh] max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">NFT of Extinct and Endangered Plants</h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
                        This project was designed to create an NFT of Extinct and Endangered Plants and to raise awareness of the importance of preserving our planet&apos;s biodiversity.
                    </p>
                </div>
            </div >

        </>
    )
}