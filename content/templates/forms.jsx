import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";


// Export statement
export { Field }

// Form field
function Field({ label, method, type, slugRoute }){

  const labelFiltered = label.replace(/\W/g, '')
  const router = useRouter()
  
  // Update param in URL
  const [paramText, setParamText] = useState('')
  const updateText = () => {
    let params = {...router.query}
    params[labelFiltered] = paramText

    if(mounted) {

      if(!params[labelFiltered]) {
        delete params[labelFiltered]
      }

      router.push(
        {
          pathname: slugRoute,
          query: params
        },
        undefined,
        {shallow: true}
      )
    }

  }

  // component did mount
  const [mounted, setMounted] = useState(false)
  const [defaultVal, setDefaultVal] = useState('')
  useEffect(()=>{
    setMounted(true)

    // initial value
    if (router.query[labelFiltered]){
      // setDefaultVal(decodeURI(router.query.labelFiltered))
    }
  },[])

  // Update state of text
  const updateState = e => {
    setParamText(encodeURI(e.target.value))
  }

  useEffect(()=>{
    updateText()
  }, [paramText])

  return(
    <div className="relative mb-6">
      <input type={type} id={labelFiltered} name={labelFiltered} placeholder=" " onKeyUp={updateState} autoComplete="off" className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                            ">{label}</label>
    </div>
  )
}
