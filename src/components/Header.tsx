import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from 'react-icons/tb';

const Header: React.FC =() => {
    const url: string = "https://images.pexels.com/photos/906002/pexels-photo-906002.jpeg";
    // const bottle: string = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHVRG1OgbYR7fmd4Msu-azycYNycB8gUlsrul2j6QcTMvkcqTU";

    
    return (
        <div className="flex justify-end text-sm pr-4 pt-3 space-x-4 items-center">
        <Link href='https://mail.google.com' className=" text-slate-800 text-sm tracking-tighter hover:underline decoration-0">Gmail</Link>  
        {/* text-sm == 14px */}
        <Link href='https://image.google.com' className="hover:underline decoration-0 text-sm  text-black tracking-tighter">Images</Link>

        {/* <Image 
                src={bottle} 
                alt="dp" 
                title="Search Labs"
                width={30}   
                height={100}
                className=" hover:bg-gray-200 p-2 rounded-full hover:cursor-pointer "
                style={{ height: 40, width:40}}
            />  */}


        <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full tracking-tighter" 
                        title="Google Apps"/>
        <Image 
                src={url} 
                alt="dp" 
                // <ul>
                //  title="Google account Adbhut Adbhut.kr.verma@gmail.com"
                // </ul>
                title="Google Account Adbhut Adbhut.kr.verma@gmail.com"
                width={30}   
                height={100}
                className="rounded-full object-fill p-1 hover:bg-gray-200 text-4xl tracking-tighter"
                style={{ height: 40 , width:40 }}
            /> 
            
        </div>
    )
}

export default Header;

// Link href='https://mail.google.com' className="hover:underline text-sm">Gmail</Link>
//             <Link href='https://image.google.com' className="hover:underline text-sm">Images</Link>
            // <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />