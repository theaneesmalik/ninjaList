import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image alt='Ninja Listings Logo' width={128} height={17} src='/next.svg' />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Lintings</Link>
    </nav>
  );
};

export default Navbar;
