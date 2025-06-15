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
