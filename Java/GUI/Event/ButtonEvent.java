package GUI.Event;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;
import java.util.*;

public class ButtonEvent extends JFrame {

    //private JPanel Pbutton;
    //private JPanel Ptext ;
    //private JPanel result;
    //private JPanel main;

    public ButtonEvent () {

        setTitle("Main Title");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container container = getContentPane();
        container.setLayout(new FlowLayout());

        //main = new JPanel();
        //Pbutton = new JPanel();
        //Ptext = new JPanel ();
        //result = new JPanel();

        // Button menu List
        JButton add = new JButton("ADD");
        //JButton div = new JButton("DIVIDE");
        //JButton sub = new JButton("SUBTRACT");
        //JButton mul = new JButton("MULTIPLY");
        //JButton ex  = new JButton ("EXIT");

        add.addActionListener(new Sub_Class()); // ActionListener Private Class if Event

        container.add(add);
        
        setSize(300, 200);
        setVisible(true);
    }

    private class Sub_Class implements ActionListener {
        @Override
        public void actionPerformed (ActionEvent e) {

            JButton Button1 = (JButton)e.getSource();

            if (Button1.getText().equals(e)) {
                Button1.setText("Action");
            } else {
                Button1.setText("Error");
            }
        }    
    }
    
    public static void main(String[] args) {
        new ButtonEvent();
    }
}