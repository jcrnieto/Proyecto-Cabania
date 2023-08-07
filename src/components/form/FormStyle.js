import styled from 'styled-components';

export const FormContainer = styled.section`
  height: 90vh;
  width: 85%;
  background-color: #e8e8e8;
  margin-left: 200px;
  padding-top: 80px;

  @media (max-width: 767px) {
      margin-left: 0; 
      width: auto;
      height: 90%;
   }
`
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 2.5em;
  border-radius: 25px;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
  width: 800px;
  height: 400px;
  margin-left: 130px;
  
  &:hover {
    transform: translateX(-0.5em) translateY(-0.5em);
    border: 1px solid #171717;
    box-shadow: 10px 10px 0px #666666;
  }

  @media (max-width: 767px) {
     margin-left: 0;
     width:auto;
     margin-bottom: 80px;
     margin-left: 10px;
     margin-right: 10px;
   }
`

export const TextForm = styled.p`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 0;
`

export const InputName = styled.input`
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 1em;
  transition: .4s ease-in-out;
  margin-bottom:8px;
  color: black;

  &:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  }

  &:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  }
`

export const InputMail = styled.input`
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 1em;
  transition: .4s ease-in-out;
  margin-bottom:8px;
  color: black;

  &:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  }

  &:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  }
`

export const InputPhone = styled.input`
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 1em;
  transition: .4s ease-in-out;
  margin-bottom:8px;
  color: black;

  &:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  }

  &:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  }
`

export const InputMessage = styled.textarea`
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
  color: black;

  &:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  }

  &:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  }
`

export const ButtonSubmit = styled.button`
  margin-top: 2em;
  align-self: center;
  padding: 0.7em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px;
  border: none;
  color: black;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
 

  &:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em)
  }

  &:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
  }
`