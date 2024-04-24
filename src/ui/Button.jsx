import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
    const className = 'bg-yellow-500 px-4 py-2 rounded-full font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-600 hover:text-stone-200 transition-colors duration-300 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-300 disabled:cursor-not-allowed';

    if (to) {
        return <Link to={to} className={className}> {children} </Link>
    }

    return (
        <button disabled={disabled} className={className}>
            {children}
        </button>
    )
}

export default Button
