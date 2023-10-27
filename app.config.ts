import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'LazyLounger',
  slug: 'lazy-lounger',
  scheme: 'lazy-lounger',
  version: '1.0.0',
  owner: '2digits-agency',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  assetBundlePatterns: ['**/*'],
  jsEngine: 'hermes',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.twodigitsagency.lazylounger',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'com.twodigitsagency.lazylounger',
  },
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: '164d867c-d6a8-432c-ad85-d6246d37b0f7',
    },
  },
});
