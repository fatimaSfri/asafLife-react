import React from 'react';

function  Footer(){
    return(
    <div class=" rounded-t-3xl bg-[#213063] max-lg:h-[550px] w-full mx-auto h-60  flex flex-col items-end mb-0 px-3 ">

    <div class="z-50  w-full h-full flex max-lg:flex-col ">
        <div class="w-6/12 flex max-lg:w-full p-4 justify-center ">
          
            <div class=" w-1/3 flex flex-col p-5 max-lg:w-2/3  lg:text-[16px] z-20 ">
                <p class="font-bold mb-3 text-[#55c7e0]">درباره ما</p>
            <a href="#" class=" mb-4 lg:text-[14px]  text-white">تماس با ما</a><a href="#" class="text-[14px] mb-4   text-white">چرا آساف لایف؟</a>
            <a href="#" class="text-[14px] mb-4  text-white">مجله</a></div>

            <div class=" w-1/3  flex flex-col p-5 max-lg:w-2/3  mr-[-42px]">
                <p class="font-bold mb-3 text-[#55c7e0] "> خدمات </p>
                <a href="#" class="text-[14px] mb-4  text-white"> بیمه خدام </a><a href="#" class="text-[14px] mb-4  text-white"> بیمه درمان</a>
                <a href="#" class="text-[14px] mb-4   text-white">بیمه ثالث بدنه</a>  <a href="#" class="text-[14px] mb-4  text-white"> خانواده </a>
            </div>

          <div class=" w-1/3 flex flex-col p-5 max-lg:hidden mr-[-42px]">
                    <p class="font-bold mb-3 text-[#55c7e0]"> اطلاعات تکمیلی</p>
                <a href="#" class="text-[14px] mb-4 text-white"> سنجش رضایتمندی  </a><a href="#" class="text-[14px] mb-4"> </a>
                <a href="#" class="text-[14px] mb-4"></a>
                    </div>
        </div>
        <div className='w-4/12 max-lg:w-11/12 h-full flex flex-col  justify-center mx-4 max-lg:mb-10 '>
        <div className=' h-10 flex items-center my-1'>
        <img src="./img/footer/phone.png" alt="" className='h-7 pl-4' />
            <p className='font-bold text-white' >مدیریت:</p>
            <p className=' text-white px-2'>09121887644</p>
        </div>
        <div className='h-10  flex items-center my-1'>
        <img src="./img/footer/fax.png" alt="" className='h-7 pl-4' />
        <p className='font-bold text-white'>شعبه مرکزی:</p>
        <p className=' text-white px-2'>021-91098951</p>
        </div>
        <div className=' h-10 flex items-center my-1'>
        <img src="./img/footer/placeholder.png" alt="" className='h-7 pl-4' />
        <p className='font-bold text-white'>آدرس:</p>
        <p className=' text-white px-2'>خیابان دانشگاه،دانشگاه 18، پلاک 304</p>
       </div>
        
        </div>
        
        <img src="./img/footer/ASAFLogo.svg" alt="" className='w-[20%] h-40 lg:m-8 max-lg:mx-auto  max-lg:w-[25%] max-sm:w-[42%]' />
  </div>     
</div>

    )



}

export default Footer