import './index.scss'
import ButtonFiled from "../../../../CommonUsedComponents/ButtonField"
import InputFiled from "../../../../CommonUsedComponents/InputField"
const SingleAddress = () => {
  return (
    <div className="single-address">
        <InputFiled type="radio" className="radio-address" />
        <div className="name-details">
           <div className="name-specification">
           <p className="name">Mohaed Ashik B</p>
            <ButtonFiled content="work" className="address-specification" />
            <p className="ph-number">9629942274</p>
           </div>
        <div className="address-container">16, Pallivasal Street, periyakalayam Puthur, Palani, 624615</div>
        </div>
    </div>
  )
}

export default SingleAddress