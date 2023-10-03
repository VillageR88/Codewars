
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

// TODO: Replace examples and use TDD development by writing your own tests

public class SolutionTest {
    
    @Test
    void emptyShipShouldNotWorthToAboard() {
        Ship ship = new Ship(0 , 0);
        assertEquals(false, ship.isWorthIt(), "<draft: 0, crew: 0>");
    }
    
    @Test
    void shipWithLotOfBootyWorthToAboard() {
        Ship ship = new Ship(40 , 5);
        assertEquals(true, ship.isWorthIt(), "<draft: 40, crew: 5>");
    }
}