// ye simulate karna hai ki jab react ko element milta hai tab to use kaise dekhta hai
// react kya karta hai jo bhi elements hote hai uska tree banane ki koshish karta hai

type RcProps = Record<string, string>;

type RcElement = {
  type: string;
  props: RcProps;
  children: string;
};
/**
 * render karne ke liye ek function banaate hai jisme 2 cheeze daalni hogi - jise render karna hai aur jaha render karna hai
 * func(jiseRender, jahaRender)
 */
function customRender(reactElement: RcElement, container: HTMLElement | null) {
  // const domElement: HTMLElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  // container?.appendChild(domElement);

  /**
   * Another modular way to write this code if for general number of attribute
   * we can't write individual line of code for each attribute
   * so we will be adding a loop to loop over the object of attributes
   */

  // creating the element, "a" tag in this case
  const domElement: HTMLElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    // setting the attributes for the tag, "a" tag in this case
    // attributes like href, target etc
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container?.appendChild(domElement);
}

const reactElement: RcElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

// we want the above element rendered, i.e., the above element to be added to the root id
const mainContainer: HTMLElement | null = document.querySelector("#root");

customRender(reactElement, mainContainer);
