import Button from "../button/Button";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DynamicTable from "./DynamicTable.jsx";
import axiosInstance from "../axiosConfig.js";
import { Link, useNavigate } from "react-router-dom";

export default function ChildProfil() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [Installments, setInstallments] = useState(false);
  const [data, setData] = useState([]);
  const { contractId } = useParams();
  const columns = [
    { header: 'شناسه', accessor: 'id' },
    { header: 'مبلغ	', accessor: 'amount' },
    { header: 'تاریخ صدور ', accessor: 'due_date' },
    
    { header: 'تاریخ پرداخت', accessor: 'payment_date' },
    { header: 'شناسه پرداخت', accessor: 'ref_id' },
    { header: 'تنظیمات', accessor: 'settings' },

  ];

  // useEffect(() => {
  //   const fetchInstallments = async () => {
  //     try {
  //       const response = await axiosInstance.get(`contract/my-contracts/report/${contractId}`);
  //       setInstallments(response.data.id);
  //       const response2 = await axiosInstance.post(`installment/pay/${response.data.id}`);
  //       const refId = response2.data.RefId;
        
  //     } catch (error) {
  //       console.error('Error fetching installments:', error);
  //     }
  //   };
  //   fetchInstallments();
  // }, [data]);

  // const sendReq=async()=>{
  //   const res=await axiosInstance.post(`installment/pay/${installmentId}`)
  //   console.log(res)
  //   try{
  //     setSubmitted(true);
  //     setShowPopup(true);

  //   }catch(err){
  //     alert(err)
  //   }
  // }


  // if payment_date has value button no button: already payed بنویس 
  // رداخت شد
 
  // if RefID boodesh va red_id_Created_at less then 10 minute disable
  // در انتظار 
  // رداخت
  const customRenderers = {
    settings: (value, row) => (
      <button 
        className="bg-[#40ba8d] rounded-3xl p-2 text-white"
        onClick={async () => {
          try {
            const {data} = await axiosInstance.get(`installment/pay/${row.id}`);
            window.open(`https://bpm.shaparak.ir/pgwchannel/result.mellat?RefId=${data.ref_id}`, '_blank');
            
          } catch (error) {
            console.error('Error fetching installments:', error);
          }
        }}
      >
        پرداخت
      </button>
    ),
  };

  return (
    <>
    {showPopup && submitted && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
          قسط با موفقیت ثبت شد.
        </div>
      )}
    <div className="w-full h-full flex flex-col items-center justify-center " >
            

            <table className="md:w-10/12 max-md:w-[95%] h-1/6 rounded-2xl overflow-hidden " >
            <thead>
              <tr className="bg-gray-200 rounded-2xl h-14 max-md:text-[12px] ">
                <th className="">  کد رایانامه اعلامیه بدهکار </th>
                <th className=" ">  تاریخ ثبت اعلامیه بدهکار</th>
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
    
           <DynamicTable
                apiEndpoint={`contract/my-contracts/report/${contractId}`}
                columns={columns}
                customRenderers={customRenderers}
            />
           </div>
    </>
    
  )
}
