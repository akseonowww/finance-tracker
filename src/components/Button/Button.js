import './Button.css'

const Button = ({ type = 'default', text = 'Button' }) => {

   return (
      <button className={`Button ${type}`}>
         {text}
      </button>
   )
}

export default Button