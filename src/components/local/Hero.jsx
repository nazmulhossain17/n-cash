
const Hero = () => {
  return (
    <>
    <section className="bg-[#f2f2f2] py-12 md:py-24">
      <div className="container flex flex-col items-center gap-4 px-4 space-y-4 text-center md:gap-8 md:space-y-10 md:flex-row md:items-start md:px-10 lg:gap-12 xl:gap-16">
        <div className="order-1 w-full max-w-sm md:order-1 md:max-w-none md:w-1/2">
          <img
            alt="Image"
            className="mx-auto aspect-[4/3] rounded-lg overflow-hidden md:hidden object-cover"
            height="400"
            src="/placeholder.svg"
            width="600"
          />
          <img
            alt="Image"
            className="hidden aspect-[4/3] rounded-lg overflow-hidden md:block object-cover"
            height="400"
            src="https://cdn.dribbble.com/users/4438388/screenshots/8583900/media/1fb865d67f35cdbccf38a13c34799c92.jpg?resize=400x0"
            width="600"
          />
        </div>
        <div className="order-0 grid gap-4 md:order-0 md:gap-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
           Digital Wallet for everyone
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
            You're trusted digital Mobile Financial Service. We provide you with a secure, reliable and user
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero