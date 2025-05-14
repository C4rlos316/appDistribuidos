export default async function Page({ params }) {
  const { id } = params;
  return (
    <div>
      <h1> users ID: {id} </h1>
    </div>
  );
}
