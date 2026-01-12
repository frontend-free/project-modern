import SVGAdd from '@/assets/svgs/add.svg?react';
import Icon, { StepForwardOutlined } from '@fe-free/icons';
import { Button } from 'antd';

// 打印环境变量
console.log(import.meta.env);

const Demo = () => {
  return (
    <div>
      <h1>Demo</h1>
      <hr />
      <h2>antd</h2>
      <Button type="primary" icon={<StepForwardOutlined />}>
        button
      </Button>
      <h2>tailwindcss</h2>
      <div className="h-10 w-10 bg-black" />
      <h2>svg icon</h2>
      <div>
        <Icon component={SVGAdd} className="text-red-500" />
      </div>
    </div>
  );
};

export default Demo;
