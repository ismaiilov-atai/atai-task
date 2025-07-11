import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { NotFound } from '@/components/NotFound';
import Header from '../components/Header';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: Root,
  notFoundComponent: NotFound,
});

function Root() {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      {!location.pathname.startsWith('/auth') && <Header />}
      <Outlet />
      <Toaster richColors />
    </QueryClientProvider>
  );
}
