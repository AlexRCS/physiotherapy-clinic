import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import 'react-phone-number-input/style.css';
import './sms-modal.css';

import ReactDOM from 'react-dom';

const schema = z.object({
  name: z.string().min(3, { message: '*Campo obrigatório' }),
  lastname: z.string().min(3, { message: '*Campo obrigatório' }),
  email: z.string().email({ message: 'E-mail inválido' }),
  phone: z.string().min(3, { message: '*Campo obrigatório' }),
});

type FormField = z.infer<typeof schema>;

interface SmsFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SmsForm({ setOpen }: SmsFormProps) {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    try {
      const response = await fetch('/api/sendSMS', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      const responseData = responseText ? JSON.parse(responseText) : {};

      if (response.ok) {
        console.log('Dados enviados com sucesso!', responseData);
        setOpen(false);
      } else {
        setErrorMessage(responseData.error || 'Erro ao enviar os dados');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setErrorMessage('Erro de conexão. Tente novamente mais tarde.');
    }
  };

  return ReactDOM.createPortal(
    <form onSubmit={handleSubmit(onSubmit)} className="modal-window">
      <button className="close-btn" onClick={() => { setOpen(false) }}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h2>
        Preencha para que <br /> entremos em contato
      </h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div>
        <input
          type="text"
          placeholder="Nome"
          {...register('name')}
          className="form-input"
        />
        {errors.name && <div className="error-message">{errors.name.message}</div>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Último nome"
          {...register('lastname')}
          className="form-input"
        />
        {errors.lastname && <div className="error-message">{errors.lastname.message}</div>}
      </div>

      <div>
        <input
          type="email"
          placeholder="email@example.com"
          {...register('email')}
          className="form-input"
        />
        {errors.email && <div className="error-message">{errors.email.message}</div>}
      </div>

      <div className="phone-input">
        <PhoneInputWithCountry
          name="phone"
          control={control}
          rules={{ required: true }}
          defaultCountry="PT"
          placeholder="(+999)999 999 999"
          className="form-input"
        />
        {errors.phone && <div className="error-message">{errors.phone.message}</div>}
      </div>

      <button className="sms-btn" type="submit" disabled={isSubmitting}>
        Enviar
      </button>
    </form>,
    document.body
  );
}

export default SmsForm;
