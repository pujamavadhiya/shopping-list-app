import { Render } from "./render";
import { Sections } from "./constants";
import { Product } from "./Product";

const form = document.querySelector("form")!;
const section = document.querySelector("select")!;
const name = document.querySelector("input[name ='name']") as HTMLInputElement;
const quantity = document.querySelector(
    "input[name ='quantity']"
) as HTMLInputElement;
const render = new Render();

render.renderSections(section, Sections);
form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const product = new Product(name.value, quantity.value, section.value);

    product.render();
});
