import "./Button.css";

const Button = ({type, label, onClick }) => {
  return (
    <button onClick={onClick} className={`${type === 'fill' ? 'fill' : ''} button`}>
        <p style={{color: type === 'fill' ? '#FFFFFF' : '#034EA2'}}>{label}</p>
    </button>
  )
}

export default Button