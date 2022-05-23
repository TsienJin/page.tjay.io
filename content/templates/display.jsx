import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useLocalStorage } from "../../hooks/hooks";

// Export statement
export { style, Listen, ListenArea }

// Style statement
const style = {
    normal: 'text-sm font-light',
    title: 'text-sm uppercase',
    name: 'font-semibold capitalize',
    address: 'text-sm font-light capitalize',
    clientName: 'text-sm font-light capitalize',
    bold: 'text-sm font-bold',
    money: 'text-xs uppercase',
    moneySumHeader: 'text-xs font-bold uppercase',
}

// Listening component
function Listen({ label, styleText=style.normal, defaultText='' }){

    const labelFiltered = label.replace(/\W/g, '')
    const router = useRouter()

    const [text, updateText] = useState(defaultText)
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{setMounted(true)},[])

    useEffect(()=>{
        if(mounted){
            const toUpdate = decodeURI(router.query[labelFiltered])
            updateText(toUpdate==='undefined'?'':toUpdate)
        }
    })


    return(
        <p className={styleText}>{text}</p>
    )

}

function ListenArea({ label, styleText=style.normal, defaultText='' }){

    const labelFiltered = label.replace(/\W/g, '')
    const router = useRouter()

    const [mounted, setMounted] = useState(false)
    const [text, setText] = useState([])

    useEffect(()=>{
        setMounted(true)
    },[])

    useEffect(()=>{
        if(mounted && router.query[labelFiltered]){
           const newArr = router.query[labelFiltered].split('%0A').map(string=>{
                return(decodeURI(string))
            })

            if(JSON.stringify(text)!=JSON.stringify(newArr)){
                setText(newArr)
            }
        } else {
            if(text.length){
                setText([])
            }
        }
    })

    return(
        <>
            {text.map(string=>{
                return(
                    <p className={styleText}>{string}</p>
                )
            })}
        </>
    )

}