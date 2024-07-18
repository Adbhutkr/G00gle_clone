'use client'

import "regenerator-runtime/runtime.js";
// import 'regenerator-runtime/runtime';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMicCircle } from "react-icons/io5";
// import { TbCameraSearch } from "react-icons/tb";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import 'regenerator-runtime';


const Main: React.FC = ()=> { 
    const router = useRouter() ;

    const [search,setSearch] = useState<any>('') ;

    const googleLogo: string = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    const onSeachSubmit =  ( e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault() ;

        router.push(`https://www.google.com/search?q=${search}`)

    }

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
        } = useSpeechRecognition();



    

    

    const selectImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

    const response = await new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (event) => {
                if (!event.target) return;
                resolve(event.target.result);
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsDataURL(file);
        });
        console.log(response);
        document.location.assign(`https://www.google.com/searchbyimage?&image_url=${response}`);
    }

    const startListening=() =>{
        SpeechRecognition.startListening({ continuous: true , language: 'en-IN'});
    }

    const stopListening=() =>{
        SpeechRecognition.stopListening();
        setSearch(transcript) ;
    }

    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    
    const camera: string="https://play-lh.googleusercontent.com/BDWTTN85mBETnnPg_qekwlk1uCxnbl4wtnVE8cz_WyMHEntEJgQsdJaT4uA0_N0VWg" ;
    const mic: string="https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_mic.svg";
    return(
       

        <div className="flex flex-col items-center mt-23">
            
            <div className="mt-3">
            <Image
                src={googleLogo}
                alt="google"
                height={100}
                width={270}
            />
            </div>
            

            <form className="flex border mt-7 px-5 py-2 rounded-full w-1/2 items-center hover:shadow-md" onSubmit={(e) => onSeachSubmit(e)}>

                <HiOutlineSearch  className="text-xl text-slate-600 "  />
                
                <input 
                type="text"
                placeholder="Search Google or type a URL"
                className="w-full focus:outline-none ml-4" 
                value = {search || transcript}
                onChange={(e) => setSearch(e.target.value)} 
                // value = {search || transcript} 
                />
                {
                    listening ?
                    <IoMicCircle 
                        className="text-3xl text-slate-400 mr-5 cursor-wait" 
                        onClick= {stopListening} 
                    />
                    :
                    <div 
                            className=" mr-5 cursor-pointer"
                            onClick={startListening} 
                            title="Search by voice"
                    >

                            <Image
                            src={mic}
                            alt="mic"
                            height={18}
                            width={18} />
                    </div>
                
                    //  className="text-3xl text-slate-400 mr-5 cursor-pointer"onClick={startListening} 
                    //         title="Search by voice"
                }
             

                <label htmlFor="imageInput">

                    <div className=" cursor-pointer">
                    <Image
                        src={camera}
                        alt="camera"
                        title="Search by image"
                        height={40}
                        width={40}
                    />
                    </div>
                

                {/* <HiCamera  className="text-3xl text-slate-400 cursor-pointer "
                           title="Search by image"
                           /> */}
                </label>

                <input
                    type="file"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={(e) => selectImage(e)}
                />

    
            </form>
            
            <div className="mt-7">
                <button 
                className="text-sm bg-slate-50 mr-3 px-5 py-2 rounded hover:border"
                onClick={(e) => onSeachSubmit(e)}
                >Google Search </button>
                <button 
                className="text-sm bg-slate-50 px-5 py-2 rounded hover:border"
                onClick={() => router.push('https://doodles.google/')}>I'm feeling Lucky</button>
{/* bg-gray-50 bg-neutral-50 */}
                    
                <div className="px-60 ml-5 mt-6 absolute bottom-25 left-20 flex tracking-tighter">
                    <p className="text-sm text-slate-600 ">Google offered in:</p>
                    {/* বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ */}
                    {/* https://www.google.co.in/ */}
                    {/* <div className="px-2 text-sm hover:underline text-blue-800"> */}

                    <a href="https://www.google.co.in/" className="px-2 text-sm hover:underline text-blue-800">हिन्दी </a>
                    <a href="https://www.google.co.in/" className="px-1 text-sm hover:underline text-blue-800">বাংলা </a>

                    <a href="https://www.google.co.in/" className="px-2 text-sm hover:underline  text-blue-800">తెలుగు </a>
                    <a href="https://www.google.co.in/" className="px-1 text-sm hover:underline text-blue-800">मराठी </a>

                    <a href="https://www.google.co.in/" className="px-2 text-sm hover:underline text-blue-800">தமிழ் </a>
                    <a href="https://www.google.co.in/" className="px-1 text-sm hover:underline text-blue-800">ગુજરાતી </a>

                    <a href="https://www.google.co.in/" className="px-2 text-sm hover:underline text-blue-800">ಕನ್ನಡ </a>
                    <a href="https://www.google.co.in/"className="px-1 text-sm hover:underline text-blue-800">മലയാളം </a>

                    <a href="https://www.google.co.in/"className="px-2 text-sm hover:underline text-blue-800" >ਪੰਜਾਬੀ </a>
                    {/* </div> */}

                </div>
            </div>

            

        </div>
       
       
        
    )
}

export default Main;