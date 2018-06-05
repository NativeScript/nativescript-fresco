export class DataItem {
    public id: number;
    public imageUri;

    constructor(id: number, imageUri: string) {
        this.id = id;
        this.imageUri = imageUri;
    }
}