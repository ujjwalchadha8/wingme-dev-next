import Image from "next/image"

export const Me = () => {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-center">
          <Image
            src="/dp.jpg"
            height={200}
            width={200}
            className="object-cover object-center shadow-md rounded-full"
            alt=""
          />
        </div>
      </section>
    </>
  )
}
