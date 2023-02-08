import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Ninja Lists</title>
        <meta
          name='description'
          content='This is meta descripttion of this page'
        />
        <meta name='keywords' content='ninjas' />
      </Head>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magni
        sequi dolorem dolore nam perferendis voluptatibus nobis officiis
        consequatur, ad recusandae beatae magnam repellendus rem placeat minima
        doloribus itaque corrupti.
      </p>
      <Link href='ninjas'>
        <button className='btn'>See Ninjas Listings</button>
      </Link>
    </>
  );
}
