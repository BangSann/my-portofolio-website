const CustomLine = ({ 
  length = "50px", 
  thickness = "2px", 
  color = "bg-black", 
  rotate = false 
}) => {
  return (
    <div
      className={`${color} ${rotate ? "rotate-90" : ""} shadow-none`}
      style={{
        width: rotate ? thickness : length,
        height: rotate ? length : thickness,
      }}
    ></div>
  );
};

export default CustomLine;