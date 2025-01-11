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
        
        {/* contract/my-contracts/report/55 */}
        <div className=" w-full">
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
