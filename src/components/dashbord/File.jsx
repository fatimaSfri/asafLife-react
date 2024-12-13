// import { useState } from "react";

// export default function FileUploadComponent() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   const handleFileRemove = () => {
//     setSelectedFile(null);
//   };

//   return (
//     <div className="w-full max-w-lg mx-auto p-4 border-dashed border border-gray-300 bg-gray-50 rounded-md">
//       <label className="block text-lg font-bold text-[#213063] mb-2">
//         آواتار شرکت بیمه را بارگذاری کنید
//         <span className="text-red-500">*</span>
//       </label>
//       <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 bg-white rounded-lg p-6">
//         {!selectedFile ? (
//           <>
//             <div className="flex flex-col items-center text-center mb-4">
//               <img
//                 src="./icon.svg"
//                 alt="Upload Icon"
//                 className="w-10 mb-2"
//               />
//               <p className="text-gray-600">عکس خود را در این مکان رها کنید یا</p>
//             </div>
//             <label
//               htmlFor="fileInput"
//               className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 rounded cursor-pointer"
//             >
//               بارگذاری کنید
//             </label>
//             <input
//               id="fileInput"
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </>
//         ) : (
//           <div className="flex items-center justify-between w-full border border-gray-300 rounded-lg mt-4 p-2">
//             <img
//               src="./image-placeholder.svg"
//               alt="Uploaded File"
//               className="w-10 h-10 object-cover mr-2"
//             />
//             <span className="text-sm text-gray-700 flex-grow">
//               {selectedFile.name}
//             </span>
//             <button
//               onClick={handleFileRemove}
//               className="text-red-500 text-lg font-bold"
//             >
//               ✖
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function FileUploadComponent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null); // برای نگهداری لینک پیش‌نمایش

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // ایجاد لینک پیش‌نمایش
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setPreview(null); // حذف لینک پیش‌نمایش
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 border-dashed border border-gray-300 bg-gray-50 rounded-md">
      <label className="block text-lg font-bold text-[#213063] mb-2">
        آواتار شرکت بیمه را بارگذاری کنید
        <span className="text-red-500">*</span>
      </label>
      <div className="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 bg-white rounded-lg p-6">
        {!selectedFile ? (
          <>
            <div className="flex flex-col items-center text-center mb-4">
              <img
                src="./icon.svg"
                alt="Upload Icon"
                className="w-10 mb-2"
              />
              <p className="text-gray-600">عکس خود را در این مکان رها کنید یا</p>
            </div>
            <label
              htmlFor="fileInput"
              className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 rounded cursor-pointer"
            >
              بارگذاری کنید
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*" // فقط تصاویر
              className="hidden"
              onChange={handleFileChange}
            />
          </>
        ) : (
          <div className="flex flex-col items-center w-full">
            {/* نمایش پیش‌نمایش تصویر */}
            <img
              src={preview}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-lg mb-4 border border-gray-300"
            />
            <div className="flex items-center justify-between w-full border border-gray-300 rounded-lg mt-4 p-2">
              <span className="text-sm text-gray-700 flex-grow">
                {selectedFile.name}
              </span>
              <button
                onClick={handleFileRemove}
                className="text-red-500 text-lg font-bold"
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
