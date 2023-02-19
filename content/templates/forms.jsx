import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// Import statment
import ProductContainer, { ProductItem } from "./formsProduct";

// Export statement
export { Container, Field, TextArea, Product }

// Section grouping for child fields
function Container({children, name}){

  return(
    <section className="flex flex-col mb-8 select-none">
      <h6 className="text-2xl font-semibold capitalize w-fit text-gray-700">{name}</h6>
      <div className="mt-8">
        {children}
      </div>
    </section >
  )
}

// Form field (Single line text)
function Field({ label, method, defaultText, type='text', slugRoute }){

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
  const [loaded, setLoaded] = useState(false)
  const [defaultVal, setDefaultVal] = useState('')
  const [text, setText] = useState('')
  useEffect(()=>{
    setMounted(true)
  },[])


  // Update state of text
  const updateState = e => {
    setParamText(encodeURI(e.target.value))
  }

  useEffect(()=>{
    updateText()
  }, [paramText])

  // Date logic
  const [invDate, setInvDate] = useState('0000-00-00')
  const [dueDate, setDueDate] = useState('9999-99-99')
  const [minDate, setMinDate] = useState('0000-00-00')
  const [maxDate, setMaxDate] = useState('9999-99-99')

  return(
    <div className="relative mb-6">
      <input type={type} id={labelFiltered} name={labelFiltered} placeholder=" " defaultValue={defaultText==='undefined'?'':defaultText}
      onChange={updateState} autoComplete="off" min={minDate} max={maxDate}
      className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                            peer-placeholder-shown:hover:cursor-text
                            ">{label}</label>
    </div>
  )
}

// Rich text area
function TextArea({ label, defaultText, slugRoute }){
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
  const [loaded, setLoaded] = useState(false)
  const [defaultVal, setDefaultVal] = useState('')
  const [text, setText] = useState('')
  useEffect(()=>{
    setMounted(true)
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
      <textarea id={labelFiltered} name={labelFiltered} placeholder=" " defaultValue={defaultText==='undefined'?'':defaultText}
      onChange={updateState} autoComplete="off"
      className="peer h-16 w-full pt-2 border-b-2 pb-2 bg-white transition-colors focus:outline-none border-gray-200 focus:border-blue-400"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                            peer-placeholder-shown:bg-transparent
                            ">{label}</label>
    </div>

  )
}

// Product
function Product({ label, defaultText, slugRoute }){

  
  return(
    <>
      <ProductContainer defaultString={defaultText}/>
    </>
  )

}