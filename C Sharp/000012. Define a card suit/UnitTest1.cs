///Task
/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

string[] Deck =
{
    "2♣", "3♣", "4♣", "5♣", "6♣", "7♣", "8♣", "9♣", "10♣", "J♣", "Q♣", "K♣", "A♣",
    "2♦", "3♦", "4♦", "5♦", "6♦", "7♦", "8♦", "9♦", "10♦", "J♦", "Q♦", "K♦", "A♦",
    "2♥", "3♥", "4♥", "5♥", "6♥", "7♥", "8♥", "9♥", "10♥", "J♥", "Q♥", "K♥", "A♥",
    "2♠", "3♠", "4♠", "5♠", "6♠", "7♠", "8♠", "9♠", "10♠", "J♠", "Q♠", "K♠", "A♠"
};

DefineSuit("3♣") -> return "clubs"
DefineSuit("3♦") -> return "diamonds"
DefineSuit("3♥") -> return "hearts"
DefineSuit("3♠") -> return "spades"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System.Text.RegularExpressions;

namespace Solution
{
    public partial class Kata
    {
        public static string DefineSuit(string card)
        {
            return 
            Regex.IsMatch(card, "♣") ? "clubs":
            Regex.IsMatch(card, "♦") ? "diamonds":
            Regex.IsMatch(card, "♥") ? "hearts": "spades";
        }
    }
}
//Codewars recommended
/*
namespace Solution
{
    public partial class Kata
    {
        public static string DefineSuit(string card) =>
            card[^1] switch
            {
                '♣' => "clubs",
                '♦' => "diamonds",
                '♥' => "hearts",
                _ => "spades",
            };
    }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution
{
    [TestFixture]
    public class SolutionTests
    {
        [Test]
        public void SampleTest()
        {
            Assert.AreEqual("clubs", Kata.DefineSuit("3♣"), "Should return clubs with \"3♣\"");
            Assert.AreEqual("spades", Kata.DefineSuit("Q♠"), "Should return spades with \"Q♠\"");
            Assert.AreEqual(
                "diamonds",
                Kata.DefineSuit("9♦"),
                "Should return diamonds with \"9♦\""
            );
            Assert.AreEqual("hearts", Kata.DefineSuit("J♥"), "Should return hearts with \"J♥\"");
        }
    }
}
