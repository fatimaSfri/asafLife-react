export default function CustomInput({
    label,
    name,
    type = "text",
    required = true,
    onChange,
    items,
    width,
    value,
    error,
  }) {
    return (
      <>
        <div className={`w-full flex flex-col  ${items}`}>
          <div className={`flex w-[94%] `}>
            <p className="text-[16px] text-[#213063] mt-4 ">
              {label}
            </p>
            {required && <p className="text-red-500 text-[20px] pr-1 my-2">*</p>}
          </div>
          <input
            className={` h-10 rounded-2xl px-5 ${width} ${
              error ? "border-red-500" : ""
            }`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
          <div className="self-items-start w-[90%]">
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
      </>
    );
  }