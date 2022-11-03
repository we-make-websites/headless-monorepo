import 'vite/modulepreload-polyfill';

const element: HTMLDivElement = document.createElement('div');
element.className = 'app';
element.innerHTML = `
  <h1>Hello Vite!!</h1>
  <div class="card">
    <button id="counter" type="button"></button>
  </div>
  <p class="read-the-docs">
    Click on the Vite logo to learn more
  </p>
`;
document.body.appendChild(element);
