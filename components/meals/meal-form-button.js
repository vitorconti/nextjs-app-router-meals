'use client'
import {useFormStatus} from 'react-dom'


export default function MealFormButton(){
    const {pending} = useFormStatus()

    if (pending){
        return <button disabled >Submitting</button>
    }
    return <button>Share meal</button>
}