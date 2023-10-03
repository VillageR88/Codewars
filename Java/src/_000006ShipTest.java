
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class _000006ShipTest {
    @Test
    void emptyShipShouldNotWorthToAboard() {
        _000006Ship ship = new _000006Ship(0, 0);
        assertEquals(false, ship.isWorthIt(), "<draft: 0, crew: 0>");
    }

    @Test
    void shipWithLotOfBootyWorthToAboard() {
        _000006Ship ship = new _000006Ship(40, 5);
        assertEquals(true, ship.isWorthIt(), "<draft: 40, crew: 5>");
    }
}