// ye simulate karna hai ki jab react ko element milta hai tab to use kaise dekhta hai
// react kya karta hai jo bhi elements hote hai uska tree banane ki koshish karta hai

type RcElement = {
  type: string;
  props: object;
  children: string;
};
/**
 * render karne ke liye ek function banaate hai jisme 2 cheeze daalni hogi - jise render karna hai aur jaha render karna hai
 * func(jiseRender, jahaRender)
 */
function customRender(reactElement: RcElement, container: HTMLElement | null) {
  const domElement = document.createElement(reactElement);
}

const reactElement: RcElement = {
  type: "a",
  props: {},
  children: "click me to visit google",
};

// we want the above element rendered, i.e., the above element to be added to the root id
const mainContainer: HTMLElement | null = document.querySelector("#root");

customRender(reactElement, mainContainer);
