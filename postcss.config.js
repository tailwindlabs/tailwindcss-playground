module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env'),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : []),
  ],
};
