import React from "react";


// exporting statement
export { InvoicePreview, ReceiptPreview, CoverPreview }

// components
function InvoicePreview(props){
    return(
        <div className="wholeContainer flex flex-col gap-y-12 w-full">
            <div className="upperSegment w-full flex flex-col gap-y-8">
                <div className="top flex flex-row justify-between items-start w-full">
                    <div className="fromIssuer">
                        <h4 className="font-semibold capitalize">James Bond</h4>
                        <p className="text-sm font-light">18 Adress Street</p>
                        <p className="text-sm font-light">Singapore 238857</p>
                        <p className="text-sm font-light">+65 9182 2470</p>
                        <p className="text-sm font-light">email@domain.com</p>
                    </div>
                    <div className="type">
                        <h4 className="text-lg font-bold uppercase">INVOICE</h4>
                    </div>
                </div>
                <div className="middle flex flex-row justify-between items-start w-full gap-x-12">
                    <div className="billTo">
                        <h5 className="text-sm font-bold uppercase">Bill to</h5>
                        <p className="text-sm font-light">Jimmy Neutron</p>
                        <p className="text-sm font-light">Company Inc Pte Ltd</p>
                        <p className="text-sm font-light">1 Hackerway Street #01-24</p>
                        <p className="text-sm font-light">Singapore 239735</p>
                    </div>
                    <div className="dateDueAndOthers">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Date</td>
                                    <td className="text-sm font-light">21-11-21</td>
                                </tr>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Date Due</td>
                                    <td className="text-sm font-light">23-11-21</td>
                                </tr>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Invoice No.</td>
                                    <td className="text-sm font-light">3802</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="lower w-full">
                    <table className="table-auto w-full border border-black">
                        <thead>
                            <tr className="border-b border-solid border-black bg-gray-300">
                                <th className="text-xs font-bold p-1 uppercase">S/N</th>
                                <th className="text-xs font-bold p-1">Description</th>
                                <th className="text-xs font-bold p-1 text-center">Qty</th>
                                <th className="text-xs font-bold p-1 text-right">Unit Price</th>
                                <th className="text-xs font-bold p-1 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-xs p-1">1.</td>
                                <td className="text-xs p-1 capitalize">Lemon Grass Cake</td>
                                <td className="text-xs p-1 text-center">1</td>
                                <td className="text-xs p-1 text-right">13.00</td>
                                <td className="text-xs p-1 text-right">13.00</td>
                            </tr>
                            <tr>
                                <td className="text-xs p-1">2.</td>
                                <td className="text-xs p-1 capitalize">Apple Pie</td>
                                <td className="text-xs p-1 text-center">2</td>
                                <td className="text-xs p-1 text-right">7.00</td>
                                <td className="text-xs p-1 text-right">14.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lowerSegment flex flex-row justify-between items-start">
                <div className="comments p-2 border-dashed border border-black/50">
                    <h5 className="text-xs font-bold">Comments</h5>
                    <p className="text-xs">1. Thank you for your business.</p>
                </div>
                <div className="totalCalc">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-2">Subtotal</td>
                            <td className="text-xs font-light text-right">27.00</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-2">tax (7%)</td>
                            <td className="text-xs font-light text-right">2.43</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-2">total</td>
                            <td className="text-xs font-light text-right">29.43</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-bold uppercase pr-2 pt-2">balance due</td>
                            <td className="text-xs font-bold text-right pt-2">$29.43</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

function ReceiptPreview(props){
    return(
        <div className="wholeContainer flex flex-col gap-y-12 w-full">
            <div className="upperSegment w-full flex flex-col gap-y-8">
                <div className="top flex flex-row justify-between items-start w-full">
                    <div className="fromIssuer">
                        <h4 className="font-semibold capitalize">James Bond</h4>
                        <p className="text-sm font-light">18 Adress Street</p>
                        <p className="text-sm font-light">Singapore 238857</p>
                        <p className="text-sm font-light">+65 9182 2470</p>
                        <p className="text-sm font-light">email@domain.com</p>
                    </div>
                    <div className="type">
                        <h4 className="text-lg font-bold uppercase">RECEIPT</h4>
                    </div>
                </div>
                <div className="middle flex flex-row justify-between items-start w-full gap-x-12">
                    <div className="billTo">
                        <h5 className="text-sm font-bold uppercase">Bill to</h5>
                        <p className="text-sm font-light">Jimmy Neutron</p>
                        <p className="text-sm font-light">Company Inc Pte Ltd</p>
                        <p className="text-sm font-light">1 Hackerway Street #01-24</p>
                        <p className="text-sm font-light">Singapore 239735</p>
                    </div>
                    <div className="dateDueAndOthers">
                        <table className="table-auto">
                            <tbody>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Date</td>
                                    <td className="text-sm font-light">21-11-21</td>
                                </tr>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Date Due</td>
                                    <td className="text-sm font-light">23-11-21</td>
                                </tr>
                                <tr>
                                    <td className="text-right text-sm font-bold capitalize pr-2">Invoice No.</td>
                                    <td className="text-sm font-light">3802</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="lower w-full">
                    <table className="table-auto w-full border border-black">
                        <thead>
                            <tr className="border-b border-solid border-black bg-gray-300">
                                <th className="text-xs font-bold p-1 uppercase">S/N</th>
                                <th className="text-xs font-bold p-1">Description</th>
                                <th className="text-xs font-bold p-1 text-center">Qty</th>
                                <th className="text-xs font-bold p-1 text-right">Unit Price</th>
                                <th className="text-xs font-bold p-1 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-xs p-1">1.</td>
                                <td className="text-xs p-1 capitalize">Lemon Grass Cake</td>
                                <td className="text-xs p-1 text-center">1</td>
                                <td className="text-xs p-1 text-right">13.00</td>
                                <td className="text-xs p-1 text-right">13.00</td>
                            </tr>
                            <tr>
                                <td className="text-xs p-1">2.</td>
                                <td className="text-xs p-1 capitalize">Apple Pie</td>
                                <td className="text-xs p-1 text-center">2</td>
                                <td className="text-xs p-1 text-right">7.00</td>
                                <td className="text-xs p-1 text-right">14.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lowerSegment flex flex-row justify-between items-start">
                <div className="comments p-2 border-dashed border border-black/50">
                    <h5 className="text-xs font-bold">Comments</h5>
                    <p className="text-xs">1. Payment received.</p>
                </div>
                <div className="totalCalc">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-4">Subtotal</td>
                            <td className="text-xs font-light text-right">27.00</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-4">tax (7%)</td>
                            <td className="text-xs font-light text-right">2.43</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-4">total</td>
                            <td className="text-xs font-light text-right">29.43</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-normal uppercase pr-4">payment</td>
                            <td className="text-xs font-light text-right">29.43</td>
                        </tr>
                        <tr>
                            <td className="text-xs font-bold uppercase pr-4 pt-2">balance due</td>
                            <td className="text-xs font-bold text-right pt-2">$0.00</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

function CoverPreview(props){
    return(
        <div className="w-full flex flex-col pt-32">
            <h4 className="text-center font-semibold text-xl">Cover Page</h4>
            <p className="text-center text-sm font-light">Specific small text</p>
        </div>
    )
}