import Head from 'next/head'
import NavBar from '~/components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sampaguita</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full h-screen bg-[#3D4451]">
        <NavBar />
        <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
          <span className="font-bold text-3xl text-gray-200">
            Welcome to&nbsp;
            <span className="text-3xl font-bold">
              Samp<span className="text-gray-400">Ag</span>uita
            </span>
          </span>
          <span className="font-black text-5xl text-gray-200 text-center">
            Your Periodic Table Assistant
          </span>
          <span className="font-normal text-xl text-gray-400 text-center w-full max-w-xl">
            Practicing realtime web application using Next JS, SWR and Prisma ORM, anyone can add, update and delete all of the data here, enjoy your day. View source code on the link <code><a href="https://github.com/VeoScript/sampaguita" target="_blank" rel="noreferrer" className="text-white hover:underline">https://github.com/VeoScript/sampaguita</a></code>
          </span>
        </div>
      </div>
    </>
  )
}
