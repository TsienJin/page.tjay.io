import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='hidden lg:block'>
        <Component {...pageProps} />
      </div>
      <div className='flex lg:hidden flex-col justify-center items-center w-full h-[100dvh]'>
        <span className='text-medium font-mono p-4'>
          Mobile devices are not supported yet. <br/>
          Sorry about that!
        </span>
      </div>
    </>
  )
}

export default MyApp
