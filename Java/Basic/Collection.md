# Collection
> Collection은 Generics 기법으로 구현
1. Generics  
    * 특정 타입(`typeof`)만 다루지 않고, `여러 종류`의 타입으로 변환이 가능하도록 클래스나 메소드를 일반화시키는 방법.
    * Class or Interface Name에 <`E, K, V`>등 타입매개변수 포함
2. EX : Vertor<`E`>  
    * Int만 다루는 Collection Vertor <`Integer`>
    * String만 다루는 Collection Vertor <`String`>
> `int, char, double` 등의 기본 타입으로 구체화 불가능하다. => Integer, Chracter 으로 대체하여 사용한다.
