- What is CDN
  A CDN (Content Delivery Network) is a distributed network of servers, called edge servers, that deliver content (such as images, videos, and web pages) to users by selecting the nearest edge server. If the content isn't cached, the request is forwarded to the origin server. CDNs improve website performance by reducing latency and increasing reliability.

  CDNs typically serve static content (images, JS, CSS, etc.), but can also proxy dynamic content in advanced setups.

- What is crossorigin in script
  crossorigin, or CORS, is a security mechanism implemented by the browser (frontend) to check whether the response for our request is coming from the same origin or a different origin.

  The browser compares:

  - Protocol (e.g., http vs https)
  - Domain (e.g., abhi.vercel.com vs unpkg.com)
  - Port (e.g., :80, :443, or custom ports)

  If all three are the same, it's a same-origin request.
  Otherwise, it's a cross-origin request.

- Why we have two links for importing React
  React link (https://unpkg.com/react@18/umd/react.development.js) is the core of React library and is used to make react components, create virtual DOM elements or to say write logic for webpage.

  React-DOM link (https://unpkg.com/react-dom@18/umd/react-dom.development.js) is the DOM library for rendering, which is use to render react component into webpage. It's helps in converting that React virtual DOM into real HTML DOM.

  These two are separate bcoz React supports different platforms like Browser, Mobile, Desktop etc., and separating the code reduces the code bundle size, helps to eliminate redundant code and makes React code flexible and modular.

- What is ReactDOM.createRoot()
  This API creates the container (or in React terminology, the root container) on a DOM element (like by its ID) where the React code will be rendered.
