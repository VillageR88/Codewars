const counter = (co = 1) => (co < 10 && counter(co += 1), co < 10 ? counter(co += 1) : co)
console.log(counter());