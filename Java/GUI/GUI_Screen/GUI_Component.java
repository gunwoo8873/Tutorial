package Java.GUI.GUI_Screen;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Component extends JFrame {
    
    //private JLabel Main_Label = new JLabel();
    private JTextField Field = new JTextField(20);
    private JTextArea Area = new JTextArea(7,20);

    public GUI_Component() {

        super("Component Tutorial");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container Container = getContentPane();
        Container.setLayout(new FlowLayout());

        /*
        // Main JButton List
        JButton Button_1 = new JButton("EX Button 1");
            Button_1.setBackground(Color.yellow);
            // new Font(Font Name(String), Font Size(int))
            Button_1.setFont(new Font("Arial",Font.ITALIC, 20));

        JButton Button_2 = new JButton("EX Button 2");
            Button_2.setBackground(Color.yellow);
            Button_2.setFont(new Font("Arial",Font.ITALIC, 20));
            // Button Enabled(true or false)
            Button_2.setEnabled(false);

        JButton Button_3 = new JButton("EX Button 3");
            // Button Click ActionEvent
            Button_3.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    JButton Button = (JButton)e.getSource();
                    setTitle(Button.getX() + "," + Button.getY());
                }
            });
        
        Container.add(Button_1);
        Container.add(Button_2);
        Container.add(Button_3);
        
        
        // Main CheckBox List
        JCheckBox CheckBox_1 = new JCheckBox("CheckBox_1");
        JCheckBox CheckBox_2 = new JCheckBox("CheckBox_2");
        JCheckBox CheckBox_3 = new JCheckBox("CheckBox_3");
        
        Container.add(CheckBox_1);
        Container.add(CheckBox_2);
        Container.add(CheckBox_3);
        */

        Container.add(new JLabel("Input and <Enter> Key"));
        Container.add(Area);
        Container.add(new JScrollPane(Field));

        Field.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                JTextField TextArea = (JTextField)e.getSource();
                Area.append(TextArea.getText() + "\n");
                TextArea.setText("");
            }
        });
        
        setSize(640, 370);
        setVisible(true);
    }


    public static void main(String[] args) {
        new GUI_Component();
    }
}
