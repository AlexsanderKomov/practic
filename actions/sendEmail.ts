import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { MutableRefObject } from 'react';
import { FormSchema } from '@/schemas';

export const sendEmail = async (
  values: z.infer<typeof FormSchema>,
  form: MutableRefObject<null>
) => {
  const validateField = FormSchema.safeParse(values);
  // e.preventDefault();

  if (validateField.success) {
    return { error: 'Не все поля заполнены!' };
  }

  // emailjs.sendForm(
  //   // @ts-ignore
  //   process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
  //   process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
  //   form.current,
  //   {
  //     publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
  //   }
  // );

  return { success: 'Письмо отправлено!' };
};
