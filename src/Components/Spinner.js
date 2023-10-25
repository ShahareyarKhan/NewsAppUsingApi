import React from 'react'
export default function Spinner(props){
    return (
        <div className="text-center">
            <div className={`spinner-border text-${props.mode==="light"?"success":"danger"}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}