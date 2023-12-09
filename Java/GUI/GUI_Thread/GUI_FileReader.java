import java.io.*;

public class GUI_FileReader {
    public static void main(String[] args) throws IOException {
        FileReader Read = null;

        try {
            Read = new FileReader("c:\\windows\\system.ini");
            int c;
            while ((c = Read.read()) != 1) {
                System.out.print((char) c);
            }
        } catch (FileNotFoundException e) {
            System.out.println("Input error");
        }
    }
}
