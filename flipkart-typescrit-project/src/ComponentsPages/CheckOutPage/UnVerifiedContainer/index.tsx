import { unverifiedDataType } from "../../../Types";

const UnVerifiedContainer = ({ data }: unverifiedDataType) => {
  const { number, name } = data;
  return (
    <div className="order-summary-heading">
      <p className="row-number">{number}</p>
      <h4 className="heading">{name}</h4>
    </div>
  );
};

export default UnVerifiedContainer;
