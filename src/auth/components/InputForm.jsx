
export const InputForm = ({
  value,
  type = "text",
  onInputChange,
  errorMessage,
  isSubmit,
  name,
  placeHolder = "",
}) => {
  return (
    <div className="form-group mb-2">
      <input
        type={type}
        className={`form-control ${errorMessage && isSubmit && 'is-invalid'}`}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onInputChange}
      />
      <span
        style={{
            display: errorMessage && isSubmit ? 'block' : 'none',
            color: '#fff'
        }}
      >
        {errorMessage}
      </span>
    </div>
  );
};
