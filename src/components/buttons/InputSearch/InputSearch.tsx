"use client"

import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {

    const router=useRouter();
    const params=useSearchParams();
    console.log(params.toString());

    const handleSubmit= (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const form=event.currentTarget;
        const formData=new FormData(form);
        // console.log(value);

        const value = formData.get("search") as string;

        const newParams=new URLSearchParams(params.toString());
        newParams.set("search", value);
        router.push(`?${newParams.toString()}`);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=''>
                <input  className='mx-2 border-2 rounded-xl p-2' name="search" type="text" placeholder='Enter Food Name'/>
                <button className='btn btn-accent btn-sm' >Search</button>
            </form>
        </div>
    );
};

export default InputSearch;