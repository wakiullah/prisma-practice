'use client'

import { useFormStatus } from "react-dom";

export default function Submit() {
    const { pending } = useFormStatus();
    console.log(`this is ${pending}`);


    return (
        <button className="block bg-gray-300 cursor-pointer border mt-9 w-80 p-2 disabled:bg-gray-500" disabled={pending} type="submit" value="Submit" >Submit </button>)
}
