import React from 'react'
import ButtonFiled from '../../../CommonUsedComponents/ButtonField'

const Address = () => {
    return (
        <div>
            <div className="address-left">
                <div>
                    <span>Deliver to :</span>
                    <p>Mohamed Ashik, 624615</p>
                    <ButtonFiled content="Home" className='cart-address-location' />
                </div>
                <div>16, pallivasal Street, periyakalayam Puthur,Palani</div>
            </div>
            <div className="address-right">
            <ButtonFiled content="Change" className='cart-address-location' />  
            </div>
        </div>
    )
}

export default Address