export interface IComment {
  createdAt: string;
  isVerified: boolean;
  reviewedAt: string;
  comment: string;
  commenter: string;
  starRating: number;
  title: string;
  commentFrom: string;
}
