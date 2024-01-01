export function convertTimestamp(timestamp: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", options)?.format(date);

  return formattedDate;
}

/**
 * Formats a given date string into a specified format.
 * @param {string} inputDate - The input date string in the format 'YYYY-MM-DDTHH:mm:ss.sssZ'.
 * @returns {string} - The formatted date string in the format 'ShortMonth DD, YYYY'.
 */
export const formatDate = (inputDate: string): string => {
  const options = { year: "numeric", month: "short", day: "numeric" } as const;
  const formattedDate = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};
