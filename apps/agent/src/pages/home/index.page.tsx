import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <div className="flex gap-2">
        <Button type="primary" onClick={() => navigate('/demo')}>
          demo
        </Button>
        <Button type="primary" onClick={() => navigate('/user')}>
          user
        </Button>
        <Button type="primary" onClick={() => navigate('/auth/login')}>
          login
        </Button>
      </div>
    </div>
  );
};

export default Home;
