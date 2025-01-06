// import { useState } from "react";

// export default function FileUploadComponent({ setFiles }) {
//   const [selectedFiles, setSelectedFiles] = useState([null, null, null]);
//   const [previews, setPreviews] = useState([null, null, null]);

//   const handleFileChange = (index) => (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const newSelectedFiles = [...selectedFiles];
//       const newPreviews = [...previews];
//       newSelectedFiles[index] = file;
//       newPreviews[index] = URL.createObjectURL(file);
//       setSelectedFiles(newSelectedFiles);
//       setPreviews(newPreviews);
//       setFiles(newSelectedFiles.filter(Boolean)); 
//     }
//   };

//   const handleFileRemove = (index) => () => {
//     const newSelectedFiles = [...selectedFiles];
//     const newPreviews = [...previews];
//     newSelectedFiles[index] = null;
//     newPreviews[index] = null;
//     setSelectedFiles(newSelectedFiles);
//     setPreviews(newPreviews);
//     setFiles(newSelectedFiles.filter(Boolean)); 
//   };


//   const uploadTexts = [
//     "لطفاً تصویر گواهینامه خود را بارگذاری کنید",
//     "لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید",
//     "لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید",
//   ];

//   return (
//     <div className=" w-11/12 lg:h-4/6 max-lg:h-[550px] max-md:h-[640px] mx-auto p-4 border-dashed bg-white rounded-md flex flex-col items-center justify-center ">
//       <div className="w-full bg-white rounded-lg p-4 flex flex-wrap justify-center gap-4">
//         {selectedFiles.map((file, index) => (
//           <div key={index} className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4">
//             {!file ? (
//               <>
//                 <div className="flex flex-col items-center text-center mb-4">
//                   <img
//                     src="./img/icon/Upload.png"
//                     alt="Upload Icon"
//                     className="w-10 mb-2"
//                   />
//                   <p className="text-gray-600 max-lg:text-[14px]">{uploadTexts[index]}</p>
//                 </div>
//                 <label
//                   htmlFor={`fileInput${index}`}
//                   className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 text-[16px] rounded cursor-pointer"
//                 >
//                   بارگذاری تصویر 
//                 </label>
//                 <input
//                   id={`fileInput${index}`}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleFileChange(index)}
//                 />
//               </>
//             ) : (
              
//               <div className="flex items-center justify-between w-full">
//                 <img
//                   src={previews[index]}
//                   alt={`Preview ${index + 1}`}
//                   className="w-32 h-32 object-cover rounded-lg mb-4"
//                 />
//                 <span className="text-sm text-gray-700 flex-grow">
//                   {file.name}
//                 </span>
//                 <button
//                   onClick={handleFileRemove(index)}
//                   className="text-red-500 text-lg font-bold"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                   </svg>
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState,useEffect } from "react";

export default function FileUploadComponent({ setFiles, textbox1, textbox2 , textbox3 ,textbox4 , count , grid }){

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    const newFiles = Array(count).fill(null);
    setSelectedFiles(newFiles);
  }, [count]); 


  const handleFileChange = (index) => (event) => {
    const file = event.target.files[0];
    if (file) {
      const newSelectedFiles = [...selectedFiles];
      const newPreviews = [...previews];
      newSelectedFiles[index] = file;
      newPreviews[index] = URL.createObjectURL(file);
      setSelectedFiles(newSelectedFiles);
      setPreviews(newPreviews);
      setFiles(newSelectedFiles.filter(Boolean));
    }
  };

 
  const handleFileRemove = (index) => () => {
    const newSelectedFiles = [...selectedFiles];
    const newPreviews = [...previews];
    newSelectedFiles[index] = null;
    newPreviews[index] = null;
    setSelectedFiles(newSelectedFiles);
    setPreviews(newPreviews);
    setFiles(newSelectedFiles.filter(Boolean));
  };

  const uploadTexts = [textbox1, textbox2, textbox3 , textbox4];

  return (
    <div className={`w-full mx-auto p-4 border-dashed bg-white rounded-md flex max-lg:flex-col items-center justify-center ${grid}`}>
      {selectedFiles.map((file, index) => (
        <React.Fragment key={index}>
          <div className="bg-white  w-full rounded-lg p-4 flex flex-col flex-wrap justify-center items-center gap-4">
            <div
              className={`flex flex-col items-center justify-center border border-gray-300 rounded-lg  ${
                file ? "sm:w-52 max-sm:w-36" : "px-2 py-4"
              }`}
            >
              {!file ? (
                <>
                  <div className="flex flex-col items-center text-center mb-4">
                    <img
                      src="../img/icon/Upload.png"
                      alt="Upload Icon"
                      className="w-10 mb-2"
                    />
                    <p className="text-gray-600 max-lg:text-[14px]">
                      {uploadTexts[index]}
                    </p>
                  </div>
                  <label
                    htmlFor={`fileInput${index}`}
                    className="bg-gray-100 hover:bg-gray-200 text-[#213063] font-bold py-2 px-4 border border-gray-300 text-[16px] rounded cursor-pointer"
                  >
                    بارگذاری تصویر
                  </label>
                  <input
                    id={`fileInput${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange(index)}
                  />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center w-full  h-32 overflow-hidden ">
                  <img
                    src={previews[index]}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            
            {file && (
              <div className="flex items-center justify-between mt-2 w-10/12 overflow-hidden">
                <span className="text-sm text-gray-700 flex-grow w-10 px-4">
                  {file.name}
                </span>
                <button
                  onClick={handleFileRemove(index)}
                  className="text-red-500 text-lg font-bold ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
