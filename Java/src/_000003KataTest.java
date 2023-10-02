import org.junit.Test;
import static org.junit.Assert.*;

public class _000003KataTest {
    @Test
    public void testSomething() {
        assertTrue(_000003Kata.validateHello("hello"));
        assertTrue(_000003Kata.validateHello("ciao bella!"));
        assertTrue(_000003Kata.validateHello("salut"));
        assertTrue(_000003Kata.validateHello("hallo, salut"));
        assertTrue(_000003Kata.validateHello("hombre! Hola!"));
        assertTrue(_000003Kata.validateHello("Hallo, wie geht\'s dir?"));
        assertTrue(_000003Kata.validateHello("AHOJ!"));
        assertTrue(_000003Kata.validateHello("czesc"));
        assertTrue(_000003Kata.validateHello("Ahoj"));
        assertFalse(_000003Kata.validateHello("meh"));
    }
}
