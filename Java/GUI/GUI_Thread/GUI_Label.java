import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Label extends JFrame{
    private Component Bar = new Sub_Label(100);
    public GUI_Label() {
        setTitle("Label");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Container Container = getContentPane();
        Container.setLayout(null);

        Bar.setBackground(Color.BLUE);
        Bar.setOpaque(true);
        Bar.setLocation(20, 50);
        Bar.setSize(300, 20);

        Container.add(Bar);
        Container.addKeyListener(new KeyAdapter() {
            public void keyPressed(KeyEvent e){ Bar.fill(); }
        });
        setSize(300, 450);
        setVisible(true);

        Container.setFocusable(true);
        Container.requestFocus();
        Consumer Thread = new Consumer(Bar);
        Thread.start();
    }
    public static void main(String[] args) {
        new GUI_Label();
    }
}


class Sub_Label {
    private int BarSize = 0;
    private int maxBarSize;

    public Sub_Label() {
        this.maxBarSize = maxBarSize;
    }

    public void setBackground(Color blue) {
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        int width = (int)(((int)(this.getWidth())/maxBarSize*BarSize));
        if (width == 0) { return; }
        g.fillRect(0, 0, width, g.getHeight());
    }
    
    synchronized void fill() {
        if (BarSize == maxBarSize) {
            try {
                wait();
            } catch (InterruptedException e) {return;}
        }
        BarSize++;
        repaint();
        notify();
    }

    synchronized void consume() {
        if (BarSize == 0) {
            try {
                wait();
            } catch (InterruptedException e) {return;}
        }
        BarSize--;
        repaint();
        notify();
    }
}
class Consumer extends Thread {
    private Sub_Label Bar;

    public Consumer(Component bar2) {
        this.Bar = bar2;
    }
    
    public void run() {
        while (true) {
            try{
                sleep(2000);
                Bar.consume();
            } catch (InterruptedException e) {return;}
        }
    }
}

