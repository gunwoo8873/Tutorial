package Java.GUI.GUI_Guide;

// Java Import lib
import javax.swing.*;
import javax.swing.event.*;
import java.awt.*;
import java.awt.event.*;

// JFrame
public class Layout_Guide extends JFrame{

    public Layout_Guide() {
        super("Title Name"); // or setTitle("Title Name");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Frame Top Close

        // Container ContentPane
        Container Main_Container = getContentPane();
        // Frame Background (Color.Value)
        Main_Container.setBackground(Color.white);

        // Frame Layout (new Layout)
        /* Layout List
            Border = (W, N, S, E, C)
            Flow = Left -> Right (Auto Size)
            Grid = Grid (Row * Cloume * RGap * CGap) and GridBag (Row * Column * RGap * CGap)
            Card = (Non Layout to Slides)
            Box = (Row or Column no '\n')
            Group
            Spring
         */
        Main_Container.setLayout(new FlowLayout());

        // Frame Size(W * H)
        setSize(360, 400);

        // Display Output
        setVisible(true);
    }


    public static void main(String[] args) {
        new Layout_Guide(); // or new Layout_Guide().setVisible(true);
    }
}