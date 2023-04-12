interface IThemeItme {
  title: string
  themeName: string,
}

export const themeList: IThemeItme[] = [
  {
    title: "默认",
    themeName: "default"
  },
  {
    title: "黑暗",
    themeName: "dark"
  },
  {
    title: "深蓝",
    themeName: "dark-blue"
  }
]

export const setTheme = (themeName: string) => {
  document.documentElement.className = themeName
}