import java.awt.*;
import java.awt.event.*;
import java.util.Random;
import java.util.Set;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Vibrating extends JFrame implements Runnable{
    private Thread Thread;
    public GUI_Vibrating() {
        setTitle("Vibrating");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(300,450);
        setVisible(true);

        getContentPane().addMouseListener(new MouseAdapter() {

            public void mousePressed(MouseEvent e) {
                if (!Thread.isAlive()) {Thread.interrupt();}
            }
        });
        Thread = new Thread(this);
        Thread.start();
    }

    @Override
    public void run() {
        Random R = new Random();
        while (true) {
            try {
                Thread.sleep(R.nextInt(1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            int x = getX() + R.nextInt()%5;
            int y = getY() + R.nextInt()%5;
            setLocation(x, y);
        }
    }

    public static void main(String[] args) {
        new GUI_Vibrating();
    }
}
