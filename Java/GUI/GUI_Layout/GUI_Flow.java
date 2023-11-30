package Java.GUI.GUI_Layout;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Flow extends JFrame {
    public GUI_Flow() {

        // Panel Setting
        setTitle("Main Title");

        // System Exit = System.exit(0);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // Main Container Layout ADMIN
        Container Main_Container = getContentPane();

        // Background Color
        Main_Container.setBackground(Color.orange);

        //FlowLayout align , h Gap(5px default), v Gap(default)
        Main_Container.setLayout(new FlowLayout(FlowLayout.LEFT, 30, 50));

        // FlowLayout Button EX1
        Main_Container.add(new JButton("Close"));
        Main_Container.add(new JButton("Button 1"));
        Main_Container.add(new JButton("Button 2"));

        // FlowLayout Button EX2
        for (int i = 0; i < 15; i++) {
            String Text = Integer.toString(i);
            JButton Button = new JButton(Text);
            Main_Container.add(Button);
        }

        // Button EX2
        /*
        JButton button1 = new JButton("Close");
        JButton button2 = new JButton("Button");
        JButton button3 = new JButton("???");

        this.add(button1);
        this.add(button2);
        this.add(button3);
        */

        // Panel Setting2
        setSize(300, 200); // PanelSize
        setVisible(true); // Panel Output
    }

    public static void main(String[] args) {
        new GUI_Flow();
    }
}

