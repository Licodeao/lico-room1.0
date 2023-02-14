// TODO: 主题模式切换

const theme = {
  color: {
    // #ff385C
    primaryColor: "#1E80FF",
    secondaryColor: "#00848A" 
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 230ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
}

export default theme