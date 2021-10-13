/*
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

I	1
V	5
X	10
L	50
C	100
D	500
M	1000 
Test.assertEquals(RomanNumerals.toRoman(1000), 'M')
Test.assertEquals(RomanNumerals.toRoman(999), "CMXCIX")
Test.assertEquals(RomanNumerals.toRoman(4), 'IV')
Test.assertEquals(RomanNumerals.toRoman(1), 'I')
Test.assertEquals(RomanNumerals.toRoman(1991), 'MCMXCI')
Test.assertEquals(RomanNumerals.toRoman(2006), 'MMVI')
Test.assertEquals(RomanNumerals.toRoman(2020), 'MMXX')

Test.assertEquals(RomanNumerals.fromRoman('XXI'), 21)
Test.assertEquals(RomanNumerals.fromRoman('I'), 1)
Test.assertEquals(RomanNumerals.fromRoman('III'), 3)
Test.assertEquals(RomanNumerals.fromRoman('IV'), 4)
Test.assertEquals(RomanNumerals.fromRoman('MMVII'), 2007)
Test.assertEquals(RomanNumerals.fromRoman('MDCLXIX'), 1669)
*/