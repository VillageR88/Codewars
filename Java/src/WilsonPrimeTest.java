import static org.junit.Assert.*;
import org.junit.Test;

public class WilsonPrimeTest {
  @Test
  public void test1() {
    assertEquals(false, WilsonPrime.am_i_wilson(0));
  }

  @Test
  public void test2() {
    assertEquals(false, WilsonPrime.am_i_wilson(1));
  }

  @Test
  public void test3() {
    assertEquals(true, WilsonPrime.am_i_wilson(5));
  }

  @Test
  public void test4() {
    assertEquals(false, WilsonPrime.am_i_wilson(169));
  }

  @Test
  public void test5() {
    assertEquals(false, WilsonPrime.am_i_wilson(233));
  }
}