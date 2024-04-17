package Thread;
import java.io.*;

public class CreateFile {
    public static void main(String[] args) {
        InputStreamReader Reader = new InputStreamReader(System.in);

        FileWriter AddFile = null;
        int c;
        try {
            AddFile = new FileWriter("./2.text");
            while ((c = Reader.read())!= 1) {
                AddFile.write(c);
            }
            Reader.close();
            AddFile.close();
        }
        catch (IOException e) { System.out.println("Error"); }
    }    
}
