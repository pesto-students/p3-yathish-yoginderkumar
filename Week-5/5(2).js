function isCharVowel(char) {
  return "aioue".includes(char);
}

function vowelCount(string) {
  const mappedString = new Map([
    ["a", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0],
    ["e", 0],
  ]);
  for (char of string) {
    if (isCharVowel(char.toLowerCase())) {
      if (mappedString.has(char.toLowerCase())) {
        mappedString.set(
          char.toLowerCase(),
          mappedString.get(char.toLowerCase()) + 1
        );
      } else {
        mappedString.set(char.toLowerCase(), 1);
      }
    }
  }
  return {
    a: mappedString.get("a"),
    i: mappedString.get("i"),
    o: mappedString.get("o"),
    u: mappedString.get("u"),
    e: mappedString.get("e"),
  };
}

const { a, i, o, u, e } = vowelCount("Abishek");
console.log({ vowelCount: a + i + o + u + e, a, i, o, u, e });
