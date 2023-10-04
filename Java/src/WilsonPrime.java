///Task
/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)

should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/
///Solution
//My

import java.math.BigInteger;

public class WilsonPrime {
  public static boolean am_i_wilson(long n) {
    if (n <= 1) {
      return false;
    }
    BigInteger factorial = BigInteger.ONE;
    for (int i = 2; i <= n - 1; i++) {
      factorial = factorial.multiply(BigInteger.valueOf(i));
    }
    return factorial.add(BigInteger.ONE).mod((BigInteger.valueOf(n).multiply(BigInteger.valueOf(n)))).equals(BigInteger.ZERO);
  }
}

// Codewars recommended
/**/