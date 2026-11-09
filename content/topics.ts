import type { Topic } from "./types";

export const topics: Topic[] = [
  {
    "title": "what is an array?",
    "visual": {
      "type": "array",
      "values": [
        12,
        34,
        56,
        67,
        9
      ],
      "highlight": 2
    },
    "callout": "A collection (sequence) of a fixed number of variables called elements / components, in a consecutive group of memory locations that all have the same name and the same data type. The length is set when the array is created. After creation, its length is fixed.",
    "tip": "c[2] is the highlighted box",
    "slug": "what",
    "section": "arrays"
  },
  {
    "title": "index + subscript",
    "points": [
      {
        "title": "Index",
        "text": "Square brackets hold the index. First element c[0], second c[1]. The ith element is c[i - 1]."
      },
      {
        "title": "Subscript",
        "text": "An integer: c[1] = 34. Or an integer expression: c[4 - 2] is worked out first, so it is c[2]."
      },
      {
        "title": "Naming",
        "text": "The array name follows the rules for naming a variable."
      },
      {
        "title": "Two types",
        "text": "One-dimensional: one row, many columns. Two-dimensional: rows and columns, also known as a table."
      }
    ],
    "tip": "ith element = c[i - 1]",
    "slug": "subs",
    "section": "arrays"
  },
  {
    "title": "declare + create",
    "code": [
      "int[] num;     // OR  int num[];",
      "num = new int[10];",
      "",
      "final int ARRAY_SIZE = 12;",
      "int[] arr;",
      "arr = new int[ARRAY_SIZE];"
    ],
    "points": [
      {
        "title": "intExp",
        "text": "Any expression that gives a positive integer. Its value is the number of elements."
      },
      {
        "title": "10 elements",
        "text": "num[0], num[1] ... num[9] are 10 variables of datatype int. A size constant never changes."
      }
    ],
    "tip": "new datatype[intExp]",
    "slug": "declare",
    "section": "arrays"
  },
  {
    "title": "store + read",
    "code": [
      "num[3] = 65;     // 4th position",
      "i = 3;",
      "num[i] = 65;",
      "num[2 * i - 3] = 65;",
      "num[5] = 56;     // 6th element",
      "num[5] = num[2] + num[3];",
      "System.out.println(num[3] + \" \" + num[4]",
      "   + \" \" + num[0]);"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] num = new int[6];",
      "      int i;",
      "      num[3] = 65;",
      "      i = 3;",
      "      num[i] = 65;",
      "      num[2 * i - 3] = 65;",
      "      num[5] = 56;",
      "      num[5] = num[2] + num[3];",
      "      System.out.println(num[3] + \" \" + num[4] + \" \" + num[0]);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Syntax",
        "text": "arrayName[subscriptExp] = value; num[3] = 65 stores 65 in the 4th position."
      },
      {
        "title": "Remember",
        "text": "num[2] is the third element. num[5] = num[2] + num[3] adds two elements and stores the answer."
      }
    ],
    "tip": "counting starts at 0",
    "slug": "access",
    "section": "arrays"
  },
  {
    "title": "ArrayDemo program",
    "code": [
      "int anArray[];          // declares an array of integers",
      "anArray = new int[2];   // allocates memory for 2 integers",
      "anArray[0] = 100;       // initialize first element",
      "anArray[1] = 200;       // initialize second element",
      "System.out.println(\"Element at index 0: \" + anArray[0]);",
      "System.out.println(\"Element at index 1: \" + anArray[1]);"
    ],
    "callout": "Output: Element at index 0: 100 and Element at index 1: 200. No loop is used because only 2 values are assigned. To assign, accept or display many values, use loops.",
    "tip": "many values = use loops",
    "slug": "demo",
    "section": "arrays"
  },
  {
    "title": "initialise when declaring",
    "code": [
      "double[] sales = {12.4, 45.67, 32.90, 78.9, 21.90};",
      "// OR",
      "double sales[] = {12.4, 45.67, 32.90, 78.9, 21.90};",
      "",
      "sales[0] = 12.4;",
      "sales[1] = 45.65;     // same as {12.4, 45.65}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      double[] sales = {12.4, 45.67, 32.90, 78.9, 21.90};",
      "      sales[0] = 12.4;",
      "      sales[1] = 45.65;",
      "      System.out.println(java.util.Arrays.toString(sales));",
      "   }",
      "}"
    ],
    "callout": "Known values go between curly brackets, separated by commas. Partial initialisation: the lecture says the rest fill with 0. In Java write int[] list = new int[10]; then list[0] = 3; list[1] = 6; list[2] = 7; the unfilled boxes stay 0.",
    "tip": "int[10] list = {3,6,7} is not valid Java",
    "slug": "initdecl",
    "section": "arrays"
  },
  {
    "title": "manipulating arrays",
    "code": [
      "for (index = 0; index < 10; index++)",
      "   sales[index] = 0;                    // initialise",
      "for (index = 0; index < 10; index++)",
      "   sales[index] = console.nextInt();    // read",
      "for (index = 0; index < 10; index++)",
      "   System.out.println(sales[index] + \" \");  // print"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] input = {12, 4, 9, 2, 15, 7, 3, 10, 5, 8};",
      "      int[] sales = new int[10];",
      "      int index;",
      "      for (index = 0; index < 10; index++) sales[index] = 0;",
      "      for (index = 0; index < 10; index++) sales[index] = input[index];",
      "      for (index = 0; index < 10; index++)",
      "         System.out.println(sales[index] + \" \");",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Operations",
        "text": "Initializing, inputting data, outputting data, finding the largest and/or smallest, finding the sum and/or average."
      },
      {
        "title": "Use a LOOP",
        "text": "sales has 10 elements. The loop runs index from 0 to 9."
      }
    ],
    "tip": "one loop per job",
    "slug": "ops",
    "section": "arrays"
  },
  {
    "title": "sum, average, largest",
    "code": [
      "sum = 0;",
      "for (index = 0; index < 10; index++)",
      "   sum = sum + sales[index];",
      "average = sum / 10;",
      "",
      "maxIndex = 0;     // first is largest so far",
      "for (index = 0; index < 10; index++)",
      "   if (sales[maxIndex] < sales[index])",
      "      maxIndex = index;",
      "largestSale = sales[maxIndex];"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] sales = {12, 4, 9, 2, 15, 7, 3, 10, 5, 8};",
      "      int sum = 0;",
      "      for (int index = 0; index < 10; index++) sum += sales[index];",
      "      double average = sum / 10.0;",
      "      int maxIndex = 0;",
      "      for (int index = 0; index < 10; index++)",
      "         if (sales[maxIndex] < sales[index]) maxIndex = index;",
      "      System.out.println(\"Sum = \" + sum);",
      "      System.out.println(\"Average = \" + average);",
      "      System.out.println(\"Largest = \" + sales[maxIndex]);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Sum + average",
        "text": "Total all the sales, then divide by the count."
      },
      {
        "title": "Largest / smallest",
        "text": "Compare with the best so far. For the smallest, use minIndex and flip the test to >."
      }
    ],
    "tip": "smallest: flip < to >",
    "slug": "loops",
    "section": "arrays"
  },
  {
    "title": "index out of bounds",
    "code": [
      "int[] arr = {1, 2, 3, 4, 5};",
      "for (i = 0; i <= arr.length; i++)",
      "   System.out.println(arr[i]);",
      "// i = 5 is out of bounds"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] arr = {1, 2, 3, 4, 5};",
      "      try {",
      "         for (int i = 0; i <= arr.length; i++) System.out.println(arr[i]);",
      "      } catch (ArrayIndexOutOfBoundsException e) {",
      "         System.out.println(\"ArrayIndexOutOfBoundsException at index \" + arr.length);",
      "      }",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "In bounds",
        "text": "index >= 0 and index <= Array_Size - 1."
      },
      {
        "title": "Out of bounds",
        "text": "index < 0 or index > Array_Size - 1: outside the range you gave when declaring the array. Java throws ArrayIndexOutOfBoundsException."
      }
    ],
    "tip": "use i < arr.length",
    "slug": "bounds",
    "section": "arrays"
  },
  {
    "title": "passing arrays",
    "code": [
      "// int[] hour = new int[13];",
      "",
      "// void method",
      "modifyArray(hour, 13);",
      "public void modifyArray(int hour[], int size)",
      "",
      "// value returning method",
      "answer = modifyArray(hour, 13);",
      "public int modifyArray(int hour[], int size)"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] hour = new int[3];",
      "      Main example = new Main();",
      "      example.modifyArray(hour, 3);",
      "      int answer = example.sumArray(hour, 3);",
      "      System.out.println(\"Array = \" + java.util.Arrays.toString(hour));",
      "      System.out.println(\"Sum = \" + answer);",
      "   }",
      "   public void modifyArray(int[] hour, int size) {",
      "      for (int i = 0; i < size; i++) hour[i] = (i + 1) * 10;",
      "   }",
      "   public int sumArray(int[] hour, int size) {",
      "      int sum = 0;",
      "      for (int i = 0; i < size; i++) sum += hour[i];",
      "      return sum;",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Name + size",
        "text": "Pass the array name and the array size. hour goes to hour[] and 13 goes to size."
      },
      {
        "title": "One value back",
        "text": "A value returning method does not return an array. It returns one value, e.g. an int, after working on the array."
      }
    ],
    "tip": "pass name + size",
    "slug": "methods",
    "section": "arrays"
  },
  {
    "title": "print + fill methods",
    "code": [
      "public void printArray(int[] list) {",
      "   for (int index = 0; index < list.length; index++)",
      "      System.out.print(list[index] + \" \");",
      "}",
      "",
      "public void fillArray(int[] list, int numOfElements) {",
      "   Scanner console = new Scanner(System.in);",
      "   for (int index = 0; index < numOfElements; index++)",
      "      list[index] = console.nextInt();",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] list = new int[4];",
      "      Main example = new Main();",
      "      example.fillArray(list, 3, new int[] {2, 4, 6});",
      "      example.printArray(list);",
      "   }",
      "   public void printArray(int[] list) {",
      "      for (int index = 0; index < list.length; index++)",
      "         System.out.print(list[index] + \" \");",
      "      System.out.println();",
      "   }",
      "   public void fillArray(int[] list, int numOfElements, int[] input) {",
      "      for (int index = 0; index < numOfElements; index++)",
      "         list[index] = input[index];",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "list.length",
        "text": "Gives the size of the array, so no size parameter is needed."
      },
      {
        "title": "numOfElements",
        "text": "Or pass the count yourself, e.g. when the array is only part full."
      }
    ],
    "tip": "two ways to know the size",
    "slug": "printfill",
    "section": "arrays"
  },
  {
    "title": "sum + largest methods",
    "code": [
      "public int sumArray(int[] list, int numOfElements) {",
      "   int sum = 0;",
      "   for (int index = 0; index < numOfElements; index++)",
      "      sum = sum + list[index];",
      "   return sum;",
      "}",
      "public int indexLargestElement(int[] list, int n) {",
      "   int maxIndex = 0;   // assume first is largest",
      "   for (int index = 1; index < n; index++)",
      "      if (list[maxIndex] < list[index])",
      "         maxIndex = index;",
      "   return maxIndex;",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      Main example = new Main();",
      "      int[] list = {4, 8, 2, 10, 3};",
      "      int sum = example.sumArray(list, list.length);",
      "      int largestIndex = example.indexLargestElement(list, list.length);",
      "      System.out.println(\"Sum = \" + sum);",
      "      System.out.println(\"Largest = \" + list[largestIndex]);",
      "   }",
      "",
      "   public int sumArray(int[] list, int numOfElements) {",
      "      int sum = 0;",
      "      for (int index = 0; index < numOfElements; index++)",
      "         sum = sum + list[index];",
      "      return sum;",
      "   }",
      "",
      "   public int indexLargestElement(int[] list, int n) {",
      "      int maxIndex = 0;",
      "      for (int index = 1; index < n; index++)",
      "         if (list[maxIndex] < list[index])",
      "            maxIndex = index;",
      "      return maxIndex;",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "One element",
        "text": "A single element can be passed too: sumNum(list[0], list[1]) adds the first two elements of list."
      },
      {
        "title": "Returns",
        "text": "Each method returns one int: the sum, or the index of the largest element."
      }
    ],
    "tip": "return one value",
    "slug": "sumindex",
    "section": "arrays"
  },
  {
    "title": "exercise: average price",
    "code": [
      "double[] price = {14, 5, 37, 8, 57};",
      "double sum = 0;",
      "for (int i = 0; i < price.length; i++)",
      "   sum = sum + price[i];",
      "double average = sum / price.length;",
      "System.out.println(\"Average = \" + average);",
      "// 14+5+37+8+57 = 121, so 121 / 5 = 24.2"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      double[] price = {14, 5, 37, 8, 57};",
      "      double sum = 0;",
      "      for (int i = 0; i < price.length; i++) sum += price[i];",
      "      double average = sum / price.length;",
      "      System.out.println(\"Average = \" + average);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "The question",
        "text": "A salesman sells five different products. WAP to calculate the average amount of the product."
      },
      {
        "title": "Prices",
        "text": "Product 1: 14, 2: 5, 3: 37, 4: 8, 5: 57."
      }
    ],
    "tip": "try it yourself first",
    "slug": "exercise",
    "section": "arrays"
  },
  {
    "title": "compare two arrays",
    "code": [
      "public boolean areEqualArrays(int[] firstArray,",
      "                             int[] secondArray) {",
      "   if (firstArray.length != secondArray.length)",
      "      return false;",
      "   for (int index = 0; index < firstArray.length; index++)",
      "      if (firstArray[index] != secondArray[index])",
      "         return false;",
      "   return true;",
      "}",
      "check = areEqualArrays(listA, listB);",
      "if (check) { ... }"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] listA = {1, 2, 3};",
      "      int[] listB = {1, 2, 3};",
      "      int[] listC = {1, 2, 4};",
      "      System.out.println(areEqualArrays(listA, listB));",
      "      System.out.println(areEqualArrays(listA, listC));",
      "   }",
      "   static boolean areEqualArrays(int[] firstArray, int[] secondArray) {",
      "      if (firstArray.length != secondArray.length) return false;",
      "      for (int index = 0; index < firstArray.length; index++)",
      "         if (firstArray[index] != secondArray[index]) return false;",
      "      return true;",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "How",
        "text": "Different lengths mean not equal. Otherwise compare element by element. All match: true."
      },
      {
        "title": "Careful",
        "text": "The lecture writes if (check=true). That assigns. Write if (check)."
      }
    ],
    "tip": "== does not compare contents",
    "slug": "equal",
    "section": "arrays"
  },
  {
    "title": "linear search",
    "visual": {
      "type": "array",
      "values": [
        35,
        12,
        27,
        18,
        45,
        16,
        38
      ],
      "highlight": 2
    },
    "code": [
      "static int linearSearch(int[] list, int key) {",
      "   for (int i = 0; i < list.length; i++)",
      "      if (list[i] == key)",
      "         return i;",
      "   return -1;",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] list = {35, 12, 27, 18, 45, 16, 38};",
      "      System.out.println(linearSearch(list, 27));",
      "      System.out.println(linearSearch(list, 10));",
      "   }",
      "   static int linearSearch(int[] list, int key) {",
      "      for (int i = 0; i < list.length; i++)",
      "         if (list[i] == key) return i;",
      "      return -1;",
      "   }",
      "}"
    ],
    "callout": "Search for 27: list[0] is not 27, list[1] is not 27, list[2] = 27, the search stops: successful. Search for 10: compared with every item, no data left: unsuccessful. Time: O(n).",
    "tip": "not found returns -1",
    "slug": "search",
    "section": "arrays"
  },
  {
    "title": "sort + binary search",
    "code": [
      "import java.util.Arrays;",
      "String a[] = {\"Toyota\",\"Ford\",\"Isuzu\",\"Alimera\",\"Suzuki\",\"BMW\"};",
      "Arrays.sort(a);",
      "String searchItem = \"Rav 4\";",
      "int found = Arrays.binarySearch(a, searchItem);",
      "if (found > -1) System.out.println(a[found]);",
      "else System.out.println(\"Not on the list\");"
    ],
    "points": [
      {
        "title": "Output",
        "text": "Sorted: Alimera, BMW, Ford, Isuzu, Suzuki, Toyota. Rav 4 is not on the list."
      },
      {
        "title": "Sort first",
        "text": "Binary search needs a sorted array, so sort(a) is called before the search."
      }
    ],
    "tip": "import java.util.Arrays",
    "slug": "utils",
    "section": "arrays"
  },
  {
    "title": "Arrays.fill",
    "code": [
      "import java.util.Arrays;",
      "int x[] = {67,89,43,21,54,76,87,90,24,71};",
      "Arrays.fill(x, 90);         // all ten = 90",
      "Arrays.fill(x, 0, 4, 78);   // first four = 78"
    ],
    "run": [
      "import java.util.Arrays;",
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] x = {67,89,43,21,54,76,87,90,24,71};",
      "      Arrays.fill(x, 90);",
      "      Arrays.fill(x, 0, 4, 78);",
      "      System.out.println(Arrays.toString(x));",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "fill(x, 90)",
        "text": "Fills the whole array with 90."
      },
      {
        "title": "fill(x, 0, 4, 78)",
        "text": "Indexes 0 to 3 become 78. Since the previous call filled the rest with 90, the final array is [78, 78, 78, 78, 90, 90, 90, 90, 90, 90]."
      }
    ],
    "tip": "end index is not included",
    "slug": "fill",
    "section": "arrays"
  },
  {
    "title": "2D array: inStock",
    "visual": {
      "type": "table",
      "headers": [
        "",
        "RED",
        "BROWN",
        "BLACK",
        "WHITE",
        "GRAY"
      ],
      "rows": [
        [
          "GM",
          10,
          7,
          12,
          10,
          4
        ],
        [
          "FORD",
          18,
          11,
          15,
          17,
          10
        ],
        [
          "TOYOTA",
          12,
          10,
          9,
          5,
          12
        ],
        [
          "BMW",
          16,
          6,
          13,
          8,
          3
        ],
        [
          "NISSAN",
          10,
          7,
          12,
          6,
          4
        ],
        [
          "VOLVO",
          9,
          4,
          7,
          12,
          11
        ]
      ]
    },
    "callout": "A table of rows and columns. inStock[row][column]: rows are car makes, columns are colours. Syntax: dataType[][] arrayName;",
    "tip": "rows then columns",
    "slug": "instock",
    "section": "arrays"
  },
  {
    "title": "2D syntax",
    "code": [
      "dataType[][] arrayName;",
      "dataType[][] arrayName = new dataType[intExp1][intExp2];",
      "",
      "double[][] sales = new double[10][5];",
      "sales[5][3] = 25.75;",
      "// arrayName[indexExp1][indexExp2]"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      double[][] sales = new double[10][5];",
      "      sales[5][3] = 25.75;",
      "      System.out.println(\"Rows = \" + sales.length);",
      "      System.out.println(\"Columns = \" + sales[0].length);",
      "      System.out.println(\"sales[5][3] = \" + sales[5][3]);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Row first",
        "text": "indexExp1 is the row position, indexExp2 is the column position. Both are >= 0."
      },
      {
        "title": "sales",
        "text": "10 rows and 5 columns, all 0.0 at first. sales[5][3] is row 5, column 3."
      }
    ],
    "tip": "[row][column]",
    "slug": "twodsyntax",
    "section": "arrays"
  },
  {
    "title": "2D arrays + length",
    "code": [
      "int[][] matrix = new int[20][15];",
      "matrix.length         // 20 rows",
      "matrix[0].length      // 15 columns",
      "matrix[1].length      // 15 columns",
      "",
      "board = new int[5][]; // rows only",
      "board[0] = new int[6];",
      "board[1] = new int[2];"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] matrix = new int[20][15];",
      "      int[][] board = new int[5][];",
      "      board[0] = new int[6];",
      "      board[1] = new int[2];",
      "      System.out.println(\"matrix rows = \" + matrix.length);",
      "      System.out.println(\"matrix columns = \" + matrix[0].length);",
      "      System.out.println(\"board row lengths = \" + board[0].length + \", \" + board[1].length);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Rows are arrays",
        "text": "Each row of matrix is a one-dimensional array. matrix[0] refers to the first row."
      },
      {
        "title": "Special cases",
        "text": "Rows can have different sizes. First create the rows, then create the columns for each row."
      }
    ],
    "tip": "matrix.length = rows",
    "slug": "twod",
    "section": "arrays"
  },
  {
    "title": "2D initialise",
    "code": [
      "int[][] board = {{2, 3, 1},",
      "                 {15, 25, 13},",
      "                 {20, 4, 7},",
      "                 {11, 18, 14}};",
      "",
      "int[][] table = {{2, 1, 3, 5},",
      "                 {15, 25},",
      "                 {4, 23, 45}};"
    ],
    "run": [
      "import java.util.Arrays;",
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] board = {{2, 3, 1}, {15, 25, 13}, {20, 4, 7}, {11, 18, 14}};",
      "      int[][] table = {{2, 1, 3, 5}, {15, 25}, {4, 23, 45}};",
      "      System.out.println(java.util.Arrays.deepToString(board));",
      "      System.out.println(java.util.Arrays.deepToString(table));",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Rule 1",
        "text": "The elements of each row are enclosed within braces and separated by commas."
      },
      {
        "title": "Rule 2",
        "text": "All rows are enclosed within braces. table has rows of 4, 2 and 3 elements."
      }
    ],
    "tip": "braces inside braces",
    "slug": "twodinit",
    "section": "arrays"
  },
  {
    "title": "process 2D arrays",
    "code": [
      "// initialise",
      "for (int row = 0; row < matrix.length; row++)",
      "   for (int col = 0; col < matrix[row].length; col++)",
      "      matrix[row][col] = 10;",
      "// print",
      "for (int row = 0; row < matrix.length; row++) {",
      "   for (int col = 0; col < matrix[row].length; col++)",
      "      System.out.print(matrix[row][col] + \" \");",
      "   System.out.println();",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] matrix = {{1, 2, 3}, {4, 5, 6}};",
      "      for (int row = 0; row < matrix.length; row++)",
      "         for (int col = 0; col < matrix[row].length; col++) matrix[row][col] = 10;",
      "      for (int[] row : matrix) {",
      "         for (int value : row) System.out.print(value + \" \");",
      "         System.out.println();",
      "      }",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "3 ways",
        "text": "Process the entire array, a particular row (row processing) or a particular column (column processing)."
      },
      {
        "title": "Input",
        "text": "Same loops, with matrix[row][col] = console.nextInt();"
      }
    ],
    "tip": "outer = rows, inner = columns",
    "slug": "twodproc",
    "section": "arrays"
  },
  {
    "title": "sum by row + column",
    "code": [
      "for (int row = 0; row < matrix.length; row++) {",
      "   sum = 0;",
      "   for (int col = 0; col < matrix[row].length; col++)",
      "      sum = sum + matrix[row][col];",
      "   System.out.println(\"Sum of row \" + (row + 1) + \" = \" + sum);",
      "}",
      "for (int col = 0; col < matrix[0].length; col++) {",
      "   sum = 0;",
      "   for (int row = 0; row < matrix.length; row++)",
      "      sum = sum + matrix[row][col];",
      "   System.out.println(\"Sum of column \" + (col + 1) + \" = \" + sum);",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] matrix = {{1, 2, 3}, {4, 5, 6}};",
      "      for (int row = 0; row < matrix.length; row++) {",
      "         int sum = 0;",
      "         for (int col = 0; col < matrix[row].length; col++) sum += matrix[row][col];",
      "         System.out.println(\"Sum of row \" + (row + 1) + \" = \" + sum);",
      "      }",
      "      for (int col = 0; col < matrix[0].length; col++) {",
      "         int sum = 0;",
      "         for (int row = 0; row < matrix.length; row++) sum += matrix[row][col];",
      "         System.out.println(\"Sum of column \" + (col + 1) + \" = \" + sum);",
      "      }",
      "   }",
      "}"
    ],
    "callout": "Row sums reset sum to 0 for each row. For columns the outer loop is the column. The lecture slide has typos (matrix[].length, matrix[1][5]); use matrix[row].length and matrix[row][col].",
    "tip": "reset sum = 0 each time",
    "slug": "sumrc",
    "section": "arrays"
  },
  {
    "title": "largest in each row",
    "code": [
      "for (int row = 0; row < matrix.length; row++) {",
      "   largest = matrix[row][0];     // first of the row",
      "   for (int col = 1; col < matrix[row].length; col++)",
      "      if (largest < matrix[row][col])",
      "         largest = matrix[row][col];",
      "   System.out.println(\"The largest element of row \"",
      "      + (row + 1) + \" = \" + largest);",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] matrix = {{4, 9, 2}, {7, 3, 8}, {1, 6, 5}};",
      "      for (int row = 0; row < matrix.length; row++) {",
      "         int largest = matrix[row][0];",
      "         for (int col = 1; col < matrix[row].length; col++)",
      "            if (largest < matrix[row][col]) largest = matrix[row][col];",
      "         System.out.println(\"The largest element of row \" + (row + 1) + \" = \" + largest);",
      "      }",
      "   }",
      "}"
    ],
    "callout": "For each column: largest = matrix[0][col], then the inner loop runs through the rows from 1 and updates largest.",
    "tip": "start from the first element",
    "slug": "largestrc",
    "section": "arrays"
  },
  {
    "title": "2D arrays + methods",
    "code": [
      "public static void printMatrix(int[][] matrix) {",
      "   for (int row = 0; row < matrix.length; row++) {",
      "      for (int col = 0; col < matrix[row].length; col++)",
      "         System.out.print(matrix[row][col] + \" \");",
      "      System.out.println();",
      "   }",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[][] matrix = {{1, 2, 3}, {4, 5, 6}};",
      "      printMatrix(matrix);",
      "   }",
      "   public static void printMatrix(int[][] matrix) {",
      "      for (int row = 0; row < matrix.length; row++) {",
      "         for (int col = 0; col < matrix[row].length; col++)",
      "            System.out.print(matrix[row][col] + \" \");",
      "         System.out.println();",
      "      }",
      "   }",
      "}"
    ],
    "callout": "A 2D array is passed as int[][] matrix. In the lecture example, TwoDArrays calls printArray(x) on a 6 x 5 table and prints each row on its own line. sumRows and largestInRows are written the same way.",
    "tip": "parameter is int[][]",
    "slug": "pass2d",
    "section": "arrays"
  },
  {
    "title": "what is an exception?",
    "points": [
      {
        "title": "Division by zero",
        "text": "An undesirable situation detected while the program runs."
      },
      {
        "title": "Missing file",
        "text": "Trying to open an input file that does not exist."
      },
      {
        "title": "Bad index",
        "text": "An array index that goes out of bounds."
      }
    ],
    "callout": "Definition: an occurrence of an undesirable situation that can be detected during program execution. An if statement can handle it, but if division by zero occurs in several places in one block, if statements are not the most effective way.",
    "tip": "exception = an object",
    "slug": "ex-what",
    "section": "exceptions"
  },
  {
    "title": "Java's mechanism",
    "points": [
      {
        "title": "An object",
        "text": "When an exception occurs, an object of a particular exception class is created."
      },
      {
        "title": "ArithmeticException",
        "text": "Division by zero is an arithmetic error, handled by this class."
      },
      {
        "title": "InputMismatchException",
        "text": "Invalid input with a Scanner object is handled by this class."
      },
      {
        "title": "Exception",
        "text": "The superclass of all exception classes in Java, directly or indirectly."
      }
    ],
    "tip": "classes for common errors",
    "slug": "x-mech",
    "section": "exceptions"
  },
  {
    "title": "try / catch / finally",
    "code": [
      "try {",
      "   // statements",
      "}",
      "catch (ExceptionClassName1 objRef1) {",
      "   // exception handler code",
      "}",
      "catch (ExceptionClassNameN objRefN) {",
      "   // exception handler code",
      "}",
      "finally {",
      "   // statements",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      try {",
      "         int value = 10 / 0;",
      "         System.out.println(value);",
      "      } catch (ArithmeticException e) {",
      "         System.out.println(\"Caught \" + e.getClass().getSimpleName());",
      "      } finally {",
      "         System.out.println(\"Finally runs\");",
      "      }",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "try",
        "text": "Contains the statements that may cause an exception. Followed by zero or more catch blocks."
      },
      {
        "title": "catch",
        "text": "Specifies the exception type it can catch and contains the exception handler."
      }
    ],
    "tip": "finally is optional",
    "slug": "ex-try",
    "section": "exceptions"
  },
  {
    "title": "how the blocks run",
    "points": [
      {
        "title": "finally",
        "text": "Follows the last catch. Its code always executes, except when System.exit is called in try. A try with no catch must have finally."
      },
      {
        "title": "No exception",
        "text": "All catch blocks are ignored. Execution resumes after the last catch."
      },
      {
        "title": "Exception thrown",
        "text": "Rest of the try is ignored. Catch blocks are searched in order for the right handler."
      },
      {
        "title": "Match found",
        "text": "That catch runs and the remaining catch blocks are ignored. finally runs either way."
      }
    ],
    "tip": "first matching catch wins",
    "slug": "x-rules",
    "section": "exceptions"
  },
  {
    "title": "ArrayException example",
    "code": [
      "int[] arr = {1, 2, 3, 4, 5};",
      "int i;",
      "try {",
      "   for (i = 0; i <= arr.length; i++)",
      "      System.out.println(arr[i]);",
      "} catch (ArrayIndexOutOfBoundsException e) {",
      "   System.out.println(\"You may access an array element\"",
      "      + \" that doesn't exist.\");",
      "} finally {",
      "   System.out.println(\"The program ended...\");",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      int[] arr = {1, 2, 3, 4, 5};",
      "      try {",
      "         for (int i = 0; i <= arr.length; i++) System.out.println(arr[i]);",
      "      } catch (ArrayIndexOutOfBoundsException e) {",
      "         System.out.println(\"You may access an array element that doesn't exist.\");",
      "      } finally {",
      "         System.out.println(\"The program ended...\");",
      "      }",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Without try",
        "text": "The loop prints 1 to 5, then arr[5] crashes the program."
      },
      {
        "title": "With try",
        "text": "The catch prints the message, then finally prints: The program ended..."
      }
    ],
    "tip": "i <= length is the bug",
    "slug": "x-array",
    "section": "exceptions"
  },
  {
    "title": "order of catch blocks",
    "code": [
      "catch (ArithmeticException e) { ... }  // subclass first",
      "catch (Exception e) { ... }            // superclass last"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      try {",
      "         throw new ArithmeticException(\"demo\");",
      "      } catch (ArithmeticException e) {",
      "         System.out.println(\"Caught specific exception\");",
      "      } catch (Exception e) {",
      "         System.out.println(\"Caught general exception\");",
      "      }",
      "   }",
      "}"
    ],
    "callout": "The heading of a catch block specifies the type it handles. Declaring Exception catches all types, because Exception is the superclass of all exception classes. A superclass reference can point to a subclass object, so subclass catch blocks go BEFORE superclass catch blocks.",
    "tip": "specific first, Exception last",
    "slug": "ex-flow",
    "section": "exceptions"
  },
  {
    "title": "exception hierarchy",
    "visual": {
      "type": "tree",
      "nodes": [
        {
          "label": "Throwable",
          "depth": 0,
          "note": "",
          "dark": true
        },
        {
          "label": "Exception",
          "depth": 1,
          "note": "",
          "dark": false
        },
        {
          "label": "IOException",
          "depth": 2,
          "note": "checked",
          "dark": false
        },
        {
          "label": "RuntimeException",
          "depth": 2,
          "note": "unchecked",
          "dark": false
        },
        {
          "label": "ArithmeticException",
          "depth": 3,
          "note": "",
          "dark": false
        },
        {
          "label": "NullPointerException",
          "depth": 3,
          "note": "",
          "dark": false
        },
        {
          "label": "IndexOutOfBoundsException",
          "depth": 3,
          "note": "",
          "dark": false
        },
        {
          "label": "ArrayIndexOutOfBoundsException",
          "depth": 4,
          "note": "",
          "dark": false
        },
        {
          "label": "IllegalArgumentException",
          "depth": 3,
          "note": "",
          "dark": false
        },
        {
          "label": "NumberFormatException",
          "depth": 4,
          "note": "",
          "dark": false
        },
        {
          "label": "Error",
          "depth": 1,
          "note": "unchecked",
          "dark": false
        }
      ]
    },
    "points": [
      {
        "title": "Throwable",
        "text": "Subclass of Object and superclass of Exception. Only Throwable objects can be used with exception handling."
      },
      {
        "title": "Two children",
        "text": "Throwable has two subclasses: Exception and Error. You can extend the hierarchy with your own exception classes."
      }
    ],
    "tip": "Throwable is the top",
    "slug": "ex-hier",
    "section": "exceptions"
  },
  {
    "title": "exception classes",
    "visual": {
      "type": "table",
      "headers": [
        "Exception class",
        "Description"
      ],
      "rows": [
        [
          "ArithmeticException",
          "Arithmetic errors such as division by zero"
        ],
        [
          "ArrayIndexOutOfBoundsException",
          "Array index < 0 or >= length of the array"
        ],
        [
          "FileNotFoundException",
          "Reference to a file that cannot be found"
        ],
        [
          "IllegalArgumentException",
          "Calling a method with illegal arguments"
        ],
        [
          "NullPointerException",
          "Reference to an object not instantiated"
        ],
        [
          "NumberFormatException",
          "Use of an illegal number format"
        ],
        [
          "StringIndexOutOfBoundsException",
          "String index < 0 or >= length of the string"
        ],
        [
          "InputMismatchException",
          "Input token does not match the expected type"
        ]
      ]
    },
    "tip": "Table 11-3",
    "slug": "ex-common",
    "section": "exceptions"
  },
  {
    "title": "checked vs unchecked",
    "points": [
      {
        "title": "Checked",
        "text": "Any exception that can be recognized by the compiler. FileNotFoundException, ClassNotFoundException, IOException, NoSuchMethodException."
      },
      {
        "title": "Unchecked",
        "text": "Cannot be recognized when the program compiles, so the programmer must check. Division by zero, array index out of bounds, ArithmeticException, NumberFormatException, IndexOutOfBoundsException."
      }
    ],
    "callout": "Checked exceptions are surrounded by try{} catch{} blocks.",
    "tip": "compiler knows checked ones",
    "slug": "ex-checked",
    "section": "exceptions"
  },
  {
    "title": "instanceof",
    "code": [
      "try {",
      "   dividend = console.nextInt();",
      "   divisor = console.nextInt();",
      "   quotient = dividend / divisor;",
      "   System.out.println(\"Quotient = \" + quotient);",
      "}",
      "catch (Exception eRef) {",
      "   if (eRef instanceof ArithmeticException)",
      "      System.out.println(\"Exception \" + eRef.toString());",
      "   else if (eRef instanceof InputMismatchException)",
      "      System.out.println(\"Exception \" + eRef.toString());",
      "}"
    ],
    "run": [
      "public class Main {",
      "   public static void main(String[] args) {",
      "      handle(new ArithmeticException(\"/ by zero\"));",
      "      handle(new java.util.InputMismatchException(\"bad input\"));",
      "   }",
      "   static void handle(Exception eRef) {",
      "      if (eRef instanceof ArithmeticException)",
      "         System.out.println(\"Exception \" + eRef);",
      "      else if (eRef instanceof java.util.InputMismatchException)",
      "         System.out.println(\"Exception \" + eRef);",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "instanceof",
        "text": "A superclass reference can point to a subclass object. instanceof tells which type it points to."
      },
      {
        "title": "One catch",
        "text": "You can combine catch blocks: catch Exception, then test the type."
      }
    ],
    "tip": "combine catch blocks",
    "slug": "x-inst",
    "section": "exceptions"
  },
  {
    "title": "rethrow + throw",
    "code": [
      "import java.util.*;",
      "public class RethrowExceptionExmp1 {",
      "   static Scanner console = new Scanner(System.in);",
      "   public static void main(String[] args) {",
      "      int number;",
      "      try {",
      "         number = getNumber();",
      "         System.out.println(\"number = \" + number);",
      "      }",
      "      catch (InputMismatchException imeRef) {",
      "         System.out.println(\"Exception \" + imeRef.toString());",
      "      }",
      "   }",
      "}"
    ],
    "run": [
      "public class RethrowExceptionExmp1 {",
      "   static java.util.Scanner console = new java.util.Scanner(\"not a number\");",
      "   public static void main(String[] args) {",
      "      try {",
      "         int number = getNumber();",
      "         System.out.println(\"number = \" + number);",
      "      } catch (java.util.InputMismatchException e) {",
      "         System.out.println(\"Exception \" + e.getClass().getSimpleName());",
      "      }",
      "   }",
      "   static int getNumber() throws java.util.InputMismatchException {",
      "      try {",
      "         return console.nextInt();",
      "      } catch (java.util.InputMismatchException e) {",
      "         throw e;",
      "      }",
      "   }",
      "}"
    ],
    "points": [
      {
        "title": "Rethrow",
        "text": "getNumber() may throw an exception. main catches the InputMismatchException."
      },
      {
        "title": "throw / throws",
        "text": "throw creates and throws an exception object. throws in the method header warns callers."
      }
    ],
    "tip": "throw makes, throws warns",
    "slug": "ex-throw",
    "section": "exceptions"
  },
  {
    "title": "handling techniques",
    "points": [
      {
        "title": "Terminate program",
        "text": "Output the error message upon termination."
      },
      {
        "title": "Fix error and continue",
        "text": "Repeatedly get user input. Output the error message until a valid value is entered."
      },
      {
        "title": "Log error and continue",
        "text": "Write error messages to a file and continue with program execution."
      }
    ],
    "callout": "Chapter goals: learn what an exception is, how try/catch handles it, the exception class hierarchy, checked and unchecked exceptions, and how to handle exceptions within a program.",
    "tip": "3 techniques",
    "slug": "x-tech",
    "section": "exceptions"
  }
];
