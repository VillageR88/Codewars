
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class _000006ShipTest {

    @Test
    public void emptyShipShouldNotWorthToAboard() {
        _000006Ship ship = new _000006Ship(0, 0);
        assertEquals(false, ship.isWorthIt());
    }

    @Test
    public void shipWithLotOfBootyWorthToAboard() {
        _000006Ship ship = new _000006Ship(40, 5);
        assertEquals(true, ship.isWorthIt());
    }
}