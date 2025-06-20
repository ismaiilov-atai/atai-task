import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createFileRoute } from '@tanstack/react-router';
import Signin from '@/components/Signin';

export const Route = createFileRoute('/')({
  component: App,
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='w-full h-full p-2'>
        <Tabs
          defaultValue='signup'
          className='w-full text-center items-center place-content-center'>
          <TabsList className=' w-full md:w-[50%]'>
            <TabsTrigger value='signup'>Signup</TabsTrigger>
            <TabsTrigger value='login'>Login</TabsTrigger>
          </TabsList>

          <Signin contentValue='signup' />
          <Signin contentValue='login' />
        </Tabs>
      </section>
    </QueryClientProvider>
  );
}
