import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      backgroundSecondary: string;
      backgroundTerceary?: string;

      textPrimary: string;
      textSecondary: string;
      textTerceary: string;
      textQuartenary: string;
    };
  }
}