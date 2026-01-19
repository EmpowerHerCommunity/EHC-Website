module.exports = {
  plugins: [
    require('postcss-nesting'), // ✅ FIRST
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
