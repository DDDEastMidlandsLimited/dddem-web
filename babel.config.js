module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'transform-runtime': {},
        'class-properties': {},
      },
    ],
  ],
  plugins: ['macros'],
};
