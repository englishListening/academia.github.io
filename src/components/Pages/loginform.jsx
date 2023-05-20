import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 300px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

const Register = () => {
  let navigate = useNavigate()
  const Navigate=()=>{
    navigate("/")
  }
  return (
    <FormContainer>
      <h2>Регистрация</h2>
      <Form>
        <Input type="text" placeholder="Имя" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Пароль" />
        <Input type="password" placeholder="Повторите пароль" />
        <Button type='submit'>Зарегистрироваться</Button>
      </Form>
    </FormContainer>
  );
};

export default Register;
