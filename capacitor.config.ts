import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.codingfont.app',
  appName: 'coding-font-tournament',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
