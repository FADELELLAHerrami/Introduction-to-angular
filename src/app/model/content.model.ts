export class Content {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public description: string,
    public createDate: Date,
    public likes: number,
    public location?: string
  ){}
}
