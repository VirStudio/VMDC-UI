---
title: Scroll Snap 滚动吸附
nav:
  path: /components
  title: 组件
  order: 1
group:
  path: /show
  title: 展示
  order: 2
---

一个滚动吸附的组件，为了给用户提供更好的滚动体验。

每次滚动时，容器内元素的中心位置和容器中心位置对齐。

<Alert type="warning">
  <p>注意：</p>
  <p>该组件实现中使用了一些实验中的功能。</p>
  <p>此功能某些浏览器尚在开发中，请参考浏览器兼容性表格以得到在不同浏览器中适合使用的前缀。</p>
  <p>由于该功能对应的标准文档可能被重新修订，所以在未来版本的浏览器中该功能的语法和行为可能随之改变。</p>
  <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Scroll_Snap" target="_blank">MDN CSS Scroll Snap 属性指南及兼容性说明</a>
</Alert>

## 基础使用

```jsx
import React from 'react';
import { ScrollSnap } from 'vmdc-ui';

const { Item } = ScrollSnap;

export default () =>

<ScrollSnap style={{height: '200px'}}>
  {[1,2,3,4,5].map(i =>
    <Item key={i} style={{height: '200px', background:'red', margin: '10px 0'}}>{i}</Item>
  )}
</ScrollSnap>
```

<API src="./ScrollSnap.tsx" />

<API src="./Item.tsx" />
