import { Link, useNavigate } from "react-router-dom";
import InsuranceCard from "./InsuranceCard.jsx"
import DynamicTable from "./DynamicTable.jsx";
export default function MyContracts() {
  const navigate = useNavigate();

  const columns = [
    { header: 'شناسه', accessor: 'id' },
    { header: 'عنوان رشته	', accessor: 'reshte' },
    { header: 'تاریخ صدور ', accessor: 'payment' },
    { header: 'کد رایانامه صدور	', accessor: 'computer_code' },
    { header: 'شناسه پرداخت', accessor: 'payment_code' },
    { header: 'تنظیمات', accessor: 'settings' },
  ];

  const customRenderers = {
    settings: (value, row) => (
      <Link to={`/dashbord/installment/${row.id}`}>
        <button className="bg-[#40ba8d] rounded-3xl p-2 text-white">مشاهده</button>
      </Link>
    ),
  };

  return (
    <>

      <div className="w-full h-full flex flex-col items-center justify-center gap-10  overflow-auto " >
        <div className="lg:w-10/12 max-lg:w-full flex items-center justify-evenly gap-2 overflow-auto  flex-wrap ">
          <InsuranceCard bgColor="bg-[#59169d]" textColor="text-[#59169d]" title="بیمه ثالث بدنه" number="٢" ></InsuranceCard>
          <InsuranceCard bgColor="bg-[#115052]" textColor="text-[#115052]" title="بیمه زندگی " number="٢"></InsuranceCard>
          <InsuranceCard bgColor="bg-[#fdce0b]" textColor="text-[#fdce0b]" title="بیمه خدام " number="٣ "></InsuranceCard>

        </div>
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
                <Link to="/dashbord/table" ><button className="bg-[#40ba8d] rounded-3xl p-2 text-white ">مشاهده</button></Link></td>
            </tr>
            <tr className="max-md:text-[12px]">
              <td className="border border-gray-300 text-center">1403/09/03</td>
              <td className="border border-gray-300 text-center">5465411566</td>
              <td className="border border-gray-300 text-center">تشکیل سرمایه</td>
              <td className="border border-gray-300 text-center">18</td>
              <td className="border border-gray-300 text-center">
                <Link to="/dashbord/table"><button className="bg-[#40ba8d] rounded-3xl p-2 text-white ">مشاهده</button></Link>
              </td>
            </tr>
          </tbody>
        </table>
        {/* contract/my-contracts/report/55 */}
        <div className="w-full h-full pt-2" dir="rtl">
          <DynamicTable
            apiEndpoint="contract/my-contracts"
            columns={columns}
            customRenderers={customRenderers}
          />
        </div>
      </div>

    </>
  )
}
