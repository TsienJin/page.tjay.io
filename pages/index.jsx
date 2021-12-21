import Head from 'next/head'
import { useRouter } from 'next/router'
import react, { useState, useEffect } from 'react'

import TemplateArr from '../content/index/templateArr'

import { InvoicePreview, ReceiptPreview, CoverPreview } from '../content/index/preview'




// Main Layout Function
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Page Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer />
    </div>
  )
}


// Main Body Content
function MainContainer(props) {

  const router = useRouter()
  const handleHome = e => {
    e.preventDefault()
    router.push('/')
  }

  const [currentExample, setCurrentExample] = useState('invoice')

  const updateSlug = newSlug => {
    setCurrentExample(newSlug)
  }

  const childPreview = () => {
    switch(currentExample){
      case 'invoice': return (<InvoicePreview />)
      case 'receipt': return (<ReceiptPreview />)
      case 'cover': return (<CoverPreview />)
      default: return (<InvoicePreview />)
    }
  }

  

  return(
    <main className="grid grid-cols-2 w-full min-h-screen">
      <div className="bg-blue-900 h-full">
        <div className="p-8 z-10 flex flex-row justify-between items-center sticky top-0">
          <a href="/" onClick={handleHome} className="text-xl font-bold text-white">Page</a>
          <a href={`/templates/${currentExample}`} className="text-md font-medium text-blue-900 px-3 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl">Create {currentExample}</a>
        </div>
        <LeftCol children={childPreview()}/>
      </div>
      <div className="pb-16">
        <RightCol updateSlug={updateSlug}/>
      </div>
    </main>
  )
}


function LeftCol({ children }){

  return(
    <div className="pt-6 flex flex-col justify-start items-center sticky top-28">
      <div className="bg-white p-6 rounded-xl shadow-2xl transition-all paper">
        {children}
      </div>
    </div>
  )
}

function RightCol({ updateSlug }){

  return(
    <div className="pt-32 px-16 flex flex-col justify-start items-center w-full">
      <div className="Title gap-y-4 flex flex-col pb-16">
        <h1 className="text-5xl font-bold text-black">Build documents for small businesses or personal use.</h1>
        <p className="text-3xl font-light text-black">Easy templates, just fill in the words.</p>
      </div>
      <TemplateArr updateSlug={updateSlug}/>
    </div>
  )
}