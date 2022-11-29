function InputDataDiri({ idInput, namaInput, placeholderInput }) {
  return (
    <div className="flex flex-col mx-5">
      <label htmlFor={idInput} className="text-center text-2xl py-2">
        {namaInput}
      </label>
      <input
        type="text"
        autoComplete="off"
        name={idInput}
        id={idInput}
        placeholder={placeholderInput}
        className="form-input h-10 rounded bg-[#EFEFEF] px-2"
      />
    </div>
  );
}

export default InputDataDiri;
