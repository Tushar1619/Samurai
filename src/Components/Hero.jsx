
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
            <form action="" className='flex h-8 bg-white' onSubmit={handleOnSubmit} >
                <i className=" pt-2 px-1 flex fa-solid fa-link  h-6"></i>

                <input type="url"  className='bg-white w-full focus:outline-black   ' value={url} onChange={handleOnChange} />
                <button className='  pr-2 pl-2'>
                <i className="fa-solid fa-check"></i>
                </button>
            </form>

            {initial && <div className=' drop-shadow-2xl   mt-10 rounded-md text-white'>
                <h2 className='text-lg text-center mainfontStyle mb-2'>Article Summary</h2>
                {
                    load ? <Loader /> :
                        <p className=' border-lemon-300 bg-white text-black  shadow-teal-300 text-md shadow-md py-4 px-4 '>
                            {sum}
                        </p>
                }

            </div>
            }
        </div>
    )
}








// Elon Musk and other tech leaders have signed an open letter urging the world’s leading artificial intelligence (AI) labs to pause the training of new super-powerful systems for six months. The letter warns that recent advances in AI present “profound risks to society and humanity”. The letter calls on all AI labs to agree to use the proposed six-month pause to continue with safety research. The list of signatories includes the names of more than 1,000 people alongside Musk, including Apple co-founder Steve Wozniak, Sapiens author Yuval Noah Harari, and some of AI’s most distinguished academics responsible for multiple breakthroughs in machine learning. As of Tuesday, no OpenAI employees had signed the letter, although CEO Sam Altman’s name briefly appeared then disappeared from the list of signatories. At least four Google employees, including three from its subsidiary AI lab DeepMind, Emad Mostaque, the CEO of Stability AI and Tristan Harris, executive director of the Center for Humane Technology also appeared on the list. Gary Marcus, a signatory of the open letter and author of the book Rebooting AI, told TIME he added his name because he felt a responsibility to speak out. Simeon Campos, the CEO of AI safety startup SaferAI, told TIME he signed the letter because it is impossible to manage the risks of systems when even the inventors of those systems don’t know exactly how they work, don’t know what they’re capable of, and don’t know how to place limits on their behavior.