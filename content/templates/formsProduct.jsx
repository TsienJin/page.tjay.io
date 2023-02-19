import React, { useState, useEffect, Component } from "react"
import { useRouter } from "next/router"
import { route } from "next/dist/server/router"

export {ProductItem}

export default class ProductContainer extends Component {
    items=[]
    query=''
    strTest
    
    constructor({defaultString=''}){
        super()
        this.strTest = defaultString
    }


    /////////
    // Private Methods
    /////////

    #setItems({string=''}){ 
    }

    #setQuery(){
    }

    #updateURL(){
    }


    /////////
    // Private JSX Methods
    /////////
    AddProduct(){

        const eventHandler = () => {
            console.log("Add product button clicked!")
        }

        return(
            <button className="w-full flex flex-row items-center justify-center gap-x-2 p-3 rounded shadow mt-4 transition-all
                                bg-gray-100 text-gray-700
                                hover:bg-blue-600 hover:text-white hover:shadow-md hover:rounded-sm
                                " onClick={event=>{eventHandler()}}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
                </span>
                <span>Add Product</span>
            </button>
        )
    }


    /////////
    // Public Methods
    /////////



    /////////
    // Render Methods
    /////////
    render(){
        return(
            <>
                <ProductItem />
                <this.AddProduct />
            </>
        )
    }
    
}

class ProductItem extends Component {
    id = ''
    name = ''
    price = 0
    quantity = 0

    constructor({_id=Math.random().toString(36).slice(2,18), _name='', _price=0, _quantity=0}){
        super()
        this.id = _id
        this.name = _name
        this.price = _price
        this.quantity = _quantity
    }

    // VISUAL JSX components
    ProductName({obj}){
        return(
            <div className="relative mb-6">
              <input id={obj.id} name={obj.id} placeholder=" " defaultValue={obj.name}
              onChange={e=>{console.log(obj.id, e.target.value)}} autoComplete="off"
              className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
              <label htmlFor={obj.id} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                                    peer-placeholder-shown:hover:cursor-text
                                    ">{"Product Name"}</label>
            </div>
          )
    }

    ProductPrice({obj}){

        const roundOff = e => {
            const val = e.target.value
            e.target.val = parseFloat(val).toFixed(2)
            }
        
        return(
            <div className="relative mb-6">
                <input id={obj.id} name={obj.name} placeholder=" " defaultValue={obj.price==0?'':obj.price}
                autoComplete="off" type="number" step="1" onBlur={(e)=>{roundOff(e)}} min={0}
                className="peer h-10 pl-4 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
                <label htmlFor={obj.id} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2 peer-placeholder-shown:left-4
                                    peer-placeholder-shown:hover:cursor-text
                                    ">{"Price"}</label>
                <span className="absolute h-10 top-1.5 left-0 text-lg text-black font-light transition-colors
                                    peer-placeholder-shown:text-gray-600
                                    ">$</span>
                
            </div>
            )
    }

    ProductQuantity({obj}){
        return(
            <div className="relative mb-6">
            <input id={obj.id} name={obj.name} placeholder=" " defaultValue={obj.quantity==0?'':obj.quantity}
            autoComplete="off" type="number" step="1" min={0}
            className="peer h-10 w-full border-b-2 transition-colors focus:outline-none border-gray-200 focus:border-blue-400 z-50"/>
            <label htmlFor={obj.id} className="absolute -top-3.5 left-0 text-gray-500 text-sm font-light transition-all capitalize
                                    peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:top-2
                                    peer-placeholder-shown:hover:cursor-text
                                    ">{"Quantity"}</label>
            </div>
          )
    }

    ProductDeleteButton({obj, delMethod=()=>{console.log('Delete method not passed!')}}){

        
        return(
            <div className="DeleteButton flex justify-center items-center p-3 rounded transition bg-gray-100 text-gray-600 shadow
                          hover:bg-red-500 hover:text-white hover:shadow-red-300 hover:cursor-pointer hover:scale-110 hover:rounded-sm"
                          onClick={()=>{console.log(`${obj.id} deleted!`)}}>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
          )
    }



    // RENDER method
    render(){
        return(
            <div className="flex flex-col w-full">
                <this.ProductName obj={this} />
                <div className="flex flex-row justify-between gap-x-4">
                    <div className="flex flex-row gap-x-4">
                        <this.ProductPrice obj={this} />
                        <this.ProductQuantity obj={this} />
                    </div>
                    <div className="">
                        <this.ProductDeleteButton obj={this} /> 
                    </div>
                </div>
            </div>
        )
    }
}