
import DynamicTable from './DynamicTable';
import NavbarForPannel from './NavbarForPannel';

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
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#f1f5f9]" dir="rtl">
      <div className="w-full bg-[#f1f5f9]">
      <NavbarForPannel width="sm:w-11/12 max-sm:w-11/12 lg:-ml-10"></NavbarForPannel>
      </div>
      <DynamicTable
        apiEndpoint="/badane/report"
        columns={columns}
        customRenderers={customRenderers}
      />
    </div>
  );
};

export default GetBimeBadane;

