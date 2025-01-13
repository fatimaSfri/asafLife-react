import React, { useState, useEffect } from 'react';
import axiosInstance from "../axiosConfig";


const PaymentStatus = ({ row }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const { data } = await axiosInstance.get(`installment/${row.id}`);
        console.log(data);
        console.log(data.ref_id, data.payment_date);
        if (data.ref_id && data.payment_date) {
          setPaymentStatus('paid');
        } else if (data.ref_id) {
          setPaymentStatus('pending');
        } else {
          setPaymentStatus('not_paid');
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        setPaymentStatus('error');
      }
    };

    checkPaymentStatus();
  }, [row.id]);

  switch(paymentStatus) {
    case 'paid':
      return (
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-green-600 bg-[rgba(250,96,96,0.4)] text-green-600">
          پرداخت شد
        </button>
      );
    case 'pending':
      return (
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-yellow-600 bg-[rgba(250,96,96,0.4)] text-yellow-600">
          در انتظار
        </button>
      );
    case 'not_paid':
      return (
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-red-600 bg-[rgba(250,96,96,0.4)] text-red-600">
          پرداخت نشده
        </button>
      );
    case 'error':
      return <div>خطایی رخ داد</div>;
    default:
      return <div>در حال بررسی...</div>;
  }
};

export default PaymentStatus;