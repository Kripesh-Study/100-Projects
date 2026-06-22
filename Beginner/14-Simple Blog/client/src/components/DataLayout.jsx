import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DataLayout = () => {

    let params = useParams();
    const [data, setData] = useState({})
    useEffect(() => {
        async function fetchedData() {
            try {
                const res = await fetch("http://127.0.0.1:2000", {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: params.id })
                });
                const response = await res.json();
                setData(response)

            } catch (error) {
                console.log("eror is: ", error)
            }

        }
        fetchedData();
    }, [])

    return (
        <div className='w-full flex justify-center'>
            <div className='w-[80%]  bg-white flex items-center gap-10 flex-col  min-h-screen'>
                <div className='h-100'>
                    <img className='h-full' src={data.image} alt="" />
                </div>
                <div>
                    <h1 className='font-bold text-2xl'>{data.title}</h1>
                    <p className='text-sm text-gray-600 mt-4'>{data?.content}</p>
                    <div className='mt-3 font-bold '>Author: <span className='text-md font-medium'>{data.author}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DataLayout;