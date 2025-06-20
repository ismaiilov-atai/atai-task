import { userZodeSchema } from '../../../server/types/user_type';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ACCESS_TOKEN } from '@/lib/constants';
import { inserUser } from '@/lib/insertUser';
import { TabsContent } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from 'sonner';
import type z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type FormData = z.infer<typeof userZodeSchema>;
interface PageProps {
  contentValue: string;
}

const Signin = ({ contentValue }: PageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(userZodeSchema),
    mode: 'onChange',
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      inserUser({ email: watch('email'), password: watch('password') }),
    onSuccess: (data) => {
      if ('token' in data) {
        localStorage.setItem(ACCESS_TOKEN, data.token);
        toast.success('User created successfully!');
      } else {
        toast.error(
          <>
            <p className='text-sm'>Failed to create</p>
            <span>{data.error}</span>
          </>
        );
      }
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (_, e) => {
    e?.preventDefault();
    mutate();
  };

  return (
    <TabsContent value={contentValue} className=' w-full md:w-[50%] '>
      <Card className=' space-y-10 text-left'>
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>
            Create an account to unlock full benefits
          </CardDescription>
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
                autoComplete='email'
                {...register('email')}
              />
              {errors.email && (
                <p className='text-red-500 text-[10px] text-left'>
                  {errors.email.message}
                </p>
              )}
            </section>
            <section className=' space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                autoComplete='password'
                {...register('password')}
              />
              {errors.password && (
                <p className='text-red-500 text-[10px] text-left'>
                  {errors.password.message}
                </p>
              )}
            </section>
            <Button
              className=' w-[60%] mx-auto'
              type='submit'
              disabled={!isDirty || !isValid || isPending}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Signin;
