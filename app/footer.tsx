import { siteConfig } from "@/config/site"

export default function Footer() {
    return (
        <>
            <footer className="p-4 md:p-8 lg:p-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white">
                        {siteConfig.name}
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">This project was designed to create an NFT of Extinct and Endangered Plants and to raise awareness of the importance of preserving our planet&apos;s biodiversity.</p>
                    <ul className="mb-6 flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2022 - {new Date().getFullYear()} <a href="#" className="hover:underline">{siteConfig.name}</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}