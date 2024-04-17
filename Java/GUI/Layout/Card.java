package GUI.Layout;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class Card extends JFrame{
    public Card() {

    // Container Layout ADMIN (Null)
        // Panel Setting
        setTitle("Main Title");

        // System Exit = System.exit(0);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Main Container Layout ADMIN
        Container Main_Container = getContentPane();
        // Container Layout No-ADMIN
        Main_Container.setLayout(null);
        
        // Background Color
        Main_Container.setBackground(Color.orange);

        // CardLayout Button EX1
        for (int i = 0; i <= 15; i++) {
            // Button Create
            JButton A = new JButton(Integer.toString(i));
            // Button (X * Npx , Y * Npx) (X, Y 0px defult)
            A.setLocation(i*10, i*10);
            // Button (W, H)
            A.setSize(50, 20);
            Main_Container.add(A);
        }

        // Panel Setting2
        setSize(300, 200); // PanelSize
        setVisible(true); // Panel Output
    }

    public static void main(String[] args) {
        new Card();
    }
}
