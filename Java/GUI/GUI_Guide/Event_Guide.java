package GUI.GUI_Guide;

// Java Import lib
import javax.swing.*;
import javax.swing.event.*;
import java.awt.*;
import java.awt.event.*;

public class Event_Guide extends JFrame{

    public Event_Guide() {
        super("Layout_Guide"); // or setTitle("Title Name");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Frame Top Close

        // Frame Size(W * H)
        setSize(360, 400);

        // Container ContentPane
        Container Main_Container = getContentPane();

        // Button EX1
        JButton Button_1 = new JButton("Action");
        Main_Container.add(Button_1);

        Button_1.addActionListener(new ActionEvent_Guide());
        // Frame Background (Color.Value)
        Main_Container.setBackground(Color.white);

        // Frame Layout (new Layout)
        Main_Container.setLayout(new FlowLayout());

        // Display Output
        setVisible(true);
    }

    public static void main(String[] args) {
        new Event_Guide();
    }
}

class ActionEvent_Guide implements ActionListener {
    @Override
    public void actionPerformed(ActionEvent e) {
        JButton Button_1 = (JButton)e.getSource();
            if (Button_1.getText().equals("Action")) {
                Button_1.setText("Input");
            } else {
                Button_1.setText("Output");
            }
    }
}