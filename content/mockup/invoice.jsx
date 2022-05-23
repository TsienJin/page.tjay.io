import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Listen, ListenArea, style } from '../templates/display'
import { Container, Field, TextArea, Product } from '../templates/forms'
import labels from './labels'
import { parse } from 'postcss'

//export function
export { Invoice, InvoiceFields }

// display functions (Left)
function Invoice({ query }){
    
    const router = useRouter()

    const labelFiltered = text => {return (text.replace(/\W/g, ''))}
    const defaultText = label =>{return(query[labelFiltered(label)])}

    const parseDate = input => {
        const date = input.split('-')
        return(`${date[2]} / ${date[1]} / ${date[0]}`)
    }

    const [billTo, setBillTo] = useState(false)
    useEffect(()=>{
        if(router.query[labelFiltered(labels.invoice.clientName)] || router.query[labelFiltered(labels.invoice.clientCompany)]) {
            setBillTo(true)
        } else {
            setBillTo(false)
        }
    })

    const [comments, setComments] = useState(false)
    useEffect(()=>{
        if(router.query[labelFiltered(labels.invoice.comments)]) {
            setComments(true)
        } else {
            setComments(false)
        }
    })


    return(
        <div className="w-full flex flex-col gap-y-8">
            <div className="toptext">
                <div className="flex flex-row justify-between items-start">
                    <div className="leftText">
                        <Listen label={labels.invoice.fullName} defaultText={defaultText(labels.invoice.fullName)} styleText={style.name}/>
                        <Listen label={labels.invoice.address1} defaultText={defaultText(labels.invoice.address1)} styleText={style.address} />
                        <Listen label={labels.invoice.address2} defaultText={defaultText(labels.invoice.address2)} styleText={style.address} />
                        <Listen label={labels.invoice.address3} defaultText={defaultText(labels.invoice.address3)} styleText={style.address} />
                        <Listen label={labels.invoice.yourPhone} defaultText={defaultText(labels.invoice.yourPhone)} />
                        <Listen label={labels.invoice.yourEmail} defaultText={defaultText(labels.invoice.yourEmail)} />
                    </div>
                    <div className="rightText">
                        <h2 className="text-lg font-bold uppercase">invoice</h2>
                    </div>
                </div>
            </div>
            <div className="clientANDdue">
                <div className="flex flex-row justify-between items-start">
                    <div className="leftText">
                        <h3 className="text-sm font-bold uppercase">{billTo?'bill to':''}</h3>
                        <Listen label={labels.invoice.clientName} defaultText={defaultText(labels.invoice.clientName)} styleText={style.clientName} />
                        <Listen label={labels.invoice.clientCompany} defaultText={defaultText(labels.invoice.clientCompany)} styleText={style.clientName} />
                        <Listen label={labels.invoice.clientAddr1} defaultText={defaultText(labels.invoice.clientAddr1)} styleText={style.address} />
                        <Listen label={labels.invoice.clientAddr2} defaultText={defaultText(labels.invoice.clientAddr2)} styleText={style.address} />
                        <Listen label={labels.invoice.clientAddr3} defaultText={defaultText(labels.invoice.clientAddr3)} styleText={style.address} />
                    </div>
                    <div className="rightText">
                        <table>
                            <tbody>
                                {router.query[labelFiltered(labels.invoice.dateIssue)]?
                                <tr>
                                    <td className='text-right pr-3 text-sm font-bold'>Date</td>
                                    <td className='text-left text-sm'>{parseDate(router.query[labelFiltered(labels.invoice.dateIssue)])}</td>
                                </tr>
                                :''}
                                {router.query[labelFiltered(labels.invoice.dateDue)]?
                                <tr>
                                    <td className='text-right pr-3 text-sm font-bold'>Date Due</td>
                                    <td className='text-left text-sm'>{parseDate(router.query[labelFiltered(labels.invoice.dateDue)])}</td>
                                </tr>
                                :''}
                                {router.query[labelFiltered(labels.invoice.invoiceNumber)]?
                                <tr>
                                    <td className='text-right pr-3 text-sm font-bold'>Invoice No.</td>
                                    <td className='text-left text-sm'>{router.query[labelFiltered(labels.invoice.invoiceNumber)]}</td>
                                </tr>
                                :''}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="table"></div>
            <div className="final">
                <div className="flex flex-row justify-between items-start">
                    {comments?
                    <>
                        <div className="leftText comment rounded-sm border border-dashed border-gray-400 p-2">
                            <h5 className="text-xs font-bold mb-1">Comments</h5>
                            <ListenArea label={labels.invoice.comments} defaultText={defaultText(labels.invoice.comments)} />
                        </div>
                    </>:
                        ''
                    }
                </div>
            </div>
        </div>
    )
}


// form fields right col
function InvoiceFields({ slugRoute, query }){

  const labelFiltered = text => {return (text.replace(/\W/g, ''))}
  const defaultText = label =>{return(decodeURI(query[labelFiltered(label)]))}


    return(
        <div className="w-full">
            <Container name={"Your details"}>
                <Field label={labels.invoice.fullName} defaultText={defaultText(labels.invoice.fullName)} slugRoute={slugRoute} />
                <Field label={labels.invoice.address1} defaultText={defaultText(labels.invoice.address1)} slugRoute={slugRoute} />
                <Field label={labels.invoice.address2} defaultText={defaultText(labels.invoice.address2)} slugRoute={slugRoute} />
                <Field label={labels.invoice.address3} defaultText={defaultText(labels.invoice.address3)} slugRoute={slugRoute} />
                <Field label={labels.invoice.yourPhone} defaultText={defaultText(labels.invoice.yourPhone)} slugRoute={slugRoute} type="tel"/>
                <Field label={labels.invoice.yourEmail} defaultText={defaultText(labels.invoice.yourEmail)} slugRoute={slugRoute}  type={"email"}/>
            </Container>
            <Container name={"Client details"}>
                <Field label={labels.invoice.clientName} defaultText={defaultText(labels.invoice.clientName)} slugRoute={slugRoute} />
                <Field label={labels.invoice.clientCompany} defaultText={defaultText(labels.invoice.clientCompany)} slugRoute={slugRoute} />
                <Field label={labels.invoice.clientAddr1} defaultText={defaultText(labels.invoice.clientAddr1)} slugRoute={slugRoute} />
                <Field label={labels.invoice.clientAddr2} defaultText={defaultText(labels.invoice.clientAddr2)} slugRoute={slugRoute} />
                <Field label={labels.invoice.clientAddr3} defaultText={defaultText(labels.invoice.clientAddr3)} slugRoute={slugRoute} />
            </Container>
            <Container name={"invoice information"}>
                <Field label={labels.invoice.dateIssue} defaultText={defaultText(labels.invoice.dateIssue)} slugRoute={slugRoute} type={"date"}/>
                <Field label={labels.invoice.dateDue} defaultText={defaultText(labels.invoice.dateDue)} slugRoute={slugRoute} type={"date"}/>
                <Field label={labels.invoice.invoiceNumber} defaultText={defaultText(labels.invoice.invoiceNumber)} slugRoute={slugRoute} type={"number"}/>
            </Container>
            <Container name={"products"}>
                <Product label={labels.invoice.product} slugRoute={slugRoute} />
            </Container>
            <Container name={"Other Information"}>
                <TextArea label={labels.invoice.comments} defaultText={defaultText(labels.invoice.comments)} slugRoute={slugRoute} />
            </Container>
        </div>
    )
}
