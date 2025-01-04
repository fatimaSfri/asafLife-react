// import "../newbanner/NewBanner.css"
// import MultiFile from "./MultiFile.jsx"
// import CustomInput from './CustomInput';

// export default function Third() {





//   return (
//     <div className="w-full md:h-[150vh] max-md:h-[200vh] bg-[#e9e9e9]">
//       <div className="w-full h-[400px]  flex justify-center items-end">
//       <div className="max-xl:w-11/12 xl:w-8/12 h-5/6 flex items-center justify-center rounded-2xl bg-gradient-circle-carBody">
//       <img src="./img/ten-ten/img-ob.png" alt="" className="object-cover lg:h-[400px]"/>
//       </div>
//       </div>
//       {/* form */}
//       <div className="w-full  flex flex-col items-center justify-center">
//        <div className=" w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
//         <div className=" flex justify-end">
//            <img src="./img/logo/tavon.webp" alt="" className="h-20"/> 
//         </div>
//         <div className="w-full flex items-center justify-center relative">
//          <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
//          <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
//          <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">ثالث بدنه</p>
//         </div>
//        </div> 
//        <div className=" flex max-xl:w-11/12 xl:w-8/12 ">
//        <MultiFile
//        textbox1= "لطفاً تصویر گواهینامه خود را بارگذاری کنید"
//        textbox2= "لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید"
//        textbox3= "لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید"
//        ></MultiFile>
//        </div>
//        <div className="max-lg:w-11/12 lg:w-11/12 mt-10 rounded-lg flex flex-col items-center justify-center ">
//        <div className="max-md:w-10/12 md:w-full h-full flex flex-col  items-center mx-auto">
//        <div className="md:flex max-md:flex-col w-full gap-4 ">
//        <CustomInput
//         label=" تاریخ تولد صاحب پلاک"
//         items="items-end"
//         name=""
//         width="lg:w-8/12 max-lg:w-full"/>
//        <CustomInput
//         label=" تلفن همراه"
//         items="items-start"
//         name=""
//         width="lg:w-8/12 max-lg:w-full"/>
//        </div>
//        </div>
//        <div className="max-md:w-10/12 md:w-full h-full flex flex-col items-center mx-auto">
//        <div className="md:flex max-md:flex-col lg:w-8/12 max-lg:w-full gap-4">
//        <CustomInput
//                   label=" آدرس دقیق"
//                   items="items-start"
//                   name=""
//                   width="lg:w-[48%] max-lg:w-full"
              
//                 />
//          </div>
//        </div>
//        <div className="lg:w-8/12 max-lg:w-full max-lg:items-end max-sm:px-8 h-16 flex justify-end">
//        <button className='w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
//       style={{
//         background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
//       }}
//      >
//       تایید
//      </button>
//        </div>
//        </div>
       
    
//       </div>

//     </div>
//   )
// }



import "../newbanner/NewBanner.css";
import MultiFile from "./MultiFile.jsx";
import CustomInput from './CustomInput';
import axiosInstance from "../axiosConfig";
import { useState, useEffect } from "react";


export default function Third() {
  const [state, setState] = useState({
    formData: { owner_birthday: "", phone: "", address: "" },
    selectedFiles: { vehicleCartPhotos: [], certificatePhoto: null },
    errors: {},
    backendErrors: {},
    popup: {
      show: false,
      message: "",
      isError: false,
    },
  });

  useEffect(() => {
    let timeout;
    if (state.popup.show) {
      timeout = setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          popup: { ...prevState.popup, show: false },
        }));
      }, 7000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [state.popup.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Owner Birthday:", state.formData.owner_birthday);
console.log("Phone:", state.formData.phone);
console.log("Selected Files:", state.selectedFiles);

    // اطلاعات فرم را در اینجا چک کنید
    console.log("Form Data before submission:", state.formData);
    
    const { vehicleCartPhotos, certificatePhoto } = state.selectedFiles;
    const { owner_birthday, phone } = state.formData;
  
    if (!owner_birthday || !phone || !vehicleCartPhotos.length || !certificatePhoto) {
      setState((prevState) => ({
        ...prevState,
        errors: {
          owner_birthday: !owner_birthday ? "تاریخ تولد الزامی است." : "",
          phone: !phone ? "تلفن الزامی است." : "",
          vehicleCartPhotos: !vehicleCartPhotos.length ? "تصاویر کارت ماشین الزامی هستند." : "",
          certificatePhoto: !certificatePhoto ? "تصویر گواهینامه الزامی است." : "",
        },
      }));
      return;
    }
  
    // ارسال داده‌ها
    try {
      const uploadData = new FormData();
      uploadData.append("owner_birthday", owner_birthday);
      uploadData.append("phone", phone);
      uploadData.append("address", state.formData.address);
  
      // اضافه کردن فایل‌ها به FormData
      vehicleCartPhotos.forEach((file) => {
        uploadData.append("vehicle_cart_photos", file);
      });
  
      uploadData.append("certificate_photo", certificatePhoto);
  
      // ارسال داده‌ها به سرور
      const response = await axiosInstance.post("/thaleth", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log('Response:', response.data);
      setState((prevState) => ({
        ...prevState,
        formData: { owner_birthday: "", phone: "", address: "" },
        selectedFiles: { vehicleCartPhotos: [], certificatePhoto: null },
        errors: {},
        backendErrors: {},
        popup: {
          show: true,
          message: "اطلاعات با موفقیت ارسال شد.",
          isError: false,
        },
      }));
  
    } catch (error) {
      console.error('Error sending data:', error.response ? error.response.data : error.message);
      // مدیریت خطاها
    }
  };
  
  

  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [name]: value },
      errors: { ...prevState.errors, [name]: "" },
    }));
  };

  const handleFileChange = (e, type) => {
    console.log('File change event:', e.target.files);
    const files = e.target.files;
    if (files.length > 0) {
      setState((prevState) => ({
        ...prevState,
        selectedFiles: {
          ...prevState.selectedFiles,
          [type]: Array.from(files), 
        },
      }));
    }
  };
  




  return (
    <div className="w-full md:h-[150vh] max-md:h-[200vh] bg-[#e9e9e9]">
      <div className="w-full h-[400px]  flex justify-center items-end">
        <div className="max-xl:w-11/12 xl:w-8/12 h-5/6 flex items-center justify-center rounded-2xl bg-gradient-circle-carBody">
          <img src="./img/ten-ten/img-ob.png" alt="" className="object-cover lg:h-[400px]"/>
        </div>
      </div>
      {/* form */}
      <div className="w-full  flex flex-col items-center justify-center">
        <div className=" w-full h-[130px] max-xl:w-11/12 xl:w-8/12 flex flex-col">
          <div className=" flex justify-end">
            <img src="./img/logo/tavon.webp" alt="" className="h-20"/> 
          </div>
          <div className="w-full flex items-center justify-center relative">
            <div className="bg-[#55c7e0] w-4 h-4 rounded-full"></div>
            <div className="w-full h-[1.5px] bg-[#55c7e0] mx-1"></div>
            <p className="absolute bg-[#e9e9e9] px-6 lg:text-[20px] font-KalamehBold text-[#213063]">ثالث بدنه</p>
          </div>
        </div> 
        <div className=" flex max-xl:w-11/12 xl:w-8/12 ">
          <MultiFile
            handleFileChange={handleFileChange}
            setFiles={(files) => setState(prevState => ({
              ...prevState,
              selectedFiles: { ...prevState.selectedFiles, vehicleCartPhotos: files }
            }))}
            textbox1="لطفاً تصویر رو کارت ماشین خود را بارگذاری کنید"
            textbox2="لطفاً تصویر پشت کارت ماشین خود را بارگذاری کنید"
            textbox3="لطفاً تصویر گواهینامه خود را بارگذاری کنید"
          />
        </div>
        <div className="max-lg:w-11/12 lg:w-11/12 mt-10 rounded-lg flex flex-col items-center justify-center ">
          <div className="max-md:w-10/12 md:w-full h-full flex flex-col  items-center mx-auto">
            <div className="md:flex max-md:flex-col w-full gap-4 ">
              <CustomInput
                label="تاریخ تولد صاحب پلاک"
                items="items-end"
                name="owner_birthday"
                value={state.formData.owner_birthday}
                handleInputChange={handleInputChange}
                width="lg:w-8/12 max-lg:w-full"
              />
              <CustomInput
                label="تلفن همراه"
                items="items-start"
                name="phone"
                value={state.formData.phone}
                handleInputChange={handleInputChange}
                width="lg:w-8/12 max-lg:w-full"
              />
            </div>
          </div>
          <div className="max-md:w-10/12 md:w-full h-full flex flex-col items-center mx-auto">
            <div className="md:flex max-md:flex-col lg:w-8/12 max-lg:w-full gap-4">
              <CustomInput
                label="آدرس دقیق"
                items="items-start"
                name="address"
                value={state.formData.address}
                handleInputChange={handleInputChange}
                width="lg:w-[48%] max-lg:w-full"
              />
            </div>
          </div>
          <div className="lg:w-8/12 max-lg:w-full max-lg:items-end max-sm:px-8 h-16 flex justify-end">
            <button
              onClick={handleSubmit}
              className='w-[150px] h-10 rounded-full custom-bg custom-shadow flex items-center justify-center text-white gap-2'
              style={{
                background: 'linear-gradient(to bottom, #dbf7ff 0.2%, #7fe2ff ,#0096e3 50%)',
              }}
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
