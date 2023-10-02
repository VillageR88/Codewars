import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;


public class _000004PythagoreanTripleTest{
    static int[] p1={3,4,5};
    static int[] p2={3,5,7};
   
    _000004PythagoreanTriple pT = new _000004PythagoreanTriple();

   @Test
    public void validTriple() {
        assertEquals(1, pT.pythagoreanTriple(p1));
    }
    
    @Test
    public void invalidTriple(){
      assertEquals(0,pT.pythagoreanTriple(p2));
    }
}