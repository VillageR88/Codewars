import static org.junit.Assert.*;
import org.junit.Test;

public class _000011WilsonPrimeTest {
  @Test
  public void test1() {
    assertEquals(false, _000011WilsonPrime.am_i_wilson(0));
  }

  @Test
  public void test2() {
    assertEquals(false, _000011WilsonPrime.am_i_wilson(1));
  }

  @Test
  public void test3() {
    assertEquals(true, _000011WilsonPrime.am_i_wilson(5));
  }

  @Test
  public void test4() {
    assertEquals(false, _000011WilsonPrime.am_i_wilson(169));
  }

  @Test
  public void test5() {
    assertEquals(false, _000011WilsonPrime.am_i_wilson(233));
  }
}