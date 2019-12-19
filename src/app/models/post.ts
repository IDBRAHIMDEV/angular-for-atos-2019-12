export interface Post {
    id?: number;
    title: string;
    body: string;
    vote?: {
        like?: number;
        disLike?: number;
    }
}
