import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useFormV } from '../../hooks/useFormV';
import { InputForm } from '../components/InputForm';
import { loginFormFields } from '../formFields';
import { loginValidations } from '../formValidations';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const { startLogin } = useAuthStore();

  const {
    email,
    password,
    emailValid,
    passwordValid,
    formState,
    isFormValid,
    onInputChange,
  } = useFormV(loginFormFields, loginValidations);

  const handleOnSumbit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    if (!isFormValid) return;

    startLogin(formState);
  };

  return (
    <AuthLayout title={'Login'}>
      <form className='mb-3 mt-3' onSubmit={handleOnSumbit}>
        <InputForm
          name='email'
          value={email}
          type='email'
          onInputChange={onInputChange}
          errorMessage={emailValid}
          isSubmit={isSubmit}
          placeHolder='Correo'
        />
        <InputForm
          name='password'
          value={password}
          type='password'
          onInputChange={onInputChange}
          errorMessage={passwordValid}
          isSubmit={isSubmit}
          placeHolder='Contraseña'
        />
        <div className='d-grid gap-2'>
          <input type='submit' className='btnSubmit' value='Login' />
        </div>
      </form>
      <Link to='/auth/register'>Crear una cuenta</Link>
    </AuthLayout>
  );
};
