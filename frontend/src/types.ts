export interface Course {
    id: string;
    title: string;
    level: 'Beginner' | 'Intermediate';
    status: 'Live' | 'Coming Soon';
    description?: string;
}
