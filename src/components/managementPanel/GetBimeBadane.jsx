
import DynamicTable from './DynamicTable';

const GetBimeBadane = () => {
  const columns = [
    { header: 'شماره همراه', accessor: 'phone' },
    { header: 'آدرس', accessor: 'address' },
    { header: 'وضعیت', accessor: 'status' },
  ];

  const customRenderers = {
    status: (value) => {
      switch (value) {
        case 'pending_review':
          return 'در انتظار بررسی';
        case 'approved':
          return 'تأیید شده';
        case 'rejected':
          return 'رد شده';
        default:
          return value;
      }
    },
    
  };

  return (
    <div className="w-full h-full pt-2" dir="rtl">
      <DynamicTable
        apiEndpoint="/badane/report"
        columns={columns}
        customRenderers={customRenderers}
      />
    </div>
  );
};

export default GetBimeBadane;

