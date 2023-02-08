import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );
  return {
    props: { ninjas: data },
  };
};
const NinjasHome = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninjas | My Ninja Lists</title>
        <meta
          name='description'
          content='This is meta descripttion of this page'
        />
        <meta name='keywords' content='ninjas' />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className='single'>
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </>
  );
};

export default NinjasHome;
