package Basic;

import java.util.*;

public class __HashMap {
    public static void main(String[] args) {
        HashMap<String, String> HashMap = new HashMap<String, String>();

        //HashMap.put("Key", "Value");
        HashMap.put("A", "1");
        HashMap.put("B", "2");
        HashMap.put("C", "3");

        // KeySet = ValueGet  for Put("Key") 
        Set<String> KeySet = HashMap.keySet();
        // Iterator Return for KeySet
        Iterator<String> Iterator = KeySet.iterator();
        while (Iterator.hasNext()) {
            String Key = Iterator.next();
            String Number = HashMap.get(Key);
            System.out.println(Key + " : " + Number);
        }

        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < 3; i++) {
            System.out.println("Input Text ?");
            String KeyIndex = scanner.next();
            // KeyIndex get Data
            String NumberIndex = HashMap.get(KeyIndex);
            
            if (NumberIndex == null) { System.out.println(KeyIndex + " Error"); }
            else { System.out.println(NumberIndex); }
        }
    }
}