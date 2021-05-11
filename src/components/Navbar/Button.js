
export default function Button({text, className}){

    return (
        <li>
            <button className={`focus:outline-none mx-4 ${className}`}>
                {text}
            </button>
        </li>
    )
}