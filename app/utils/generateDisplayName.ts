/**
 * Function: generate display name variations
 *
 * @param {string} name - The full name to generate display name variations from.
 * @returns {string[]} - An array of display name combinations.
 *
 * Example:
 * const fullName = "John Doe";
 * const displayNameVariations = generateDisplayNames(fullName);
 * console.log(displayNameVariations);
 * // Output: ["John", "Doe", "John Doe", "Doe John"]
 */

export function generateDisplayNames(name: string): string[] {
  const names = name.split(" ");
  const combinations: string[] = [];

  for (let i = 1; i <= names.length; i++) {
    for (let j = 0; j < i; j++) {
      const combination = names.slice(j, i).join(" ");
      combinations.push(combination);
    }
    if (i === names.length) {
      combinations.push(names.reverse().join(" "));
    }
  }

  return combinations;
}
