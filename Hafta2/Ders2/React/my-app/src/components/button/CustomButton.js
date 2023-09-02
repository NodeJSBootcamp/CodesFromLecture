const CustomButton = (props) =>{
    return(
        <button onClick={props.onClick} className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">{props.buttonText}</button>
    )
}

export default CustomButton;