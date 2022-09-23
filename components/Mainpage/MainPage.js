/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import ReactPlayer from 'react-player'




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
            For everyday entrepreneurs who do business outside the box. We're a network of creatives, technologists and strategists dedicated to helping you grow – and look good while you do it.
            </p>
            <div className="mt-10 sm:flex sm:justify-center md:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center border-2 border-black px-8 py-3 text-base font-medium text-black hover:bg-[#ffc800ff] hover:text-black md:py-4 md:px-10 md:text-lg "
                >
                  Get Access 
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                {/* <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Sign In
                </a> */}
              </div>
            </div>
          </div>
        </div>
        
        
      <div className="vid-box mt-0 w-screen h-96 flex justify-center lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-1/2 lg:mt-40">
        
            <video className="absolute w-[100%] md:h-96 lg:w-[75%] lg:inset-0 sm:w-screen  "  alt="fast paced video of example content and websites" muted="true" autoPlay="autoplay" loop="loop">
              <source src="https://ik.imagekit.io/a9ltbtydo/sizzle-video/reduced_file.mp4" type="video/mp4"></source>
            </video>
        </div>
      </main>
    </div>
    </section>
  )
}
