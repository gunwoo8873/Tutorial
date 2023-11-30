package Java.GUI.GUI_Screen;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_ComboBox extends JFrame {
    
    private JLabel Main_Label = new JLabel();

    public GUI_ComboBox() {
        super("MenuBar Action Tutorial");
        CreateMenu(); // 메뉴바 정의

        // 컨테이너 정의 생략??
        getContentPane().add(Main_Label, BorderLayout.CENTER);

        setSize(400, 360);
    }

    private void CreateMenu() {
        // Menu 정의
        JMenuBar Menu_Bar = new JMenuBar();
        JMenuItem[] Menu_Item = new JMenuItem[4];
        String [] Menu_Title = {"Load", "Hide", "ReShow", "Exit"};
        JMenu Menu_Screen = new JMenu("Screen");

        InnerGUI_ComboBox Listener = new InnerGUI_ComboBox();
        // MenuItem array
        for (int i = 0; i < Menu_Item.length; i++) {
            Menu_Item[i] = new JMenuItem(Menu_Title[i]);
            Menu_Item[i].addActionListener(Listener);
            Menu_Screen.add(Menu_Item[i]);
        }
        Menu_Bar.add(Menu_Screen);
        setJMenuBar(Menu_Bar);
    }

    class InnerGUI_ComboBox implements ActionListener{

        @Override
        public void actionPerformed(ActionEvent e) {
            String CMD = e.getActionCommand();

            // Input Commands
            switch (CMD) {
                case "Load":
                    if (Main_Label.getIcon() != null) {return;}
                    Main_Label.setIcon(new ImageIcon("이미지 경로"));
                    break;

                case "Hide":
                    if (Main_Label.getIcon() != null) {return;}
                    Main_Label.setIcon(new ImageIcon("이미지 경로"));
                    break;

                case "ReShow":
                    if (Main_Label.getIcon() != null) {return;}
                    Main_Label.setIcon(new ImageIcon("이미지 경로"));
                    break;

                case "Exit":
                    if (Main_Label.getIcon() != null) {return;}
                    Main_Label.setIcon(new ImageIcon("이미지 경로"));
                    break;

                default:
                    break;
            }
        }
    
    }

    public static void main(String[] args) {
        new GUI_ComboBox().setVisible(true);;
    }
}
