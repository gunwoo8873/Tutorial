package GUI.Event;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
import java.util.*;

public class MouseEvent extends JFrame {

    private JLabel Main_Label = new JLabel("Test Label");

    public MouseEvent() {

        setTitle("Main Title");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container Container = getContentPane();
        Container.addMouseListener(new Mouse_Event());
        
        // Mouse TagetMove
        // c.addMouseMotionListener(new Sub_Class());
        Container.setLayout(null);

        Main_Label.setSize(50, 20); // JLabel Size (w , h)
        Main_Label.setLocation(30, 30); // JLabel Start Align (x , y)
        Container.add(Main_Label);

        setSize(300, 200);
        setVisible(true);
    }

    
    /*
    class Mouse_Event extends MouseAdapter {

        @Override
        public void mouseClicked(MouseEvent e) {
            int x = e.getX();
            int y = e.getY();
            Main_Label.setLocation(x, y);
        }

        @Override
        public void mousePressed(MouseEvent e) {
            int x = e.getX();
            int y = e.getY();
            a.setLocation(x+10, y+10);
        }
        
        @Override
        public void mouseMoved(MouseEvent e) {
            super.mouseMoved(e);
            int x = e.getX();
            int y = e.getY();
            a.setLocation(x, y);
        }
        
        @Override
        public void mouseReleased(MouseEvent e) {
        }

        @Override
        public void mouseEntered(MouseEvent e) {
        }

        @Override
        public void mouseExited(MouseEvent e) {
        }
    }
    */

    class Mouse_Event implements MouseListener, MouseMotionListener {

        @Override
        public void mousePressed(MouseEvent e) {
            Main_Label.setLocation(e.getX(), e.getY());
            setTitle("MousePressed ("+" e.getX() "+" e.getY() "+")");
        }
        
        @Override
        public void mouseReleased(MouseEvent e) {
            Main_Label.setLocation(e.getX(), e.getY());
            setTitle("MousePressed ("+" e.getX() "+" e.getY() "+")");
        }

        @Override
        public void mouseEntered(MouseEvent e) {}

        @Override
        public void mouseExited(MouseEvent e) {
            Component Component = (Component)e.getSource();
            Component.setBackground(Color.CYAN);
            setTitle("MousePressed ("+" e.getX() "+" e.getY() "+")");
        }

        @Override
        public void mouseDragged(MouseEvent e) {
            Component Component = (Component)e.getSource();
            Component.setBackground(Color.YELLOW);
            setTitle("MousePressed ("+" e.getX() "+" e.getY() "+")");
        }

        @Override
        public void mouseMoved(MouseEvent e) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'mouseMoved'");
        }

        @Override
        public void mouseClicked(MouseEvent e) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'mouseClicked'");
        }
    }

    public static void main(String[] args) {
        new MouseEvent();
    }
}
