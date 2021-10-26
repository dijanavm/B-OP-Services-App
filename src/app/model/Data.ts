export class Data {
    public author: string;
    public description: string;
    public category: string;
    public country: string;
    public image: string;
    public language: string;
    public published_at: string;
    public source: string;
    public title:string;
    public url: string;

    constructor(author: string, description:string, category: string, country:string, image:string, language:string, published_at:string, source:string, title:string, url:string){
        this.author = author;
        this.description = description;
        this.category = category;
        this.country = country;
        this.image = image;
        this.language = language;
        this.published_at = published_at;
        this.source = source;
        this.title = title;
        this.url = url;
    }
}