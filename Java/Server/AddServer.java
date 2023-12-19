package Server;

import java.io.*;
import java.net.*;
import java.util.*;

public class AddServer {
    public static void main(String[] args) {
        // Socket 으로 부터 데이터를 전송할 I/O Stream 생성
        BufferedReader In = null;
        BufferedWriter Out = null;
        ServerSocket Listener = null;
        Socket Socket = null;
        // Keyboard I/O Add
        Scanner Scanner = new Scanner(System.in);

        // Create Server
        try {
            // Server Socket PortNumber
            Listener = new ServerSocket(9999);
            System.out.println("Loading Server Socket");
            Socket = Listener.accept(); // Client to Server Connect Waiting
            System.out.println("Server Load Complete");

            In = new BufferedReader(new InputStreamReader(Socket.getInputStream())); // 10 Line
            Out = new BufferedWriter(new OutputStreamWriter(Socket.getOutputStream())); // 11 Line

            while (true) {
                // ReadLine = System.out.println(String)
                String InputMessage = In.readLine();
                // Scanner Print Message("Exit") = System.Close
                if (InputMessage.equalsIgnoreCase("Exit")) { System.out.println("Client to Exit"); break; }
                System.out.println("Client" + InputMessage); // Prompt
                System.out.print("Send Message");
                // Keyboard Input Leader
                String OutputMessage = Scanner.nextLine();
                Out.write(OutputMessage + "\n"); // Keyboard Input Leader to Send Message
                Out.flush(); // Out for Stream in all String Send
            }
        } 
        catch (IOException e) { System.out.println("e.getMessage()"); }
        finally {
            // All done
            try {
                Scanner.close();
                Socket.close();
                Listener.close();
            }
            catch (IOException e) { System.out.println("Client for Message Error"); }
        }
    }
}
