import React from 'react';

function  Footer(){
    return(
    <div class=" rounded-t-3xl  max-lg:h-96 max-lg:w-full lg:w-9/12 mx-auto h-80 mt-20  flex flex-col items-end  bg-[#f8f8f8] mb-0 px-3 ">

    <div class="z-50  w-full h-3/4 flex ">
        <div class="w-1/2  flex ">

            <div class=" w-1/3 flex flex-col p-5 max-lg:w-2/3 max-lg:text-[12px] ">
                <p class="font-bold mb-3">درباره ما</p>
            <a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]">تماس با ما</a><a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]">چرا آساف لایف؟</a>
            <a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]">مجله</a></div>

            <div class=" w-1/3  flex flex-col p-5 max-lg:w-2/3 max-lg:text-[12px] mr-[-42px]">
                <p class="font-bold mb-3  "> خدمات </p>
                <a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]"> بیمه خدام </a><a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]"> بیمه درمان</a>
                <a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]">بیمه ثالث بدنه</a>  <a href="#" class="text-[14px] mb-4 max-lg:text-[12px] max-sm:text-[9px]"> خانواده </a>
            </div>


                <div class=" w-1/3 flex flex-col p-5 max-lg:hidden mr-[-42px]">
                    <p class="font-bold mb-3"> اطلاعات تکمیلی</p>
                <a href="#" class="text-[14px] mb-4"> سنجش رضایتمندی  </a><a href="#" class="text-[14px] mb-4"> </a>
                <a href="#" class="text-[14px] mb-4"></a>
                    </div>
        </div>
        <div class="w-1/2 ">

            <div class=" w-full h-1/4 flex  justify-end px-4" >
                <img src="./img/icon/ASAF Life Insurance.svg" class="w-28 max-sm:w-20 h-full"></img>
            </div>
            
            <div class=" w-full  text-end pt-3 pl-4 text-sm  max-lg:text-[10px] " >شعبه مرکزی تهران: 91098951-021_  مدیریت: 09121887644  </div>
            <div class=" w-full  text-end pt-3 pl-4 text-sm max-lg:text-[10px] ">آدرس: خیابان دانشگاه,دانشگاه 18,پلاک 304</div>

              <div class="flex " dir="ltr">

        

            <div class="mx-5 h-2/4 z-50 flex  pt-1 pl-2 lg:pt-5"> 
                <div>
             <div class="w-14 h-14 max-sm:w-10 max-sm:h-10 "> <img src="./img/icon/ASAF-01.svg" class="w-full h-full object-cover z-50 mt-1 "></img>
             </div>
              <p class="text-[10px] max-lg:text-[9px] pt-4 text-center ">بیمه حمل و نقل</p>
          </div>
          </div></div>
        </div>
    </div>
  <div class="w-full   h-1/4 flex justify-between mt-2 pb-5 ">
    <div class=" w-1/2 max-lg:2/3 h-16  text-center max-sm:text-[7px] pt-3 text-[10px]  bg-[#bbbbbb] rounded-lg">  تمامی حقوق مادی و معنوی سایت  محفوظ و متعلق به شرکت آینده سازان آسایش فردا می باشد 
    <br/> طراحی و توسعه تیم انفورماتیک  آینده سازان آسایش فردا</div>

    <div class=" w-1/4 h-full flex  justify-end max-md:w-1/2 "  >
        <div  class=" w-2/12 h-full flex items-center justify-center ">
            <img src="./img/footer/social/instagram-2016-logo-svgrepo-com.svg"  class="w-5 h-5 object-cover cursor-pointer"></img>
        </div>
        <div class="w-2/12 h-full flex items-center justify-center ">
          <a > 
             <img src="./img/footer/social/telegram-svgrepo-com.svg"  class="w-6 h-6 object-cover cursor-pointer"></img>
            </a>
        </div>
        <div class=" w-2/12 h-full flex items-center justify-center ">
            <img src="./img/footer/social/whatsapp-symbol-logo-svgrepo-com.svg"  class="w-6 h-6 object-cover cursor-pointer"></img>
        </div>
    
        <div class="  w-2/12 h-full  flex items-center justify-center ">
            <img src="./img/footer/social/eitaa-icon-colorful.svg " class="w-5 h-5 object-cover cursor-pointer"></img>
        </div>
       
    </div>
  </div>     
</div>
    )



}

export default Footer