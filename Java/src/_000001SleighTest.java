import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class _000001SleighTest {
    @Test
    public void test_authentication() {
        assertEquals(true, _000001Sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));
        assertEquals(false, _000001Sleigh.authenticate("Santa", "Ho Ho Ho!"));
        assertEquals(false, _000001Sleigh.authenticate("Santa Claus", "Ho Ho Ho"));
    }
}