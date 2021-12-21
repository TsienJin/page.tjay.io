import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Field } from "../../content/templates/forms";


export default function MainContainer(props) {

    const router = useRouter()

    const handleHome = e => {
      e.preventDefault()
      router.push('/')
    }

    const { slug } = router.query

    return(
      <main className="grid grid-cols-2 w-full min-h-screen">
        <div className="bg-blue-900 h-full">
          <div className="p-8 z-10 flex flex-row justify-between items-center sticky top-0">
            <a href="/" onClick={handleHome} className="text-xl font-bold text-white">Page</a>
            <a href={`/templates/${slug}`} className="text-md font-medium text-blue-900 px-3 py-2 bg-white rounded-xl shadow-lg transition-all hover:shadow-xl">Download {slug}</a>
          </div>
          <LeftCol children={"Hi"}/>
        </div>
        <div className="pb-16">
          <RightCol slugRoute={slug} />
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

function RightCol({ slugRoute }){

  return(
    <div className="pt-32 px-16 flex flex-col justify-start items-center">
      <div className="Title gap-y-4 flex flex-col pb-16 w-full">
        <h1 className="text-5xl font-bold text-black">Template for {slugRoute}.</h1>
        <p className="text-3xl font-light text-black">Just fill in the words.</p>
      </div>
      <div className="w-full">
        <Field label={"label"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label2"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label3"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label4"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label5"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label6"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label7"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label8"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label9"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label10"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label11"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
        <Field label={"label12"} type={"text"} slugRoute={`/templates/${slugRoute}`}/>
      </div>
    </div>
  )
}

