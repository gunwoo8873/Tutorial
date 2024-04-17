package GUI.Screen;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class Graphics extends JFrame {

    public Graphics() {
        super("Graphics Tutorial");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setContentPane(new MainPanel());

        setSize(300, 300);
    }

    class MainPanel extends JPanel {
        @Override
        public void paintComponent(Graphics g) {
            super.paintComponent(g);
            g.setColor(Color.BLUE);

            // drawRect(x, y, Width, height)
            g.drawRect(10,10,50,50);
            g.drawRect(50,50,50,50);

            // draw3DRect(x, y, Width, height, raised)
            g.draw3DRect(100, 200, 150, 100, true);

            // drawArc(x, y, Width, height, raised, Angle, Angle2)
            g.drawArc(150, 150, 100, 150, 200, 200);
    
            g.setColor(Color.MAGENTA);
            g.drawRect(90,90,50,50);
        }    
	}	
    
    public static void main(String[] args) {
        new Graphics().setVisible(true);
    }    
}