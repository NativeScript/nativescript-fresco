export class DataItem {
    public id: number;
    public aspectRatio: number;
    public imageUri;

    constructor(id: number, aspectRatio: number, imageUri: string) {
        this.id = id;
        this.imageUri = imageUri;
        this.aspectRatio = aspectRatio;
    }
}