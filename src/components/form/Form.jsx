import { FormContainer, ContainerForm, TextForm, InputName, InputMail, InputPhone, InputMessage, ButtonSubmit} from "./FormStyle";

const Form = () => {
  return (
      <FormContainer id="contacto">
          <ContainerForm>
              <TextForm> Contacto</TextForm>
              <InputName placeholder="Nombre" type="text"/>
              <InputMail placeholder="Mail" type="mail"/>
              <InputPhone placeholder="Teléfono" type="number"/>
              <InputMessage placeholder="Mensaje"/>
              <ButtonSubmit>Enviar</ButtonSubmit>
          </ContainerForm>
      </FormContainer>
  )
}

export default Form

