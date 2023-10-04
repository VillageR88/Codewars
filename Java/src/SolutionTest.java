import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import static org.junit.Assert.assertEquals;
import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class SolutionTest {
    private int expected;
    private int x;
    private int y;

    public SolutionTest(int expected, int x, int y) {
        this.expected = expected;
        this.x = x;
        this.y = y;
    }

    @Parameters
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][] {
                {1, 1, 2},
                {1, 3, 5},
                {2, -10, 100},
                {3, -1, -9},
                {4, 19, -56}
        });
    }

    @Test
    public void sampleTests() {
        assertEquals(expected, Kata.quadrant(x, y));
    }
}