import Link from "next/link";
import GuideDataFetcher from "../data/GuideDataFetcher"
import Image from "next/image";

export const Blogs = async () => {

  const guidesMeta = (await GuideDataFetcher.fetchAllGuidesMetadata()).splice(0, 4);

  return (
    <>
      <section className="py-32">
        <div className="max-w-screen-xl mx-auto pr-4 pl-4 ml-4 md:pr-8 md:pl-10 md:ml-10 border-l-2">
          <div className="space-y-4 sm:text-center sm:max-w-md sm:mx-auto">
            <h1 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">Blogs</h1>
            <p><Link href="/guides" className="text-gray-600">View All</Link></p>
            {/*
            <form className="items-center justify-center gap-3 sm:flex">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                />
              </div>
              <button className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:mt-0 sm:w-auto">
                Subscribe
              </button>
            </form> */}
          </div>
          <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-2">
            {
              guidesMeta.map((items, key) => (
                <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                  <Link href={`/guides/${items.fileName}`}>
                    <img src={items.imageUrl ?? ""} loading="lazy" alt={items.name} className="w-full rounded-lg" />
                    <div className="mt-3 space-y-2">
                      <span className="block text-indigo-600 text-sm">{items.author[0]}</span>
                      <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                        {items.name}
                      </h3>
                      {/* <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.description}</p> */}
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </>
  )
}