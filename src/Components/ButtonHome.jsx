import React from 'react'

function ButtonHome(props) {
    return (
        // create component named ButtonHome
        <button className="bg-secondary w-full font-semibold text-slate-100 h-16 text-2xl rounded my-1">
            {props.Text}
        </button>
    )
}

export default ButtonHome