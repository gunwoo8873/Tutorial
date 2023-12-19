
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class GUI_Labels extends JFrame {
    private SubClass Bar = new SubClass(100);

    public GUI_Labels(String title) {
        super(title);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        Container container = getContentPane();
        container.setLayout(null);

        // Bar Customizer
        Bar.setBackground(Color.ORANGE);
        Bar.setOpaque(true);
        Bar.setLocation(20, 50);
        Bar.setSize(300, 20);

        container.add(Bar);

        container.addKeyListener(new KeyAdapter() {
            public void keyPressed(KeyEvent e) { Bar.fill(); }
        });

        setSize(300, 400);
        setVisible(true);

        container.setFocusable(true);
        container.requestFocus();
        ConsumerThread Sub_Thread = new ConsumerThread(Bar);
        Sub_Thread.start();
    }

    public static void main(String[] args) {
        new GUI_Labels("누르기");
    }
}

class SubClass extends JPanel {
    private int BarSize = 0;
    private int MaxBarSize = 100;

    public SubClass(int MaxBarSize) {
        this.MaxBarSize = MaxBarSize;
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        int width = (int) (((double) getWidth() / MaxBarSize) * BarSize);

        if (width == 0) { return; }

        g.fillRect(0, 0, width, getHeight());
    }

    synchronized void fill() {
        if (BarSize == MaxBarSize) {
            try { wait(); } 
            catch (InterruptedException e) { return; }
        }

        BarSize++;
        repaint();
        notify();
    }

    synchronized void consume() {
        if (BarSize == 0) {
            try { wait(); } 
            catch (InterruptedException e) { return; }
        }

        BarSize--;
        repaint();
        notify();
    }
}

class ConsumerThread extends Thread {
    private SubClass bar;

    public ConsumerThread(SubClass bar) { this.bar = bar; }

    @Override
    public void run() {
        while (true) {
            try { sleep(200); bar.consume(); } 
            catch (InterruptedException e) { return; }
        }
    }
}