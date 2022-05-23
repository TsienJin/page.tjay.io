import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { route } from "next/dist/server/router"


///////////////
// Product class object
///////////////

export default class product {
  name=''
  price=0
  quantity=0
  id=''

  constructor({name='', price=0, quantity=0, id=Math.random().toString(36).slice(2,18)}){
    this.id = id
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  // public class methods

  get data(){

    return(
      {
        _id: this.id,
        name: this.name,
        price: this.price,
        quantity: this.quantity
      }
    )
  }

  get field(){

    // router
    const router = useRouter()
    const params = {...router.query}

    // Methods to update state of product
    const _prodName = e => {
      this.name = e.target.value
    }

    const _price = e => {
      const val = e.target.value
      this.price = parseFloat(val).toFixed(2)
    }

    const _quantity = e => {
      this.quantity = e.target.value
    }



    // JSX component
    return(
      <div className="flex flex-col w-full">
        <ProductName name={"Product Name"} method={_prodName}/>
        <div className="flex flex-row justify-between gap-x-4">
          <div className="flex flex-row gap-x-4">
            <ProductPrice name={"Price"} method={_price} />
            <ProductQuantity name={"Quantity"} method={_quantity} />
          </div>
          <div>
            <this.DeleteButton id={this.id} />
          </div>
        </div>
      </div>
    )
  }

  // class methods

  delete(){
    console.log(`Deleting! ${this.id}`)
  }

  DeleteButton({id}){

    const router = useRouter()
    const params = {...router.query}
  
    return(
      <div className="DeleteButton flex justify-center items-center p-2 rounded transition bg-gray-100 text-gray-600 shadow
                    hover:bg-red-500 hover:text-white hover:shadow-red-300 hover:cursor-pointer"
                    onClick={()=>{}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    )
  }
}






///////////////
// Input fields
///////////////

function ProductName({name, defaultText='', method=()=>{console.log("Error loading prodct name method")}}){

  const labelFiltered = name.replace(/\W/g, '')

  return(
    <div className="relative mb-6">
      <input id={labelFiltered} name={labelFiltered} placeholder=" " defaultValue={defaultText==='undefined'?'':defaultText}
      onChange={method} autoComplete="off"
      className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                            peer-placeholder-shown:hover:cursor-text
                            ">{name}</label>
    </div>
  )
}

function ProductPrice({name, defaultText='', method=()=>{console.log("Error loading product price method")}}){

  const labelFiltered = name.replace(/\W/g, '')

  const roundOff = e => {
    const val = e.target.value
    e.target.val = parseFloat(val).toFixed(2)
  }

  return(
    <div className="relative mb-6">
      <input id={labelFiltered} name={labelFiltered} placeholder=" " defaultValue={defaultText==='undefined'?'':defaultText}
      onChange={method} autoComplete="off" type="number" step="1" onBlur={(e)=>{roundOff(e)}} min={0}
      className="peer h-10 pl-4 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                            peer-placeholder-shown:hover:cursor-text
                            ">{name}</label>
      <span className="absolute h-10 top-1.5 left-0 text-lg text-black font-light transition-colors
                            peer-placeholder-shown:text-gray-600
                            ">$</span>
      
    </div>
  )
}

function ProductQuantity({name, defaultText='', method=()=>{console.log("Error loading prodct name method")}}){
  const labelFiltered = name.replace(/\W/g, '')
  return(
    <div className="relative mb-6">
      <input id={labelFiltered} name={labelFiltered} placeholder=" " defaultValue={defaultText==='undefined'?'':defaultText}
      onChange={method} autoComplete="off" type="number" step="1" min={0}
      className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
      <label htmlFor={labelFiltered} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                            peer-placeholder-shown:hover:cursor-text
                            ">{name}</label>
    </div>
  )
}



function AddProduct({method=()=>{console.log('Add Product method not passed')}}){

  const click = e => {
    method(e)
  }

  return(
    <div onClick={(e)=>{click(e)}} className="flex flex-row justify-center items-center py-2 bg-gray-100 rounded text-gray-600 capitalize transition shadow shadow-gray-300 hover:bg-green-500 hover:text-white hover:cursor-pointer">
      Add product
    </div>
  )
}


///////////////
// Export
///////////////

export {AddProduct}