import './index.scss'
import ButtonFiled from '../../../CommonUsedComponents/ButtonField'

const Address = () => {
    return (
        <div className='cart-address'>
            <div className="cart-address-left">
                <div className='cart-address-delivery-details'>
                    <span>Deliver to :</span>
                    <p className='cart-address-name-pincode'>Mohamed Ashik, 624615</p>
                    <ButtonFiled content="Home" className='cart-address-location' />
                </div>
                <div className='cart-address-fully'>16, pallivasal Street, periyakalayam Puthur,Palani</div>
            </div>
            <div className="address-right">
            <ButtonFiled content="Change" className='cart-address-change-button' />  
            </div>
        </div>
    )
}

export default Address