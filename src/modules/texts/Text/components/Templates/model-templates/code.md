---
layout: Code template
title: Code
---

# :computer: Code

## Install

```
yarn add something
```

<br>

## Quickstart

```js
const message = typeMessage => {
  const messageOption = {
      success: "Yesss!",
      error: "Oops",
      warning: "Wet floor",
  };

  const defaultMessage = "It's time";  
  const showMessage = messageOption[typeMessage] || defaultMessage;

  return showMessage;
};
```