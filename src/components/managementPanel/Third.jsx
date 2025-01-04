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
  const [formData, setFormData] = useState({ owner_birthday: "", phone: "", address: "" });
  const [selectedFiles, setSelectedFiles] = useState({ vehicle_cart_photos: [], certificate_photo: null });
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});
  const [popup, setPopup] = useState({ show: false, message: "", isError: false });

  useEffect(() => {
    let timeout;
    if (popup.show) {
      timeout = setTimeout(() => {
        setPopup({ ...popup, show: false });
      }, 7000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [popup.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data before submission:", formData);

    const { vehicle_cart_photos, certificate_photo } = selectedFiles;
    const { owner_birthday, phone } = formData;

    if (!owner_birthday || !phone || !vehicle_cart_photos.length || !certificate_photo) {
      setErrors({
        owner_birthday: !owner_birthday ? "تاریخ تولد الزامی است." : "",
        phone: !phone ? "تلفن الزامی است." : "",
        vehicle_cart_photos: !vehicle_cart_photos.length ? "تصاویر کارت ماشین الزامی هستند." : "",
        certificate_photo: !certificate_photo ? "تصویر گواهینامه الزامی است." : "",
      });
      return;
    }

    try {
      const uploadData = new FormData();
      uploadData.append("owner_birthday", owner_birthday);
      uploadData.append("phone", phone);
      uploadData.append("address", formData.address);

      vehicle_cart_photos.forEach((file) => {
        uploadData.append("vehicle_cart_photos", file);
      });

      uploadData.append("certificate_photo", certificate_photo);

      const response = await axiosInstance.post("/thaleth", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log('Response:', response.data);
      setFormData({ owner_birthday: "", phone: "", address: "" });
      setSelectedFiles({ vehicle_cart_photos: [], certificate_photo: null });
      setErrors({});
      setBackendErrors({});
      setPopup({ show: true, message: "اطلاعات با موفقیت ارسال شد.", isError: false });
    } catch (error) {
      console.error('Error sending data:', error.response ? error.response.data : error.message);
    }
  };

  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value);
    console.log("Owner Birthday:", formData.owner_birthday);
    console.log("Phone:", formData.phone);
    console.log("Selected Files:", selectedFiles);
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    setErrors(prevState => ({ ...prevState.errors, [name]: "" }));
  };

  const handleFileChange = (e, type) => {
    console.log('File change event:', e.target.files);
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles(prevState => {
        if (type === 'certificate_photo') {
          return { ...prevState, certificate_photo: files[0] };
        } else {
          const newFiles = Array.from(files);
          return { ...prevState, vehicle_cart_photos: newFiles };
        }
      });
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
            onChange={handleFileChange}
            setFiles={(files) => setSelectedFiles(prevState => ({
              ...prevState,
              vehicle_cart_photos: files.slice(0, 2),
              certificate_photo: files.length > 2 ? files[2] : null
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
                value={formData.owner_birthday}
                onChange={handleInputChange}
                width="lg:w-8/12 max-lg:w-full"
              />
              <CustomInput
                label="تلفن همراه"
                items="items-start"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
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
                value={formData.address}
                onChange={handleInputChange}
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
