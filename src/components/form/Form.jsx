import { 
    FormContainer,
    ContainerForm,
    TextForm,
    InputName,
    InputMail, 
    InputPhone, 
    InputMessage, 
    ButtonSubmit,
    //Error
} from "./FormStyle";
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
const apikey =  import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

const Form = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    const form = useRef();
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = () => {
        emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then((result)=>{
         console.log(result.text);
         alert('Formulario enviado con éxito')
         resetForm();
    }, (error)=>{
      console.log(error.text);
    }); 
    };

    const resetForm = () => {
        form.current.reset();
    };
    
 return (
      <FormContainer id="contacto" >
          <ContainerForm ref={form} onSubmit={handleSubmit(onSubmit)}>
              <TextForm> Contacto</TextForm>
              <InputName 
                   placeholder="Nombre" 
                   type="text"
                   name='user_name' 
                   {...register('user_name', {
                    pattern: /[a-zA-Z ]{2,254}/,
                    required:true,
                   })}/>
                   {errors.user_name?.type === 'required' && 
                    <div style={{marginTop:'-20px'}}>
                      <p style={{color:'red', margin: 0}}> El campo nombre es requerido</p>
                    </div>}
                   {errors.user_name?.type ==='pattern'  && 
                    <div style={{marginTop:'-20px'}}>
                      <p style={{color:'red', margin: 0}}>El campo nombre es incorrecto</p>
                    </div>}
              <InputMail
                   placeholder="Email"
                   type="name"
                   name='user_email'
                   {...register('user_email',{
                    required:true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                   })}/>
                   {errors.user_email?.type === 'required' && 
                   <div style={{marginTop:'-20px'}}>
                      <p style={{color:'red', margin: 0}}>El campo email es requerido</p>
                   </div>}
                   {errors.user_email?.type ==='pattern'  &&
                    <div style={{marginTop:'-20px'}}>
                       <p style={{color:'red', margin: 0}}>El campo email es incorrecto</p>
                    </div>}
              <InputPhone
                   placeholder="Teléfono"
                   type="number"
                   {...register('user_phone',{
                    required:true
                    })}/>
                   {errors.user_phone?.type === 'required' &&
                   <div style={{marginTop:'-20px'}}>
                      <p style={{color:'red', margin: 0}}>El campo telefono es requerido</p>
                   </div>}
              <InputMessage 
                   placeholder="Mensaje"
                   {...register('message',{
                    required:true 
                    })}/>
                    {errors.message?.type === 'required' && 
                    <div style={{marginTop:'-10px'}}>
                       <p style={{color:'red'}}>El campo mensaje es requerido</p>
                    </div>}
              <ButtonSubmit>Enviar</ButtonSubmit>
          </ContainerForm>
      </FormContainer>
  )
}

export default Form

