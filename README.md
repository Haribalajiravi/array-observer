# Array Observer

[![Travis-ci](https://app.travis-ci.com/Haribalajiravi/array-observer.svg?branch=main)](https://app.travis-ci.com/Haribalajiravi/array-observer) [![CircleCI](https://circleci.com/gh/Haribalajiravi/array-observer.svg?style=svg)](https://circleci.com/gh/Haribalajiravi/array-observer) [![GitHub issues](https://img.shields.io/github/issues/Haribalajiravi/array-observer)](https://github.com/Haribalajiravi/array-observer/issues) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Download](https://img.shields.io/github/downloads/haribalajiravi/array-observer/total.svg)](https://www.npmjs.com/package/array-observer) [![version](https://img.shields.io/npm/v/array-observer.svg)](https://www.npmjs.com/package/array-observer)

Hello Folks! 😎🎶

This is just a simple array observer, which listen to array's addition, modification and removal of each element and triggers the provided callback with respective metadata. We can use any of the array modification methods on proxyArray instance.

### How it works under the hood?

[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) plays important role where it helps to get the hook of array modification overall and then we have a piece of logic where it detect what kind of operation user performed.

### Why do we need to use this package?

Proxy won't provide information about what kind of operation user has been made on the array. So, I wrote a simple logic to fulfill this usecase.

### 🔥I also added types🔥. Typescript lovers smash the star ⭐️

### Installation

```
npm i array-observer
```

### Usage ([ESM](https://datacadamia.com/web/javascript/module/esm) & [CJS](https://datacadamia.com/web/javascript/module/commonjs))

```javascript
import { observer, ActionType } from 'array-observer';

const tasks = [
  {
    name: 'task1: learn JS'
  },
  {
    name: 'task2: do POC'
  }
];

const proxyTasks = observer(tasks, (metadata) => {
  console.log(
    // Index of which addition, modfication or removal has been done
    metadata.index,

    // Type of action added, modified or removed
    metadata.type === ActionType.Added,

    // Actual array
    metadata.target,

    // Item of which addition, modfication or removal has been done
    metadata.value
  );
});

proxyTasks.push({
  name: 'UI: create a polyfill for map'
});

proxyTasks.pop();
```

### CDN usage ([UMD](https://datacadamia.com/web/javascript/module/umd))

```html
<script src="https://cdn.jsdelivr.net/npm/array-observer@latest/dist/array-observer.umd.js"></script>
<script>
  const tasks = [
    {
      name: 'task1: learn JS'
    },
    {
      name: 'task2: do POC'
    }
  ];

  const proxyTasks = Array.observer(tasks, (metadata) => {
    console.log(
      // Index of which addition, modfication or removal has been done
      metadata.index,

      // Type of action added, modified or removed
      metadata.type === Array.ActionType.Added,

      // Actual array
      metadata.target,

      // Item of which addition, modfication or removal has been done
      metadata.value
    );
  });

  proxyTasks.push({
    name: 'UI: create a polyfill for map'
  });

  proxyTasks.pop();
</script>
```

Support through below platforms:

[![patreon](https://img.shields.io/badge/%20-Become%20a%20patreon%3F-%23555555?logo=patreon&style=for-the-badge)](https://www.patreon.com/haribalajiravi)

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/7xcFqmn)
