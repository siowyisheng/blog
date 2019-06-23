import Typography from 'typography'
import doelgerTheme from 'typography-theme-doelger'
doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    backgroundImage: `none`,
  }
})

const typography = new Typography(doelgerTheme)

export default typography;
