import { StyleSheet } from 'react-native';

export const colors = {
  color1: '#360568',
  color2: '#5b2a86',
  color3: '#7785ac',
  color4: '#9ac6c5',
  color5: '#a5e6ba',
  white: '#fff',
  muted: '#ddd'
}

export const fonts = {
  headlineFont: 'lithos-pro',
  bodyFont: 'arial-rounded'
}

export const globalStyles = StyleSheet.create({
  h1: {
    fontFamily: fonts.headlineFont,
    fontSize: 38,
    color: colors.color5,
    marginVertical: 4,
  }, 
  h2: {
    fontFamily: fonts.headlineFont,
    fontSize: 30,
    color: colors.color5,
  },
  h3: {
    color: colors.white,
    fontSize: 28,
    fontFamily: fonts.bodyFont,
  },
  mainBackground: {
    backgroundColor: colors.color1
  },
  secondaryBackground: {
    backgroundColor: colors.color3
  },
  widget: {
    backgroundColor: colors.color3,
    width: '95%',
    borderRadius: 7,
    padding: 7,
    marginVertical: 4,
  },
  titleFont: {
    fontFamily: fonts.headlineFont,
    color: colors.color5
  },
  headerFont: {
    color: colors.white,
    fontFamily: fonts.bodyFont
  },
  bodyFont: {
    color: colors.white,
    fontFamily: fonts.bodyFont
  },
  primaryBorder: {
    borderColor: colors.color5
  },
  bgColor1: {
    backgroundColor: colors.color1
  },
  bgColor2: {
    backgroundColor: colors.color2
  },
  bgColor3: {
    backgroundColor: colors.color3
  },
  bgColor4: {
    backgroundColor: colors.color4
  },
  bgColor5: {
    backgroundColor: colors.color5
  }
});

