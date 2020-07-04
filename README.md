# Tailwind CSS Playground

A simple starter project for playing around with Tailwind in a proper PostCSS environment.

To get started:

1. Clone the repository:

   ```bash
   git clone https://github.com/tailwindcss/playground.git tailwindcss-playground

   cd tailwindcss-playground
   ```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm run serve

   # Using Yarn
   yarn run serve
   ```

   Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting [cssnano](https://cssnano.co/) to optimize your CSS for production and added configured [tailwind.config.js](tailwind.config.css) to remove unused CSS.

```js
module.exports = {
  purge: ['./public/**/*.html'],
  ...
};
```

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
