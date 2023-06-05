function generateColor() {
  const hexCode = ["#"];
  while (hexCode.length <= 3) {
    let value = Math.trunc(Math.random() * 255).toString(16);
    if (value < 10) value = 0 + String(value);
    hexCode.push(value.toLocaleUpperCase());
  }
  return hexCode.join("");
}
function reversColor(color) {
  const newHexCod = ["#"];
  const delHech = color.split("").splice(1, 6);
  const data = new Array(
    delHech.splice(0, 2).join(""),
    delHech.splice(0, 2).join(""),
    delHech.splice(0, 2).join("")
  );
  for (const key of data) {
    let value = 255 - parseInt(key, 16);
    if (value < 10) value = 0 + String(value);
    newHexCod.push(value.toString(16));
  }
  return newHexCod.join("");
}
function button() {
  let color = generateColor();
  const header = document.querySelector(".content__header");
  header.style.color = reversColor(color);
  document.body.style.background = color;
  const elem = document.querySelector(".thisColor__span");
  elem.innerHTML = color;
}
button();
