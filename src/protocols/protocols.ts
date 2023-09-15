export type ApplicationError = {
    name: string;
    message: string;
};

export type Team = {
    pointGuard: string;
    shootingGuard: string;
    smallForward: string;
    powerForward: string;
    center: string;
}

export type ErrorHandler = {
    type: string;
    message: string;
}

export type idDelete = {
    id: number;
}