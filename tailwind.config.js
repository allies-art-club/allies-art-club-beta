// postcss.config.js (or .mjs) - After fix
module.exports = {
  plugins: {
    // You may also be able to remove 'postcss-import' and 'autoprefixer'
    // as Tailwind v4 handles these internally, but keeping them for now is safe.
    '@tailwindcss/postcss': {}, // ✅ Add this line
    'autoprefixer': {}, // Keep or remove based on your needs/version (Tailwind v4 includes it)
  },
}