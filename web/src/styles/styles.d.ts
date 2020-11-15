import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTerceary?: string;
      backgroundQuartenary: string; 

      textPrimary: string;
      textSecondary: string;
      textTerceary: string;
      textQuartenary: string;
      textQuintenary: string;
    };
  }
}