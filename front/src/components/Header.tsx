import { Link } from '@tanstack/react-router';
import { buttonVariants } from './ui/button';

export default function Header() {
  return (
    <header className='p-2 flex gap-2 shadow-sm text-black justify-between'>
      <nav className='flex flex-row  w-full'>
        <span className='font-bold text-base flex justify-end items-center'>
          Task Interview
        </span>
        <div className='px-2 w-[40%] ml-auto text-end'>
          <Link to='/auth' className={buttonVariants({ variant: 'outline' })}>
            register
          </Link>
        </div>
      </nav>
    </header>
  );
}
