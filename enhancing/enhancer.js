module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) item.enhancement += 1;
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) item.enhancement -= 5;
  if (item.enhancement >= 15 && item.enhancement < 17) item.enhancement -= 10;
  if (item.enhancement > 16) item.enhancement -= 1;
  return { ...item };
}

function repair(item) {
  if (item.durability < 100) item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement > 0) item.name = `[+${item.enhancement}] ${item.name}`
  return { ...item };
}
