# Array Observer

Example:

```javascript
const tasks = [
  {
    name: 'task1: learn JS',
  },
  {
    name: 'task2: do POC',
  },
];

const proxyTasks = ArrayObserver(tasks, (metadata) => {
  console.log(
    // Index of which addition, modfication or removal has been done
    metadata.index,

    // Type of action added, modified or removed
    metadata.type,

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

Support through below platforms:

[![patreon](https://img.shields.io/badge/%20-Become%20a%20patreon%3F-%23555555?logo=patreon&style=for-the-badge)](https://www.patreon.com/haribalajiravi)

[![Buy me a coffee](https://cdn.buymeacoffee.com/buttons/default-orange.png)](https://www.buymeacoffee.com/7xcFqmn)

## Contributor

- [HBR](https://twitter.com/haribalaji_o_0) (Developer)

## Copyrights

(c) 2022, [Haribalaji Raviprakash](https://twitter.com/haribalajiravi1)
