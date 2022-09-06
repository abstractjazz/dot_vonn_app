/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'




export default function MainPage() {
  return (
    <section>
    <div className="relative">
       
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 pb-5 md:pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Dot Vonn</span>{' '}
              <span className="block text-[#ffc800ff] xl:inline">Web & Content</span>{' '}
              <span className="block xl:inline">Studio</span>{' '}
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-[#00ffff] hover:text-black md:py-4 md:px-10 md:text-lg"
                >
                  Sign Up
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-0 h-64 md:pb-5 w-screen flex justify-center sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-1/2 lg:mt-40 ">
          <Image
            className="absolute inset-0 h-1/2 w-screen object-fit flex rounded-md "
            src="/background.png"
            alt="geometric background pattern"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
    </section>
  )
}
