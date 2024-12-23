import {Link} from "react-router-dom";
export default function Button(props) {
  return (
    <div className={`max-lg:w-full flex justify-end items-center mx-auto gap-2 ${props.mt} ${props.width}`}>
  <Link to={props.linkback}><button className='md:w-[150px] max-md:w-[100px] h-10 rounded-2xl  custom-shadow flex items-center border justify-center text-white gap-2 bg-gray-400'
    >انصراف</button></Link>
 <button className='md:w-[150px] max-md:w-[100px] h-10 rounded-2xl  custom-shadow flex items-center justify-center text-white gap-2'
   style={{
     background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 30%)',
   }}>تایید</button>


  </div>
  )
}
