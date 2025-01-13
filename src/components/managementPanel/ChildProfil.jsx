import Button from "../button/Button";
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DynamicTable from "./DynamicTable.jsx";
import axiosInstance from "../axiosConfig.js";
import { Link, useNavigate } from "react-router-dom";

export default function ChildProfil() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);;
  const [backendErrors, setBackendErrors] = useState({});

  const [data, setData] = useState([]);
  const { contractId } = useParams();
  const columns = [
    { header: 'شناسه', accessor: 'id' },
    { header: 'مبلغ	', accessor: 'amount' },
    { header: 'تاریخ صدور ', accessor: 'due_date' },

    { header: 'تاریخ پرداخت', accessor: 'payment_date' },
    { header: 'شناسه پرداخت', accessor: 'ref_id' },
    { header: 'تنظیمات', accessor: 'settings' },
    { header: 'وضعیت پرداخت', accessor: 'status' },

  ];

  const checkPaymentStatus = async (contractId) => {
    try {
      setIsRequesting(true);
      const response = await axiosInstance.get(`contract/my-contracts/report/${contractId}`);
      if (response.data.payment_date) {
        setPaymentStatus('paid');
      } else {
        setPaymentStatus('pending');
      }
    } catch (error) {
      console.error("Error checking payment status:", error);
      setPaymentStatus('error');
    } finally {
      setIsRequesting(false);
    }
  };
  
  




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
            const { data } = await axiosInstance.get(`installment/pay/${row.id}`);
            console.log("Payment data:", data);
            window.open(`https://bpm.shaparak.ir/pgwchannel/result.mellat?RefId=${data.ref_id}`, '_blank');



          } catch (error) {
            console.error("Error paying installment:", error);
            const backendErrors = {};
            Object.keys(error.response.data).forEach((key) => {
              backendErrors[key] = Array.isArray(error.response.data[key])
                ? error.response.data[key].join(", ")
                : error.response.data[key];
            });
            setBackendErrors(backendErrors);
            setTimeout(() => {
              setBackendErrors({});
            }, 4000);
          }
        }}
      >
        پرداخت
      </button>
    ),

    status: (value, row) => {
       setInterval(() => {
        res = axiosInstance.get(`contract/my-contracts/report/${row.id}`);
        if (res.data.payment_date) {
          <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-green-600 bg-[rgba(250,96,96,0.4)]  text-green-600 ">پرداخت نشده</button>
        } else {
          <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-red-600 bg-[rgba(250,96,96,0.4)]  text-red-600 ">پرداخت نشده</button>
        }
      }, 600000);
    }

  };

  return (
    <>
      {showPopup && submitted && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
          قسط با موفقیت ثبت شد.
        </div>
      )}
      <div className="w-full h-full flex flex-col items-center justify-center " >
        {Object.keys(backendErrors).length > 0 && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded relative mb-4 space-y-1 w-full max-w-lg mx-auto ">
            <strong className="font-bold">خطاهای سرور:</strong>
            <ul className="list-none pl-0">
              {Object.entries(backendErrors).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </div>
        )}



        <div className=" w-full mt-5">
          <DynamicTable
            apiEndpoint={`contract/my-contracts/report/${contractId}`}
            columns={columns}
            customRenderers={customRenderers}
          /></div>
      </div>
    </>

  )
}
