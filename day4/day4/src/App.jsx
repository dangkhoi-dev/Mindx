import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton, Button, Space } from 'antd';

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Ant Design Demo</h1>
      <Space>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
      </Space>
      
      {/* Float Buttons */}
      <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
      <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
    </div>
  );
};

export default App;