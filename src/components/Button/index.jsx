const Button = ({dark,btnText}) => {
  return (
    <button className={`h-[53px] md:px-[50px] px-[30px] text-[18px] w-fit leading-[24px] font-normal border border-white rounded-[28px] ${dark ? 'text-white bg-transparent' : 'bg-white text-black'} `}>
        {btnText}
    </button>
  )
}

export default Button