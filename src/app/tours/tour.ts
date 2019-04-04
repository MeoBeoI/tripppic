export class Tour {
  constructor(
    public title: string,
    public description: string,
    public categories: [string],
    public phone: string,
    public address: string,
    public location: string,
    public cities: [string],
    public expect: string,
    public startTime: string,
    public endTime: string,
    public image: string,
    public price: number,
    public _id: any,
  ) { }
}
