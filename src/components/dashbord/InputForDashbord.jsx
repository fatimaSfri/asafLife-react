
export default function InputForDashbord({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = true,
  items}){
  const toPersianNumbers = (str) => str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  return (
    <>
    <div className={`w-full flex flex-col ${items}`}>
    <div className="flex lg:w-8/12 max-lg:w-full">
      <p className="text-[16px] text-[#213063] mt-4 b ">
        {label}
      </p>
      <p className="text-red-500 text-[20px] pr-1 my-2">*</p>
    </div>
    <input  className="lg:w-8/12 max-lg:w-full h-10 rounded-2xl px-5" 
        type={type}
        name={name}
        value={toPersianNumbers(value)}
        onChange={onChange}></input>
     <div className="self-items-start lg:w-8/12 max-lg:w-full">
     {error && <p className="text-red-500 text-[14px]">{error}</p>}</div>
 </div>
 
  </>
  )
}


