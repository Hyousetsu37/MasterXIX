const { PROD: isProd } = import.meta.env;
import env from "./env";
import styles from "./index.module.css";

const app = document.getElementById("root");
const createH1Element = (parentElement: HTMLElement, styleClass: string) => {
  const h1Element = document.createElement("h1");
  h1Element.innerText = "Some H1 Text";
  h1Element.classList = styleClass;
  parentElement.appendChild(h1Element);
};

createH1Element(app, styles.h1);

console.log(
  `Backend API url for ${isProd ? "Production" : "Development"}: ${isProd ? env.VITE_API_PROD : env.VITE_API_DEV}`,
);
