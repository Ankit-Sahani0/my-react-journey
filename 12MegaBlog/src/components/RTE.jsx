import {Editor,} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE(name, controller, label, defaultValue=""){
    return(
        <div className='w-full'>
            {label && <label className='text-sm text-gray-600'>
                {label}
            </label>}

            <Controller
            name= {name}
            controller = {controller}
            
            />
        </div>
    )
}