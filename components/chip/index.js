import React from 'react'
import style from './chip.module.css'

const Chip = ({ icon, label }) => {
    return (
        <div className='flex items-center py-2 px-3 bg-white'>
            {icon}
            <span className='px-2'>{label}</span>
        </div>
    )
}

Chip.displayName = "Chip";

export default Chip