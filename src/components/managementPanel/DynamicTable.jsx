// DynamicTable.jsx

import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';

const DynamicTable = ({ apiEndpoint, columns, customRenderers }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordsPerPage = 10;

  const convertToPersianNumbers = (num) => {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().split('').map(char => persianNumbers[parseInt(char)] || char).join('');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(apiEndpoint);
        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
          setFilterData(response.data.data);
        } else {
          console.error('داده‌های دریافتی نامعتبر است:', response.data);
        }
      } catch (error) {
        console.error('خطا در دریافت اطلاعات:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  const totalPages = Math.ceil(filterData.length / recordsPerPage);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * recordsPerPage;
    return filterData.slice(startIndex, startIndex + recordsPerPage);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center" dir="rtl">
      <div className="lg:w-[95%] max-lg:w-[98%] overflow-x-auto shadow-lg rounded-lg border border-opacity-25 border-[#213063] flex items-center justify-center">
        <table className="w-full rounded-2xl overflow-hidden bg-white">
          <thead>
            <tr className="bg-gray-200 h-14 text-[#213063] text-center">
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={columns.length} className="text-center py-6">در حال بارگذاری...</td>
              </tr>
            )}
            {!loading && data.length > 0 && getCurrentPageData().map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 text-center py-2">
                    {customRenderers && customRenderers[col.accessor]
                      ? customRenderers[col.accessor](row[col.accessor], row)
                      : row[col.accessor] || '-'}
                  </td>
                ))}
              </tr>
            ))}
            {!loading && data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="text-center py-6">داده‌ای موجود نیست.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white shadow-sm rounded-lg hover:bg-gray-50 disabled:opacity-50"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`px-4 py-2 rounded-md shadow-sm ${currentPage === pageNum ? 'bg-[#55c7e0] text-white' : 'bg-white hover:bg-gray-50'}`}
          >
            {convertToPersianNumbers(pageNum)}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white shadow-sm rounded-lg hover:bg-gray-50 disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;
