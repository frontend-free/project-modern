import { useParams } from 'react-router-dom';

function Page() {
  const { id } = useParams();

  return <div>id: {id}</div>;
}

export default Page;
