const names = [`Samuel`, `Joseph`, `Alexander`, `Leon`, `Julius`];

let whosPaying = a => {
    return a[Math.floor(Math.random() * names.length)];
}

console.log(whosPaying(names));