const BaseButton = ({ children, ...props }) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: "#3498db",
        color: "#fff",
        padding: "2rem, 3rem",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
