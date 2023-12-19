// div id = "Value" -> document.getElementById(`Value`)
const MainCanvas = document.getElementById(`Canvas`);
const MainDarw = MainCanvas.getContext(`2d`);

MainDarw.tranform = (-1,0 ,0 , -1, 0, MainCanvas.height)

