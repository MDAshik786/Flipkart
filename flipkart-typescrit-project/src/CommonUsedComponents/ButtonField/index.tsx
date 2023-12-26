import { ButtonFieldProps } from "../../Types";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { GoVerified } from "react-icons/go";

const ButtonFiled = ({
  content,
  className,
  onClick,
  disabled,
  type,
}: ButtonFieldProps) => {
  let addToCart = false,
    buyNow = false,
    added = false;

  if (typeof content === "string" && content.toLowerCase() === "add to cart") {
    addToCart = true;
  } else if (
    typeof content === "string" &&
    content.toLowerCase() === "buy now"
  ) {
    buyNow = true;
  } else if (typeof content === "string" && content.toLowerCase() === "added") {
    added = true;
  }
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={disabled ? { backgroundColor: "#5C8374" } : {}}
    >
      {addToCart && <BsFillCartCheckFill className="addToCart-icons" />}
      {buyNow && <AiFillThunderbolt />}
      {added && <GoVerified />}
      {content}
    </button>
  );
};

export default ButtonFiled;
