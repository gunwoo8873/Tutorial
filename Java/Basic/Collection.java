package Basic;

import java.util.*;

public class Collection {
    public static void main(String[] args) {
        // GenericLprintln "Vec : " + SUM
        Vector<Integer> Vector = new Vector<Integer>();

        // add(Index Element)
        Vector.add(8);
        Vector.add(10);
        Vector.add(2);

        // add(Index TagetNumber, Change Element)
        Vector.add(3, 150);

        /*
        // Array(Index) Element
        System.out.println("Vector Element : " + Vector.size());

        // Element Total Sum Output
        System.out.println("Vector Total Element : " + Vector.capacity());
        */

        // While or For Code
        // Iterator All Elements Output
        Iterator<Integer> Iterator = Vector.iterator();
        while (Iterator.hasNext()) {
            int N = Iterator.next();
            System.out.println(N);
        }
        /*
        // Element List Output
        for (int i = 0; i < Vector.size(); i++) {
            int n = Vector.get(i);
            System.out.println(n);
        }
        */

        // Element Sum Output While or For Code
        int sum = 0;
        Iterator = Vector.iterator();
        while (Iterator.hasNext()) {
            int N  = Iterator.next();
            sum += N;
        }
        System.out.println("Vector Sum : " + sum);
        /*
        int sum = 0;
        for (int i = 0; i < Vector.size(); i++) {
            int N = Vector.elementAt(i);
            sum += N;
        }
        System.out.println("Vector Sum : " + sum);
        */

    }
}