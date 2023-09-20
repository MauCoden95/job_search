const Button = (props) => {
  return (
    <button className={`block ${props.width} text-xl px-6 py-2 border-2 rounded-sm ${props.color} ${props.text} ${props.over}`}>
        {props.name}
    </button>
  )
}

export default Button;
