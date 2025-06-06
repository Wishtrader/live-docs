import { cn } from '@/lib/utils';
import Link from "next/link";
import Image from "next/image";


const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn("header flex items-center justify-center md:h-20 px-4", className)}>
      <Link href='/' className='md:flex-1'>
        <Image src="/assets/icons/logo.svg"
               alt='logo'
               width={120}
               height={32}
               className='hidden md:block'
        />
        <Image src="/assets/icons/logo-icon.svg"
               alt='logo'
               width={32}
               height={32}
               className='mr-4 md:hidden'
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;