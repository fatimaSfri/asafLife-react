

export default function MyContracts() {
  return (
    <>
    <div className="w-full h-full border-4 border-green-500  flex flex-col pt-24 ">
       <div className=" w-full h-[300px] border-4 border-red-400 flex items-center justify-evenly">
        <div className="w-1/4 border border-teal-700 h-40 "></div>
        <div></div>
        <div></div>
       </div>
    <table className="w-full border-collapse border border-gray-300" >
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2">عنوان ۱</th>
        <th className="border border-gray-300 px-4 py-2">عنوان ۲</th>
        <th className="border border-gray-300 px-4 py-2">عنوان ۳</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100">
        <td className="border border-gray-300 px-4 py-2">مورد ۱</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۲</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۳</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="border border-gray-300 px-4 py-2">مورد ۴</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۵</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۶</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="border border-gray-300 px-4 py-2">مورد ۷</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۸</td>
        <td className="border border-gray-300 px-4 py-2">مورد ۹</td>
      </tr>
    </tbody>
  </table>
  </div>
</>
  )
}
