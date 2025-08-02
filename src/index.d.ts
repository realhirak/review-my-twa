export interface ReviewMyTWA {
  isTWA: boolean;
  showAfter: (days: number) => void;
  hideReviewDialog: () => void;
  showReviewDialog: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

// ✅ Export as a value
declare const ReviewMyTWA: ReviewMyTWA;
export default ReviewMyTWA;

// ✅ Attach to window (optional, for CDN users)
declare global {
  interface Window {
    ReviewMyTWA: ReviewMyTWA;
  }
}
