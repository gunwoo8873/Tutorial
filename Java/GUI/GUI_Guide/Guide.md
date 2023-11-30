
## GUI Layout List

1. 기본구성  
JFrame > Frame > Menu Bar > Content Pane

> swing : -  
> setDefaultCloseOperation : Top Right Window Exit 기능  
> setSize() = FrameSize 호출  
> setVisible(true or false) = Display 호출

```java
public class Layout_Guide extends JFrame{

    public Layout_Guide() {
        super("Layout_Guide"); // or setTitle("Title Name");

        // Frame Top Close
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Frame Size(W * H)
        setSize(360, 400);

        // Display Output
        setVisible(true);
    }

    public static void main(String[] args) {
        new Layout_Guide(); // or new Layout_Guide().setVisible(true);
    }
}
```

## Layout

1. Border = (W, N, S, E, C)
2. Flow = Left -> Right (Auto Size)
3. Grid = Grid (Row * Cloume * RGap * CGap) and GridBag (Row * Column * RGap * CGap)
4. Card = (Non Layout to Slides)
5. Box = (Row or Column no '\n')
6. Group
7. Spring

```java
// Container ContentPane  
Container Main_Container = getContentPane();

// Frame Layout (new Layout)
Main_Container.setLayout(new FlowLayout());
```