import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import Link from "next/link";



const Footer: React.FC=() =>{
    return (
        <footer className="absolute bottom-0 w-full bg-zinc-100 tracking-tight">
            <p className="py-3 px-7 text-black text-base "
        // bg-slate-200 
        
                >India</p>
            <hr />
            <div className="flex py-3 px-8">
                <ul className="flex  [&>*]:mr-8 text-sm text-black hover:cursor-pointer ">
                    <Link href="https://about.google/" className="hover:underline" >About</Link>
                    <Link href="https://ads.google.com/" className="hover:underline">Advertising</Link>
                    <Link href="https://www.google.com/intl/en_in/business/" className="hover:underline">Business</Link>
                    <Link href="https://www.google.com/search/howsearchworks/?fg=1" className="hover:underline">How Search works</Link>
                </ul>
                <ul className="flex ml-auto [&>*]:ml-8 text-sm text-black hover:cursor-pointer "> 
                    <Link href="https://policies.google.com/privacy?hl=en-IN&fg=1" className="hover:underline">Privacy</Link>
                    <Link href="https://policies.google.com/terms?hl=en-IN&fg=1" className="hover:underline">Terms</Link>
                    <Link href="" className="hover:underline">Settings</Link>
                </ul>
            </div>
        </footer>
    )
}

export default Footer ;


// div ---> ui------>li---->