import { h, Component } from "preact";
import "./style";

const Header = () => (
  <header class="header">
    <a
      class="icon icon--twitter"
      rel="noopener"
      title="Twitter profile"
      href="https://twitter.com/mutebg"
      target="_blank"
    >
      <svg
        baseProfile="tiny"
        version="1.2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Twitter icon</title>
        <path
          fill="currentColor"
          d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034a8.68 8.68 0 0 1-2.351.861c-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078a3.56 3.56 0 0 0-1.076 2.605c0 .309.039.585.117.819C8.806 9.096 6.26 7.82 4.254 5.364c-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388a3.623 3.623 0 0 0 2.115 1.291c-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841a3.652 3.652 0 0 0 2.152.743c-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038C4.696 18.753 6.585 19.3 8.675 19.3c2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974a10.77 10.77 0 0 0 1.172-4.892V8.34A7.788 7.788 0 0 0 21 6.419a8.142 8.142 0 0 1-2.11.593z"
        />
      </svg>
    </a>
    <a
      class="icon icon--github"
      rel="noopener"
      title="Github"
      href="https://github.com/mutebg/puppe-coverage"
      target="_blank"
    >
      <svg
        width="1024"
        height="1024"
        viewBox="0 0 1024 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>GitHub Icon</title>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
          transform="scale(64)"
          fill="currentColor"
        />
      </svg>
    </a>
  </header>
);
export default Header;
