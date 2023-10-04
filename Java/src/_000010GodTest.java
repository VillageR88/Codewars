import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class _000010GodTest {   
    @Test
    public void makingAdam(){
      Human[] paradise = _000010God.create();
      assertEquals("Adam are a man", true ,paradise[0] instanceof Man);
    }
} 