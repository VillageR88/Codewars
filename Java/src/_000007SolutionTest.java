import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class _000007SolutionTest {
    @Test
    public void testSetToThree() {
        _000007Cube c = new _000007Cube();
        c.setSide(3);
        assertEquals(3, c.getSide());
    }
}