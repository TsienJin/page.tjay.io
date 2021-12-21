import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Field } from "../../content/templates/forms";

export default function Main(props){
    const router = useRouter()


    return(
        <div>
            {router.query.slug}
            {/* <Field label={router.query.slug} type={"text"} slugRoute={"/invoice"} /> */}
        </div>
    )
}