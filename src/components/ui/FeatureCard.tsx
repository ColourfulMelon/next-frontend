import Image from "next/image";

export default function FeatureCard(props: {icon: string, title: string, description: string}){
    return (
        <div className='flex items-center justify-center  p-8 border-2 border-primary rounded-lg'>
            <Image className='w-[106px] h-[106px] m-11' src={props.icon} alt='placeholder'/>
            <div className='my-5'>
                <h1 className='text-white font-block mb-4'>{props.title}</h1>
                <p className='text-white font-mono size-auto'>{props.description}</p>
            </div>
        </div>
    )
}