---
title: Text 文字
group:
  path: /basic
  title: 基础
  order: 2
---

## 文字溢出

### 单行文字

```jsx
import React from "react";
import { Overflow } from "vmdc-ui";

export default () => <Overflow>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Overflow>
```

### 多行文字

```jsx
import React from "react";
import { Overflow } from "vmdc-ui";

export default () => <Overflow row={3} element="p">ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</Overflow>
```

<API src="./overflow.tsx" />