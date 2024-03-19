import * as z from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const FormSchema = z.object({
  name: z.string().min(1, {
    message: 'Имя обязательное поле!',
  }),
  phone: z
    .string()
    .min(3, {
      message: 'Введите номер',
    })
    .regex(phoneRegex, 'Введите корректный номер'),
});
