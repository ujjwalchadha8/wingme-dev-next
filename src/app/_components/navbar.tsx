import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const state = false;

  // Replace https://unscurry.com path with your path
  const navigation = [
    { title: "Services", path: "/#features" },
    { title: "News", path: "/news" },
    { title: "Blogs", path: "/guides" },
    { title: "About us", path: "/about-us" },
    { title: "Contact us", path: "/contact-us" },
    { title: "Refer & Earn", path: "/refer-and-earn" },
  ]

  return (
    <>
      <nav className="relative items-center pt-3 pb-1 px-32 md:flex md:space-x-6 bg-[#fef9f6] border-b-2 w-full max-w-full">
        <div className="flex justify-between bg-[#fef9f6]">
          <a href="/">
            <Image
              src="/logo_title.png"
              width={220}
              height={100}
              alt="Unscurry logo"
            />
          </a>
          <button className="text-gray-500 outline-none md:hidden">
            {
              state ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )
            }
          </button>
        </div>
        <ul className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${state ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
          <div className="items-center space-y-5 md:flex md:space-x-8 md:space-y-0 md:ml-12 mt-2 text-lg">
            {
              navigation.map((item, idx) => (
                <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                  <Link  href={item.path}>{item.title}</Link>
                </li>
              ))
            }
          </div>
          <li className="order-2 py-5 md:py-0">
            <a href="https://unscurry.com" className="py-2 px-5 rounded-lg font-medium text-white text-center bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 block md:py-3 md:inline">
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}