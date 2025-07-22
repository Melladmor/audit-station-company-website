import DOMPurify from "dompurify";

export const reverseArray = <T>(arr: T[]): T[] => {
  if (arr) {
    return arr.slice().reverse();
  } else {
    return [];
  }
};
export function truncateHtmlToText(
  htmlString: string,
  maxLength: number = 100
): string {
  if (typeof window === "undefined") return ""; // Prevent SSR issues

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = DOMPurify.sanitize(htmlString);
  const plainText = tempDiv.textContent || tempDiv.innerText || "";
  const sliced = plainText.slice(0, maxLength);

  return DOMPurify.sanitize(sliced); // Sanitize again for safety
}
