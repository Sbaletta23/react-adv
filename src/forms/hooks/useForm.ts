import { ChangeEvent, FormEvent, useState } from 'react';



export const useForm = <T> (initState: T ) => {

    const [form, setForm] = useState(initState);
    
    
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            setForm( prev => ({
                ...prev,
                [event.target.name]: event.target.value
            })
        )}

    
    const onReset =  () => {
        setForm({...initState})
    }
    
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(form);
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return {
        form,
        onChange,
        onSubmit,
        onReset,
        isValidEmail
    }
}



