import Button from "../button/Button";

export default function ChildProfil() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center " >
        <table className="md:w-10/12 max-md:w-[95%] h-1/6 rounded-2xl overflow-hidden " >
        <thead>
          <tr className="bg-gray-200 rounded-2xl h-14 max-md:text-[12px] ">
            <th className="">  کد رایانامه اعلامیه بدهکار </th>
            <th className="  ">  تاریخ ثبت اعلامیه بدهکار</th>
            <th className="  "> سال قسط </th>
            <th className=" "> تعداد اقساط پرداخت نشده </th>
           
          </tr>
        </thead>
        <tbody>
          <tr className="max-md:text-[12px]">
            <td className="border border-gray-300 text-center">125965242</td>
            <td className="border border-gray-300 text-center">1403/09/03</td>
            <td className="border border-gray-300 text-center"> 1</td>
            <td className="border border-gray-300 text-center">9</td>
            {/* <td className="border border-gray-300 text-center">
            <Link to="/panel/table" ><button className="bg-green-500 rounded-3xl p-2 text-white ">مشاهده</button></Link></td> */}
          </tr>
        </tbody>
      </table>
       <Button width="md:w-10/12 " mt="mt-10" linkback="/panel/mycontracts"></Button>
       </div>
  )
}
