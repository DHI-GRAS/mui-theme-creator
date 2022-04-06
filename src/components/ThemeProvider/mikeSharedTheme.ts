import { createTheme } from '@material-ui/core/styles';

// #region Local imports
import { IMikeTheme, IMikeThemeOptions } from './types';
import mikeTypography from './mikeTypography';
import mikePalette from './mikePallete';
import mikeOverrides from './mikeOverrides';
import mikeComponentsProps from './mikeComponentsProps';
// #endregion

export const mikeSharedTheme: IMikeTheme = createTheme({
  palette: mikePalette,
  typography: mikeTypography,
  overrides: mikeOverrides,
  props: mikeComponentsProps,
} as IMikeThemeOptions);

export default mikeSharedTheme;
