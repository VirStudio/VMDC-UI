---
title: Spin 加载中
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
import { Spin }from 'vmdc-ui';

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Spin />
</div>
```

## 容器

放在一个容器中

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

export default () =>
  <Spin spinning={true}>
    <div style={{background: 'green', padding: '200px'}}></div>
  </Spin>
```

## 切换状态

设置 spinning 参数切换加载状态

```jsx
import React from 'react';
import { Spin, Button }from 'vmdc-ui';

const [spinning, setSpinning] = React.useState(true);

export default () =>
<div>
  <Spin spinning={spinning}>
    <div style={{background: 'green', padding: '200px'}}></div>
  </Spin>
  <p>点击按钮切换加载状态</p>
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

const { Spinner } = Spin;

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Spinner />
</div>
```

## 不同的指示器

```jsx
import React from 'react';
import { Spin } from 'vmdc-ui';

const { Spinner, SkChase } = Spin;

export default () =>
<div style={{background: 'blue', padding: '10px'}}>
  <p style={{color: '#fff'}}>Spinner</p>
  <Spinner />
  <p style={{color: '#fff'}}>SkChase</p>
  <SkChase />
</div>
```

## 不同大小

<Alert type="info">
  通过设置 size 属性改变指示器的大小，同时size也适用于单独的指示器
</Alert>

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

export default () =>
<div style={{background: '#30dff3', padding: '10px'}}>
  <p style={{color: '#fff'}}>Small</p>
  <Spin size="small" />
  <p style={{color: '#fff'}}>Medium</p>
  <Spin size="medium" />
  <p style={{color: '#fff'}}>Large</p>
  <Spin size="large" />
</div>
```

<API src="./Spin.tsx" />