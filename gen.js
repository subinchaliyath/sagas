function* bla() {
  const bla1 = yield 10;
  yield bla1 + 20;
}

const ha = bla();

console.log(ha.next().value);
console.log(ha.next(10).value);
