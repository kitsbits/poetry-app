module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          components: './src/components',
          navigators: './src/navigators',
          screens: './src/screens',
          stores: './src/stores',
          theme: './src/theme',
          utils: './src/utils',
        },
      },
    ],
  ],
};
