const React = require("react");

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en`, className: `scroll-smooth` });
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
        if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
   	 `,
      }}
    />,
  ]);
};
