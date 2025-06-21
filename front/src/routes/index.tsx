import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createFileRoute } from '@tanstack/react-router';
import { AUTH_PAGES } from '@/types/auth_types';
import Signin from '@/components/auth/Signin';

export const Route = createFileRoute('/')({
  component: App,
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='w-full h-dvh place-content-center p-2'>
        <Tabs
          defaultValue='signup'
          className='w-full h-[80%] text-center items-center place-content-center'>
          <TabsList className='w-full md:w-[50%]'>
            <TabsTrigger value='signup'>Signup</TabsTrigger>
            <TabsTrigger value='login'>Login</TabsTrigger>
          </TabsList>

          <Signin contentValue={AUTH_PAGES.SIGNUP} />
          <Signin contentValue={AUTH_PAGES.LOGIN} />
        </Tabs>
      </section>
    </QueryClientProvider>
  );
}
