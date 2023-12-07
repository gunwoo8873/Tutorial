import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.event.*;

public class GUI_Synchronized extends JFrame {
    public static void main(String[] args) {
        SharedPrinter S = new SharedPrinter();
        String[] engText = {"Wise men say,",
                            "only folls rush in",
                            "But i can`t help",
                            "failing in love with you",
                            "Shall men say,",
                            "Would it be a sin",
                            "if i can`t help",
                            "failing in love with you"
                            };
        String[] korText = {"동해물과 백두산이 마르고 닳도록,",
                            "하느님이 보우하사 우리 나라 만세",
                            "대한 사람 대한으로 길이 보전하세",
                            "남산 위에 저 소나무, 철갑을 두른 듯",
                            "바람서리 불변함은 우리 기상일세",
                            "무궁화 삼천리 화려강산",
                            "대한 사람 대한으로 길이 보전하세"
                            };
        Thread Threa1 = new WorkerThread(S, engText);
        Thread Threa2 = new WorkerThread(S, korText);
        Threa1.start();
        Threa2.start();

    }
}

class SharedPrinter {
    synchronized public void print(String text) {
        for (int i = 0; i < text.length(); i++) 
            System.out.print(text.charAt(i));
            System.out.println();
    }
}

class WorkerThread extends Thread {
    private SharedPrinter S;
    private String[] text;
    public WorkerThread(SharedPrinter S, String[] text) {
        this.S = S;
        this.text = text;
    }

    public void run() {
        for (int i = 0; i < text.length; i++) {
            S.print(text[i]);
        }
    }
}
