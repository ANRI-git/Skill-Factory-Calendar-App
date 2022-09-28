import { useEffect } from 'react';
import { useAuthStore } from '../../hooks/useAuthStore';
import './authLayout.css';

export const AuthLayout = ({ children, title }) => {
  const { errorMessage } = useAuthStore();

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className='auth-container'>
      <div className='col-sm-8 col-md-6 col-lg-4 auth-body'>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
};
