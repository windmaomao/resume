let t: number = 1;

namespace Model {
  export class Project {
    title: string;

    constructor(t: string) {
      this.title = t;
    }

    length(): number {
      return this.title.length;
    }
  }
}
