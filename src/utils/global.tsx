export function shareToSocial(data: ShareData): Error | null {
  try {
    navigator.share(data);
    return null;
  } catch (error: any) {
    return new Error(String(error));
  }
}

export function isElementInViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
