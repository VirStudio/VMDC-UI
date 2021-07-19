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

# Spin 加载中 <Badge type="warning">开发中</Badge>

使用纯CSS编写指示器的Spin组件，支持自定义指示器。

## 基础

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Spin />
</div>
```

## 容器

作为容器使用

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

export default () =>
  <Spin spinning={true}>
    <div style={{background: 'green', padding: '100px 200px'}}></div>
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
    <div style={{background: 'green', padding: '100px 200px'}}></div>
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
const { Plane } = Spin;

<Plane />
```

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

const { Plane } = Spin;

export default () => <div style={{background: 'red', padding: '10px'}}>
  <Plane />
</div>
```

## 不同的指示器

```jsx
import React from 'react';
import { Spin } from 'vmdc-ui';

const { Plane, Chase, Bounce, Stretch } = Spin;

const contentStyle = {
  background: '#8600FF',
  padding: '10px',
  display: 'flex',
  justifyContent: 'flex-start'
}

const itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: '10px',
  margin: '10px',
  width: '60px'
}

export default () =>
<div style={contentStyle}>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Plane</p>
    <Plane />
  </div>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Chase</p>
    <Chase />
  </div>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Bounce</p>
    <Bounce />
  </div>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Stretch</p>
    <Stretch />
  </div>
</div>
```

## 不同大小

<Alert type="info">
  通过设置 size 属性改变指示器的大小，同时size也适用于单独的指示器
</Alert>

```jsx
import React from 'react';
import { Spin }from 'vmdc-ui';

const contentStyle = {
  background: '#2980B9',
  padding: '10px',
  display: 'flex',
  justifyContent: 'flex-start'
}

const itemStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBottom: '10px',
  margin: '10px',
  width: '60px'
}

export default () =>
<div style={contentStyle}>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Small</p>
    <Spin size="small" />
  </div>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Medium</p>
    <Spin size="medium" />
  </div>
  <div style={itemStyle}>
    <p style={{color: '#fff'}}>Large</p>
    <Spin size="large" />
  </div>
</div>
```

<API src="./Spin.tsx" />