'use client';

import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState, useTransition } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/actions/sendEmail';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/schemas';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
import InputMask from 'react-input-mask';

export const ContactUs = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const formRef = useRef(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      sendEmail(values, formRef).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });

    form.reset();
  };

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя:</FormLabel>
              <FormControl>
                <Input placeholder="Введите имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер:</FormLabel>
              <FormControl>
                <InputMask
                  type="tel"
                  placeholder="Введите номер телефона"
                  {...field}
                  mask="+7 \999 999 99 99"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" className="w-full">
          Отправить на почту
        </Button>
      </form>
    </Form>
  );
};
