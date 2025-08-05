export const isVideoLink = (url: string): boolean => {
  // YouTube
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  if (youtubeRegex.test(url)) return true;

  // TikTok
  const tiktokRegex = /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+$/;
  if (tiktokRegex.test(url)) return true;

  // Instagram
  const instagramRegex = /^(https?:\/\/)?(www\.)?(instagram\.com)\/.+$/;
  if (instagramRegex.test(url)) return true;

  // Facebook
  const facebookRegex = /^(https?:\/\/)?(www\.)?(facebook\.com)\/.+$/;
  if (facebookRegex.test(url)) return true;

  // LinkedIn
  const linkedinRegex = /^(https?:\/\/)?(www\.)?(linkedin\.com)\/.+$/;
  if (linkedinRegex.test(url)) return true;

  // Netflix, Prime Video, Disney+, etc.
  const streamingRegex =
    /^(https?:\/\/)?(www\.)?(netflix\.com|primevideo\.com|disneyplus\.com)\/.+$/;
  if (streamingRegex.test(url)) return true;

  // If no match, return false
  return false;
};
// utils/getEmbeddedUrl.ts

export const getEmbeddedUrl = (url: string): string => {
  try {
    const parsed = new URL(url);

    // YouTube
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.searchParams.has("v")
    ) {
      const videoId = parsed.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname.includes("youtu.be")) {
      const videoId = parsed.pathname.slice(1); // remove leading slash
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // TikTok
    if (parsed.hostname.includes("tiktok.com")) {
      return url.replace("/video/", "/embed/").split("?")[0];
    }

    // Instagram (only works if embed is allowed)
    if (parsed.hostname.includes("instagram.com")) {
      return `${url}embed`;
    }

    // Facebook (basic attempt – may require App access for real use)
    if (parsed.hostname.includes("facebook.com")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}`;
    }

    // LinkedIn, Netflix, etc. — no public embed support
    return "";
  } catch {
    return "";
  }
};
