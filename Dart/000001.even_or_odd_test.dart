import "package:test/test.dart";

void main() {
  test('Positive odd numbers', () {
    expect(evenOrOdd(1), equals('Odd'));
    expect(evenOrOdd(7), equals('Odd'));
  });
  test('Positive even numbers', () {
    expect(evenOrOdd(2), equals('Even'));
    expect(evenOrOdd(42), equals('Even'));
  });
  test('Negative odd numbers', () {
    expect(evenOrOdd(-1), equals('Odd'));
    expect(evenOrOdd(-7), equals('Odd'));
  });
  test('Negative even numbers', () {
    expect(evenOrOdd(-2), equals('Even'));
    expect(evenOrOdd(-42), equals('Even'));
  });
  test('Zero', () {
    expect(evenOrOdd(0), equals('Even'));
  });
}

String evenOrOdd(int number) {
  if (number % 2 == 0)
    return "Even";
  else
    return "Odd";
}
