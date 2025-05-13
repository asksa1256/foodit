function FileInput({ name, value, onChange }) {
  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {};

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="button" onClick={handleClearClick}>
        X
      </button>
    </div>
  );
}

export default FileInput;
