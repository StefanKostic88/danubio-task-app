import CustomInput from "../CustomInput/CustomInput";
const CustomForm = ({ onSubmit, onChange, type, searchVal }) => {
  return (
    <form onSubmit={onSubmit}>
      <CustomInput onChange={onChange} type={type} searchVal={searchVal} />
    </form>
  );
};

export default CustomForm;
