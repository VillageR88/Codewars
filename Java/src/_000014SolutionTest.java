import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class _000014SolutionTest {
    
    @Test
    public void simpleAdd() {
      assertEquals("Kata.add(3,5)", _000014Kata.add(3).applyAsInt(5), 8);
    }
}