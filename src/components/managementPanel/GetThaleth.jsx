import DynamicTable from './DynamicTable';
import moment from 'moment-jalaali';


moment.loadPersian({ dialect: 'persian-modern' });
const GetThaleth = () => {
  const columns = [
    { header: 'تاریخ تولد صاحب پلاک', accessor: 'owner_birthday' },
    { header: 'تلفن همراه', accessor: 'phone' },
    { header: 'آدرس', accessor: 'address' },
    { header: 'وضعیت', accessor: 'status' },
    
  ];

  const customRenderers = {
    owner_birthday: (value) => {
      if (!value) return '-';
      return moment(value).format('jYYYY/jMM/jDD'); 
    },
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
        apiEndpoint="/thaleth/report"
        columns={columns}
        customRenderers={customRenderers}
      />
    </div>
  );
};

export default GetThaleth;
