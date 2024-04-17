package GUI.Event;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class DrawOval extends JFrame {

    public DrawOval() {
        super("DrawLine 1m");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		setContentPane(new Container());

        setSize(400, 400);
        setVisible(true);
    }

    class Main_Panel extends JPanel {
        private Point Start = null, End = null;
        public Main_Panel() {
            MouseListener Listener = new MouseListener();
            addMouseListener(Listener);
            addMouseMotionListener(Listener);
        }

        class MouseListener extends MouseAdapter {
            public void MousePressed(MouseEvent m) { Start = m.getPoint(); }
            public void MouseDragged(MouseEvent m) { End = m.getPoint(); repaint();}
        }
    }

    public void paintComponent(Graphics g) {
        super.paintComponents(g);
        if (Start == null) {
            return();
        }
    }

    public static void main(String[] args) {
        new DrawOval();
    }
}
