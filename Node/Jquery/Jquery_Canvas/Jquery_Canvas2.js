// Data Array[Index]
const XIndex = [`A`, `B`, `C`, `D`, `E`]
const YIndex = [`15`, `20`, `30.`, `25`, `10`]
// Title String
const TotalLayout = {title : `Test Title`}
// Data Drawing Setting
const MainData = [{labels: XIndex, value : YIndex, type: `pie`}]

Plotly.newPlot(MainCanvas, MainData, TotalLayout);