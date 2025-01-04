export default function CustomInput({
  label,
  name,
  type = "text",
  required = true,
  onChange,
  items,
  width,
  value
}) {
  return (
      <>
          <div className={`w-full flex flex-col ${items}`}>
              <div className="flex lg:w-8/12 max-lg:w-full">
                  <p className="text-[16px] text-[#213063] mt-4 b ">
                      {label}
                  </p>
                  {required && <p className="text-red-500 text-[20px] pr-1 my-2">*</p>}
              </div>
              <input className={` h-10 rounded-2xl px-5 ${width}`}
                  type={type}
                  name={name}
                  value={value}
                  onChange={onChange} 
              />
              <div className="self-items-start lg:w-8/12 max-lg:w-full">
                  {/* error */}
              </div>
          </div>
      </>
  )
}