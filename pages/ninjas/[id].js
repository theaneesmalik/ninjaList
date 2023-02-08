export const getStaticPaths = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );
  const paths = data.map((ninja) => {
    return { params: { id: ninja.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());
  return {
    props: { ninja: data },
  };
};
const NinjaDetail = ({ ninja }) => {
  return (
    <>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.username}</p>
      <p>{ninja.address.city}</p>
    </>
  );
};

export default NinjaDetail;
