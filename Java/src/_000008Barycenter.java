///Task
/*
The medians of a triangle are the segments that unit the vertices with the midpoint of their opposite sides. 
The three medians of a triangle intersect at the same point, called the barycenter or the centroid. 
Given a triangle, defined by the cartesian coordinates of its vertices we need to localize its barycenter or centroid.

The function bar_triang() or barTriang or bar-triang, receives the coordinates of the three vertices 
A, B and C as three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]

This is how our asked function should work: the result of the coordinates should be expressed up to four decimals, (rounded result).

You know that the coordinates of the barycenter are given by the following formulas.
*/
///Solution
//My
class _000008Barycenter {
    public static double[] barTriang(double[] x, double[] y, double[] z) {
        double firstD = ((x[0] + y[0] + z[0]) / 3);
        double secondD = ((x[1] + y[1] + z[1]) / 3);
        double[] doubleck = { Math.round(firstD * 10000.0) / 10000.0, Math.round(secondD * 10000.0) / 10000.0 };
        return doubleck;
    }
}