import {Link} from "react-router-dom";

export default function MyContracts() {
  return (
    <>
   
   <div className="w-full h-full flex items-center justify-center " >
    <table className="md:w-10/12 max-md:w-[95%] h-1/3  rounded-2xl overflow-hidden " >
    <thead>
      <tr className="bg-gray-200 rounded-2xl h-14 max-md:text-[12px] ">
        <th className=""> تاریخ صدور</th>
        <th className="  "> کد رایانامه صدور</th>
        <th className="  "> عنوان رشته</th>
        <th className=" "> شماره بیمه نامه</th>
        <th className=" ">تنظیمات</th>
      </tr>
    </thead>
    <tbody>
      <tr className="max-md:text-[12px]">
        <td className="border border-gray-300 text-center">1403/09/03</td>
        <td className="border border-gray-300 text-center">125965242</td>
        <td className="border border-gray-300 text-center"> عمر انفرادی</td>
        <td className="border border-gray-300 text-center">9</td>
        <td className="border border-gray-300 text-center">
        <Link to="/panel/table" ><button className="bg-[#40ba8d] rounded-3xl p-2 text-white ">مشاهده</button></Link></td>
      </tr>
      <tr className="max-md:text-[12px]">
        <td className="border border-gray-300 text-center">1403/09/03</td>
        <td className="border border-gray-300 text-center">5465411566</td>
        <td className="border border-gray-300 text-center">تشکیل سرمایه</td>
        <td className="border border-gray-300 text-center">18</td>
        <td className="border border-gray-300 text-center">
        <Link to="/panel/table"><button className="bg-[#40ba8d] rounded-3xl p-2 text-white ">مشاهده</button></Link></td>
      </tr>
    </tbody>
  </table>
   </div>
   
</>
  )
}
