import React from 'react';

function CustomInput({
  placeholder,
  icon,
  initialValue,
  name,
  validationError,
  count,
  onChange,
  type,
  maxLength,
  showToggle,
  toggleShowPassword,
  showPassword,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={initialValue}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        maxLength={maxLength}
      />
      
      {icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={icon} alt="Icon" className="h-5 w-5" />
        </span>
      )}

      {showToggle && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l7 7a1 1 0 001.414-1.414l-7-7a1 1 0 00-1.414 1.414zM17.414 11l-2 2a1 1 0 010 1.414l2-2a1 1 0 00-1.414-1.414z" clip-rule="evenodd" />
            </svg>
          )}
        </button>
      )}

      {validationError && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-red-500">
          {validationError}
        </div>
      )}

      {count && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
          {count}
        </div>
      )}
    </div>
  );
}

export default CustomInput;