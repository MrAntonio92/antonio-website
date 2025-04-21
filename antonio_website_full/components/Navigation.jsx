import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav className="bg-black text-white py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-pink-400 hover:text-yellow-300">
          Antonio Sardella
        </Link>
        <div className="flex space-x-6 text-lg">
          <Link href="/about" className="hover:text-pink-300">About</Link>
          <Link href="/services" className="hover:text-pink-300">Services</Link>
          <Link href="/portfolio" className="hover:text-pink-300">Portfolio</Link>
          <Link href="/booking" className="hover:text-pink-300">Book Me</Link>
          <Link href="/contact" className="hover:text-pink-300">Contact</Link>
        </div>
      </nav>

      <footer className="bg-black text-white py-6 px-6 text-center text-sm mt-12">
        <div className="space-y-2">
          <p>📸 Instagram (Fun & Personal): <a href="https://instagram.com/anto_sardella" className="underline text-pink-300" target="_blank">@anto_sardella</a></p>
          <p>📸 Instagram (Business & Pro): <a href="https://instagram.com/mrantoniosardella" className="underline text-pink-300" target="_blank">@mrantoniosardella</a></p>
          <p className="text-gray-500">© 2025 Antonio Sardella. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}