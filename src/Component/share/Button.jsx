import icon from '../../assets/button-icon.png'

const Button = ({text}) => {
  return (
     <button className='text-lg primary-color flex items-center gap-1 cursor-pointer'>{text} <img src={icon} alt="" /></button>
  )
}

export default Button;