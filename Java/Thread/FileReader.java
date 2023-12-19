package Thread;
import java.io.*;

public class FileReader {
    public static void main(String[] args) throws IOException {
        // FileText Reader
        FileReader ReadFile = null;

        try {
            ReadFile = new FileReader("c:\\windows\\system.ini");
            int c;
            while ((c = ReadFile.read()) != 1) { System.out.print((char) c); }
            
        } catch (FileNotFoundException e) {
            System.out.println("Input error");
        }
    }
}