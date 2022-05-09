export class Course {
    // para que as variaveis nao precisem ser inicializadas é preciso alterar o tsconfig.json
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    code: string;
    duration: number;
    rating: number;
    releaseDate: string;
    description: string;
}