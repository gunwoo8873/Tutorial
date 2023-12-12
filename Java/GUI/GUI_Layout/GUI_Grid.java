package GUI.GUI_Layout;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Grid extends JFrame {
    public GUI_Grid() {

        // Panel Setting
        setTitle("Main Title");

        // System Exit = System.exit(0);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Main Container Layout ADMIN
        Container Main_Container = getContentPane();
        
        // Background Color
        Main_Container.setBackground(Color.orange);

        /*
        Gride Layout_1 (h Gap(0px defult), v Gap(0px defult))
        Gride Layout_2 (rows(0px defult), clos(0px defult))
        Gride Layout_3 (rows, cols, h Gap, v Gap)
        */
        Main_Container.setLayout(new GridLayout(4,5,5,5));

        // GridLayout Button EX1
        Main_Container.add(new JButton("Close"));
        Main_Container.add(new JButton("Button 1"));
        Main_Container.add(new JButton("Button 2"));

        // GridLayout Button EX2
        for (int i = 0; i < 15; i++) {
            String Text = Integer.toString(i);
            JButton Button = new JButton(Text);
            Main_Container.add(Button);
        }

        // Panel Setting2
        setSize(300, 200); // PanelSize
        setVisible(true); // Panel Output
    }

    public static void main(String[] args) {
        new GUI_Grid();
    }
}
