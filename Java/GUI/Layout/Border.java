package GUI.Layout;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class Border extends JFrame {
    public Border() {

        // Panel Setting
        setTitle("Main Title");

        // System Exit = System.exit(0);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Main Container Layout ADMIN
        Container Main_Container = getContentPane();

        // Background Color
        Main_Container.setBackground(Color.orange);
        
        // BodrederLayout(h Gap(0px defult), v Gap(0px defult))
        Main_Container.setLayout(new BorderLayout(0, 0));

        // BorderLayout
        /*
        1. CENTER
        2. EAST
        3. WEST
        4. NORTH
        5. SOUTH
        */

        // BorderLayout Button EX1
        Main_Container.add(new JButton("Close"),BorderLayout.CENTER);
        Main_Container.add(new JButton("Button 1"),BorderLayout.EAST);
        Main_Container.add(new JButton("Button 2"),BorderLayout.WEST);
        Main_Container.add(new JButton("Button 3"),BorderLayout.NORTH);
        Main_Container.add(new JButton("Button 4"),BorderLayout.SOUTH);

        // BorderLayout Button EX2
        JButton B1 = new JButton("Close");
        Main_Container.add(B1,BorderLayout.CENTER);

        // Panel Setting2
        setSize(300, 200); // PanelSize
        setVisible(true); // Panel Output
    }

    public static void main(String[] args) {
        new Border();
    }
}

