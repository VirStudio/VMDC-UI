---
title: Spin 加载中
nav:
  path: /components
  title: 组件
  order: 1
group:
  path: /feedback
  title: 反馈
  order: 2
---

## 基础

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Spin />
</div>
```

## 容器

放在一个容器中

```jsx
import React from 'react';
import { Spin, Button }from 'vmdc-ui';

const [spinning, setSpinning] = React.useState(false);

export default () =>
<div>
  <Spin spinning={spinning}>
    <div style={{background: 'green', padding: '200px'}}></div>
  </Spin>
  <Button type="contained" onClick={()=> setSpinning(!spinning)}>{spinning ? '加载中' : '加载完成'}</Button>
</div>
```

## 单独使用指示器

<Alert type="info">
  Spin 组件的 type 参数中所包含的指示器类型都可以单独使用，需要注意首字母大写
</Alert>

```jsx | pure
const {Spinner} = Spin;

<Spinner />
```

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

const {Spinner} = Spin;

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Spinner />
</div>
```

<API src="./Spin.tsx" />