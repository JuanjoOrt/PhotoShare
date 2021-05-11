
export default function FullButton({text}){

    return (
        <li>
            <button className="focus:outline-none mx-4 bg-black px-4 text-white rounded">
                {text}
            </button>
        </li>
    )
}