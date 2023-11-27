import { ButtonFieldProps } from "../../Types";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
const ButtonFiled = ({
  content,
  className,
  onClick,
  disabled,
}: ButtonFieldProps) => {
  let addToCart = false,
    buyNow = false;

  if (typeof content === "string" && content.toLowerCase() === "add to cart") {
    addToCart = true;
  } else if (
    typeof content === "string" &&
    content.toLowerCase() === "buy now"
  ) {
    buyNow = true;
  }
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {addToCart && <BsFillCartCheckFill className="addToCart-icons" />}{" "}
      {buyNow && <AiFillThunderbolt />} {content}{" "}
    </button>
  );
};

export default ButtonFiled;
