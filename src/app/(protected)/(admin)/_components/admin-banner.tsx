import { Dot } from "lucide-react";

type AdminBannerProps = {
    title:string;
    counts: {
        completed: number;
        pending:number;
    },
    label:{
        completed:string;
        pending:string;
    }
}

export default function AdminBanner({
    title,
    counts,
    label
}:AdminBannerProps){
    return (
        <div className="w-full rounded-xl border-2 border-black relative h-52 bg-cyan-800 bg-gradient-to-r from-cyan-900 via-cyan-700 to-blue-800 shadow-lg">
            <h2 className="font-bold text-xl md:text-3xl absolute bottom-7 left-5 text-white drop-shadow-md">{title}</h2>
        
            <div className="absolute bottom-0 right-0 h-26 rounded-tl-xl rounded-br-md bg-gradient-to-r from-slate-700 via-slate-900 to-black min-w-1/3 flex flex-col justify-center p-4">
                <div className="flex items-center">
                    <Dot className=" text-green-700" strokeWidth={8} />
                    <p className="text-md text-green-600">{counts.completed} {label.completed}</p>
                </div>

                <div className="flex items-center">
                    <Dot className="text-slate-500"  strokeWidth={8}/>
                    <p className="text-white text-md">{counts.pending} {label.pending}</p>
                </div>
            </div>
        </div>
    )
}