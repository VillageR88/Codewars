import org.junit.Test;
import static org.junit.Assert.assertEquals;
import java.util.ArrayList;

public class _000005SortingTest {
    
    @Test
    public void basicTest() {
        ArrayList<String> sorted = new ArrayList<>();
        ArrayList<String> strs = new ArrayList<>();
        for(String s : new String[] {"Algebra", "History", "Geometry", "English"})
        strs.add(s);
        for(String s : new String[] {"Algebra", "English", "Geometry", "History"})
      sorted.add(s);
        assertEquals(sorted, _000005sorter.sort(strs));
    }
    
    @Test
    public void capitalizationTest() {
        ArrayList<String> sorted = new ArrayList<>();
        ArrayList<String> strs = new ArrayList<>();
        for(String s : new String[] {"Algebra", "history", "Geometry", "english"})
        strs.add(s);
        for(String s : new String[] {"Algebra", "english", "Geometry", "history"})
      sorted.add(s);
        assertEquals(sorted, _000005sorter.sort(strs));
    }
    
    @Test
    public void symbolsTest() {
        ArrayList<String> sorted = new ArrayList<>();
        ArrayList<String> strs = new ArrayList<>();
        for(String s : new String[] {"Alg#bra", "$istory", "Geom^try", "**English"})
        strs.add(s);
        for(String s : new String[] {"$istory", "**English", "Alg#bra", "Geom^try"})
      sorted.add(s);
        assertEquals(sorted, _000005sorter.sort(strs));
    }
    
    
}