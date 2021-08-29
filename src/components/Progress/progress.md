---
title: Progress 进度条
nav:
  path: /components
  title: 组件
  order: 1
group:
  path: /feedback
  title: 反馈
  order: 3
---

## 基础

```jsx
import React from 'react';
import { Progress } from 'vmdc-ui';

export default () => (
  <div style={{ padding: '10px' }}>
    <Progress percent={40} />
    <Progress percent={66} />
    <Progress percent={100} />
  </div>
);
```

## 修改进度

```jsx
import React from 'react';
import { Progress, Button } from 'vmdc-ui';

export default () => {
  const [count, setCount] = React.useState(10);

  const changeProgress = (type) => {
    if (type === '-') {
      count - 10 <= -10 ? alert('不能再小了') : setCount(count - 10);
    }
    if (type === '+') {
      count + 10 >= 110 ? alert('不能再大了') : setCount(count + 10);
    }
  };

  return (
    <div style={{ padding: '10px' }}>
      <Progress percent={count} />
      <Button onClick={() => changeProgress('-')}>-</Button>
      <Button onClick={() => changeProgress('+')}>+</Button>
    </div>
  );
};
```

## 分段显示

```jsx
import React from 'react';
import { Progress } from 'vmdc-ui';

export default () => (
  <div style={{ padding: '10px' }}>
    <Progress
      section={[
        {
          color: '#52C41A',
          percent: 20,
        },
        {
          color: '#FF4D4F',
          percent: 60,
        },
      ]}
    />
  </div>
);
```

## 显示百分比

```jsx
import React from 'react';
import { Progress } from 'vmdc-ui';

export default () => (
  <div style={{ padding: '10px' }}>
    <Progress percent={40} showPercent={true} />
    <Progress
      section={[
        {
          color: '#52C41A',
          percent: 20,
        },
        {
          color: '#FF4D4F',
          percent: 60,
        },
      ]}
      showPercent={true}
    />
  </div>
);
```

<API src="./index.tsx" />
