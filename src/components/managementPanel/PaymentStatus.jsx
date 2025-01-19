import React, { useState, useEffect } from 'react';
import axiosInstance from "../axiosConfig";


const PaymentStatus = ({ row }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const {data: {installment = {}}} = await axiosInstance.get(`installment/${row.id}`);
        console.log(installment)
        if (installment.payment_date) {
          setPaymentStatus('paid');
        } else if (installment.ref_id && ( (Date.now() - (new Date(installment.ref_created_at).getTime())) < (10 * 60 * 10000) ) ) {
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
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-green-600 bg-[rgba(149,224,130,0.4)] text-green-600 mx-auto">
          پرداخت شد
        </button>
      );
    case 'pending':
      return (
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-yellow-600 bg-[rgba(236,229,132,0.4)] text-yellow-600 mx-auto">
          در انتظار
        </button>
      );
    case 'not_paid':
      return (
        <button className="whitespace-nowrap w-24 h-8 flex items-center justify-center border rounded-lg border-red-600 bg-[rgba(250,96,96,0.4)] text-red-600 mx-auto">
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