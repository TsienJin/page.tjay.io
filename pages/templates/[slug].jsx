import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Invoice, InvoiceFields } from "../../content/mockup/invoice";



export default function MainContainer({ query }) {

    const router = useRouter()

    const handleHome = e => {
      e.preventDefault()
      router.push('/')
    }

    return(
      <main className="grid grid-cols-2 w-full min-h-screen">
        <div className="bg-blue-900 h-full">
          <div className="p-8 z-10 flex flex-row justify-between items-center sticky top-0">
            <a href="/" onClick={handleHome} className="text-xl font-bold text-white">Page</a>
            <a href={`/templates/${query.slug}`} className="text-md font-medium text-blue-900 px-3 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl">Download {query.slug}</a>
          </div>
          <LeftCol children={"Hi"} query={query} />
        </div>
        <div className="pb-16">
          <RightCol slugRoute={query.slug} query={query} />
        </div>
      </main>
    )
  }


function LeftCol({ children, query }){
  const router = useRouter()

  return(
    <div className="pt-6 flex flex-col justify-start items-center sticky top-28">
      <div className="bg-white p-6 rounded-xl shadow-2xl transition-all paper">
        <Invoice query={query} />
      </div>
    </div>
  )
}

function RightCol({ slugRoute, query }){

  return(
    <div className="pt-32 px-16 flex flex-col justify-start items-center">
      <div className="Title gap-y-4 flex flex-col pb-16 w-full">
        <h1 className="text-5xl font-bold text-black">Template for {slugRoute}.</h1>
        <p className="text-3xl font-light text-black">Just fill in the words.</p>
      </div>
      <InvoiceFields slugRoute={slugRoute} query={query} />
    </div>
  )
}




export async function getServerSideProps({ query }){

  return {
    props: {
      query: query,
    }
  }
}