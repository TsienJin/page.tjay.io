import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'



function Line(props){
    return(
        <hr className="bg-gray-300 text-gray-300"/>
    )
}


function Preview({ imgSrc, title, subText, altText='', slug='', updateSlug }) {

    const router = useRouter()

    const handleClick = e => {
        e.preventDefault()
        router.push(`/templates/${slug}`)
    }

    return(
        <a href={`/templates/${slug}`} onClick={handleClick} key={title}  onMouseOver={()=>{updateSlug(slug)}} className="">
            <div className="bg-white rounded-lg w-full transition-all p-3
                    flex flex-row justify-start items-center
                    hover:bg-gray-100/75" >
                <img src={`/${imgSrc}`} alt={`${altText}`} />
                <div className="flex flex-col ml-4">
                    <h6 className="font-medium text-lg">{title}</h6>
                    <p className="font-light">{subText}</p>
                </div>
            </div>
        </a>
    )
}


export default function TemplateArr({updateSlug}) {

    const previews = [
        <Preview imgSrc={"mockups/invoice.svg"} slug={"invoice"} updateSlug={updateSlug} title={"Invoices for Freelancers"} subText={"Focus on what you do, simplify the paper work."} altText={"Invoice"} />,
        <Preview imgSrc={"mockups/receipt.svg"} slug={"receipt"} updateSlug={updateSlug} title={"Receipts for Freelancers"} subText={"Proof of transaction for your services."} altText={"Receipt"} />,
        <Preview imgSrc={"mockups/cover.svg"} slug={"cover"} updateSlug={updateSlug} title={"Cover page for your files"} subText={"Organise your work for smoother workflows."} altText={"Cover Page"} />,
        ]

    return (
        <div className="w-full flex flex-col gap-y-3">
            <Line />
            {previews.map(preview=>{
                return(
                    <>
                        {preview}
                        <Line />
                    </>
                )
            })}

            
        </div>
    )
}
