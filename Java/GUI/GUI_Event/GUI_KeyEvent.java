package GUI.GUI_Event;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
import java.util.*;

public class GUI_KeyEvent extends JFrame {
    
    private JLabel Main_Label = new JLabel("Test Label");
    private JPanel Main_Panel = new JPanel();

    public GUI_KeyEvent() {

        // super = setTitle (Program Name)
        super("Main Title");
        // setTitle("Main Title");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container Container = getContentPane();
        Container.setLayout(null);
        Container.add(Main_Label);

        Main_Label.setSize(50, 20);
        Main_Label.setLocation(30, 30);
        Container.addKeyListener(new InnerGUI_Focus());

        setSize(300, 200);
        setVisible(true);

        // Container의 Focus를 받을 수 있도록 설정
        Container.setFocusable(true);
        // ContentPane에 Focus를 설정
        Container.requestFocus();
        
    }

    // Main GUI_KeyEvent For InnerGUI_Focus(Sub Class)
    private class InnerGUI_Focus extends KeyAdapter{

        /*
        public void keyPressed(KeyEvent e) {
        
            int r = (int) (Math.random() * 256);
            int g = (int) (Math.random() * 256);
            int b = (int) (Math.random() * 256);
        
            switch (e.getKeyChar()) {
                case '\n':
                    // r, g, b의 값을 출력
                    Label.setText("r =" + r + " g =" + g + " b =" + b);
                    // 3Color 랜덤
                    getContentPane().setBackground(new Color(r, g, b));
                    break;
        
                case 'q':
                    // Program Exit
                    System.exit(0);
                    break;
            }
        }
        */

        public void keyPressed(KeyEvent e) {
            int KeyCode = e.getKeyCode();

            switch (KeyCode) {
                case KeyEvent.VK_UP:
                    Main_Label.setLocation(Main_Label.getX(), Main_Label.getY() - 10);
                    break;

                case KeyEvent.VK_DOWN:
                    Main_Label.setLocation(Main_Label.getX(), Main_Label.getY() + 10);
                    break;

                case KeyEvent.VK_LEFT:
                    Main_Label.setLocation(Main_Label.getX() - 10, Main_Label.getY());
                    break;

                case KeyEvent.VK_RIGHT:
                    Main_Label.setLocation(Main_Label.getX() + 10, Main_Label.getY());
                    break;

                // ESCAPE (U+0018) = ESC
                case KeyEvent.VK_ESCAPE: System.exit(0); break;
            }
        }
    }

    // Debug 2.725 sec
    public static void main(String[] args) {
        new GUI_KeyEvent();
    }
}
