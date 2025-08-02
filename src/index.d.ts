export interface ReviewMyTWA {
  isTWA: boolean;
  showAfter: (days: number) => void;
  hideReviewDialog: () => void;
  showReviewDialog: () => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
}

declare const ReviewMyTWA: ReviewMyTWA;
export default ReviewMyTWA;
