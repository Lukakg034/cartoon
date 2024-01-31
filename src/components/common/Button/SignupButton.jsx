import BaseButton from "./BaseButton";

const SignupButton = ({ ...props }) => {
  return (
    <BaseButton
      style={{
        color: "white",
        background: "red",
      }}
      {...props}
    >
      Signup Button
    </BaseButton>
  );
};

export default SignupButton;
