import Lottie from "lottie-react";
import blog from '/src/assets/json/blog.json';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';    

export default function Card({ title , gap ,titleCardOne,subTitleOne , titleCardTwo ,subTitleTwo,titleCardThree , subTitleThree }) {
  useEffect(() => {
    AOS.init();
}, []);

  const blogPosts = [
    {
      imgSrc: "./img/blog/blog3.webp",
      title: titleCardOne,
      description:subTitleOne  
    },
    {
      imgSrc: "./img/blog/blog2.webp",
      title:titleCardTwo,
      description: subTitleTwo
    },
    {
      imgSrc: "./img/blog/blog1.webp",
      title: titleCardThree,
      description: subTitleThree
    }
  ];

  return (
    <>
      <div className={`w-full flex flex-col items-center justify-center h-auto ${gap}`} data-aos="fade-up" data-aos-duration="1500" >
        <div className="xl:w-[1100px] lg:w-[900px] md:w-[700px] sm:w-[400px] max-sm:w-[250px] flex items-center">
          <div className="flex justify-center items-center w-14  -mt-5">
            <Lottie animationData={blog} loop={true} />
          </div>
          <p className="font-bold text-[#213063] text-[18px] px-2">{title}</p>
        </div>
        <div className="grid gap-6 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl shadow min-w-[200px] max-w-[350px] flex flex-col min-h-[350px]">
              <div className="w-full">
                <img src={post.imgSrc} alt="" className="rounded-2xl" />
              </div>
              <div className="font-bold w-10/12 flex relative overflow-hidden">
                <h2 className="text-lg max-sm:text-[14px] text-[#213063] mt-4 mr-6">{post.title}</h2>
              </div>
              <p className="text-gray-600 flex-grow  mx-auto w-11/12 py-1 text-[12px] overflow-hidden ">{post.description}</p>
              <button className="text-[#213063] hover:underline text-[14px] text-left ml-6 py-4 max-sm:text-[12px]">
                توضیحات بیشتر &#62;
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}