import { GoVerified } from "react-icons/go";
import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import { VerifiedContainerPropsType } from "../../../Types";

const VerifiedContainer = ({ data }: VerifiedContainerPropsType) => {
  const { number, name, content, onclick } = data;
  return (
    <div className="login">
      <div className="login-verifed-container">
        <p className="row-number">{number}</p>
        <div className="login-name-details">
          <div className="login-name-container">
            <h4 className="heading">{name}</h4>
            <GoVerified className="verified" />
          </div>
          <div className="items">
            {content.map((item: string, index: number) => (
              <p className="login-name" key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <ButtonFiled content={"Change"} className="change-button" onClick={onclick} />
    </div>
  );
};

export default VerifiedContainer;
