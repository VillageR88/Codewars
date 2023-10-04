import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

// TODO: Replace examples and use TDD development by writing your own tests

public class _000012SolutionTest {
    @Test
    public void exampleTests() {
        assertEquals("1x^3", _000012Kata.integrate(3,2));
        assertEquals("2x^6", _000012Kata.integrate(12,5));
        assertEquals("10x^2", _000012Kata.integrate(20,1));
        assertEquals("10x^4", _000012Kata.integrate(40,3));
        assertEquals("30x^3", _000012Kata.integrate(90,2));
    }
}