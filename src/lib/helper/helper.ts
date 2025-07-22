import truncate from "html-truncate";

export const reverseArray = <T>(arr: T[]): T[] => {
  if (arr) {
    return arr.slice().reverse();
  } else {
    return [];
  }
};

export function truncateHtmlToText(
  html: string,
  maxLength: number = 100,
  ellipsis = "..."
): string {
  return truncate(html, maxLength, { ellipsis });
}
