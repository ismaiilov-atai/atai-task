import { useForm, type SubmitHandler } from 'react-hook-form';
import { TabsContent } from '@radix-ui/react-tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PageProps {
  contentValue: string;
}

interface FormInput {
  email: string;
  password: string;
}

const Signin = ({ contentValue }: PageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormInput>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  }

  return (
    <TabsContent value={contentValue} className=' w-full md:w-[50%] '>
      <Card className=' space-y-10'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className='flex flex-col justify-between h-full gap-7'
            onSubmit={handleSubmit(onSubmit)}>
            <section className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                {...register('email', {
                  required: 'Email is required',
                  minLength: 7,
                })}
              />
              {errors.email && (
                <p className='text-red-500 text-[10px] text-left'>
                  * Please check your email
                </p>
              )}
            </section>
            <section className=' space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                {...register('password', { required: true, minLength: 5 })}
              />
              {errors.password && (
                <p className='text-red-500 text-[10px] text-left'>
                  * At least needs to be 7 characters
                </p>
              )}
            </section>
            <Button
              className=' w-[60%] mx-auto'
              type='submit'
              disabled={!isDirty || !isValid}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Signin;
