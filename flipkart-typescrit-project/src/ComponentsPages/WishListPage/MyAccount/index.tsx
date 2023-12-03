import './index.scss'
import ImageField from '../../../CommonUsedComponents/ImageField'
import profile from '../../../Asserts/Images/profileMale.svg'

const MyAccount = () => {
  return (
    <div className='wishlist-myaccount'>
     <div>
     <ImageField src={profile} alt='profile' />
     </div>
      <div className="details">
        <p className='hello-msg'>Hello</p>
        <h4>Mohamed Ashik</h4>
      </div>
    </div>
  )
}

export default MyAccount