import { useState } from "react";
import { useForm } from "react-hook-form";


export function RaceForm(){
    const {register, handleSubmit}=useForm()
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    

    return(
        <form onSubmit={handleSubmit(onSubmit, onError)}>

            <input {...register('drivers', {required: true})}></input>
            <select>
                <option value=""></option>
                <option>Driver1</option>
            </select>

            <input type='date' {...register('date', {required: true})}></input>
            
            <button type="submit">Submit</button>
        </form>
        
    )

}

