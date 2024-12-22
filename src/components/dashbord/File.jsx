// import { useState } from "react";

// export default function FileUploadComponent() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [preview, setPreview] = useState(null); 

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreview(URL.createObjectURL(file)); 
//     }
//   };

//   const handleFileRemove = () => {
//     setSelectedFile(null);
//     setPreview(null); 
//   };

//   return (
//     <div className="md:w-10/12 max-md:w-full h-3/6 mx-auto p-4 border-dashed border-2 border-gray-300 bg-white rounded-md flex items-center justify-center">
      
//       <div className="flex flex-col items-center justify-center  bg-white rounded-lg p-6 gap-8">
//         {!selectedFile ? (
//           <>
//             <div className="flex flex-col items-center text-center mb-4">
//               <img
//                 src="./img/icon/Upload.png"
//                 alt="Upload Icon"
//                 className="w-10 mb-2"
//               />
//               {/* عکس خود را در این مکان رها کنید یا */}
//               <p className="text-gray-600">عکس خود را در این مکان بارگذاری کنید</p>
//             </div>
//             <label
//               htmlFor="fileInput"
//               className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 rounded cursor-pointer"
//             >
//               بارگذاری تصویر 
//             </label>
//             <input
//               id="fileInput"
//               type="file"
//               accept="image/*" 
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </>
//         ) : (
//           <div className="flex flex-col-reverse items-center w-full">
//             <img
//               src={preview}
//               alt="Preview"
//               className="w-32 h-32 object-cover rounded-lg mb-4 border border-gray-300"
//             />
//             <div className="flex items-center justify-between w-full border border-gray-300 rounded-lg mt-4 p-2">
//               <span className="text-sm text-gray-700 flex-grow">
//                 {selectedFile.name}
//               </span>
//               <button
//                 onClick={handleFileRemove}
//                 className="text-red-500 text-lg font-bold"
//               >
//                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                 </svg>

//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }




import { useState } from "react";

export default function FileUploadComponent({ setFile }) {
  const [selectedFile, setSelectedFileState] = useState(null);
  const [preview, setPreview] = useState(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileState(file);
      setPreview(URL.createObjectURL(file));
      setFile(file); // ارسال فایل به کامپوننت والد
    }
  };

  const handleFileRemove = () => {
    setSelectedFileState(null);
    setPreview(null);
    setFile(null); // پاک کردن فایل در کامپوننت والد
  };

  return (
    <div className="md:w-10/12 max-md:w-full h-3/6 mx-auto p-4 border-dashed border-2 border-gray-300 bg-white rounded-md flex items-center justify-center">
      <div className="flex flex-col items-center justify-center  bg-white rounded-lg p-6 gap-8">
        {!selectedFile ? (
          <>
            <div className="flex flex-col items-center text-center mb-4">
              <img
                src="./img/icon/Upload.png"
                alt="Upload Icon"
                className="w-10 mb-2"
              />
              <p className="text-gray-600">عکس خود را در این مکان بارگذاری کنید</p>
            </div>
            <label
              htmlFor="fileInput"
              className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 rounded cursor-pointer"
            >
              بارگذاری تصویر
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*" 
              className="hidden"
              onChange={handleFileChange}
            />
          </>
        ) : (
          <div className="flex flex-col-reverse items-center w-full">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

