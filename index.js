const names = [`Samuel`, `Joseph`, `Alexander`, `Leon`, `Julius`];

const whosPaying = a => {
    return a[Math.floor(Math.random() * names.length)];
}

console.log(`${whosPaying(names)} is going to buy lunch today!`);