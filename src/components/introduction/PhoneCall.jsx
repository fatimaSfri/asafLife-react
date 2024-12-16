

export default function PhoneCall({phone,post,employeeName}) {
  return (
    <div className='flex flex-col gap-5  items-center '>
    <div className='flex   items-center gap-4'>
    <div className='w-4 h-4 border-2 border-[#fdce0b] bg-black rounded-full '></div>
    <p className='xl:text-[20px] md:text-[18px] max-md:text-[16px]'> کارشنـاس {post} : {employeeName} </p>
    </div>
    <div className='flex w-[300px] h-10 bg-white rounded-lg items-center justify-between '>
    <div className='w-10/12 h-full bg-gray-200 rounded-lg flex items-center justify-center text-[20px] pt-1'>
    <a href={`tel:${phone}`} className="px-2">
    {phone}</a></div>
     <img src="./img/Animation/ministrant/Layer.png" className='w-8 mx-auto'></img>
    </div>
    </div>
  )
}
