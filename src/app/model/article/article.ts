export class Articles {
    public id: string;
    public title: string;
    public description: string;
    public author: string;
    public dateOfPublish: Date;
    public image: string;
    public url: string;

    constructor(id: string, title: string, description: string, author: string, dateOfPublish: Date, image: string, url: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.dateOfPublish = dateOfPublish;
        this.image = image;
        this.url = url;
    }
}