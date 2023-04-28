
import axios from 'axios'
import Loader from './Loader';
import { useState, useEffect } from 'react';
export default function Hero() {
    const [url, setUrl] = useState('URL here')
    const [load, setLoad] = useState(false)
    const [initial, setInitial] = useState(false)
    // const [head, setHead] = useState(false)
    const [sum, setSum] = useState('');
    const handleOnChange = (event) => {
        setUrl(event.target.value);
    }

    // useEffect(() => {
    //         setInitial(false)
    // }, [])

    const handleOnSubmit = async (event) => {
        setInitial(true)
        setLoad(true);
        event.preventDefault();
        console.log("hello all");
        const options = {
            method: 'GET',
            url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
            params: {
                url: url,
                length: '3'
            },
            headers: {
                'content-type': 'application/octet-stream',
                'X-RapidAPI-Key': '052131ec95msh2ecec49c99620f6p10aed3jsnf04a0ae8c598',
                'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
            }
        };

        try {

            const response = await axios.request(options);
            setLoad(false)
            setSum(response.data.summary);
            console.log("hihihih");
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className='w-10/12 mx-auto mt-6'>
            <form action="" className='flex h-8 bg-first-title' onSubmit={handleOnSubmit} >
                <i className=" pt-2 px-1 flex fa-solid fa-link  h-6"></i>

                <input type="url"  className='bg-first-title w-full focus:outline-black font-medium ml-2'  value={url} onChange={handleOnChange} />
                <button className='  pr-2 pl-2'>
                <i className="fa-solid fa-check"></i>
                </button>
            </form>

            {initial && <div className=' drop-shadow-2xl   mt-10 rounded-md text-black '>
                <h2 className=' text-center lg:text-3xl md:text-2xl text-lg sm:text-xl font-bold mainfontStyle mb-2'>Summary</h2>
                {
                    load ? <Loader /> :
                        <p className=' border-lemon-300 bg-first-title rounded-lg md:text-xl lg:text-xl text-black  shadow-teal-300 text-md shadow-md py-4 px-4 '>
                            {sum}
                        </p>
                }

            </div>
            }
        </div>
    )
}





