export default class Project {
  title: string;

  constructor(t: string) {
    this.title = t;
  }

  length(): number {
    return this.title.length;
  }
}
