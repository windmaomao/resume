// interface ProfileInterface {
//   name: string;
//   data: any;
//   sections: any;
//
//   init(): any;
//   addSection(section: string, items?: any[]): any;
//   setSection(section: string, items: any[]): any;
//   getSection(section: string): any[];
//   hasSection(section: string): boolean;
//   addItem(section: string, item: any): any;
//   getItem(section: string, key: string): any;
//   addItems(section: string, items: any[]): any;
//   clearItems(section: string): any;
// }

interface ProfileInterface {
  data: any;
  id: string;
  sections: SectionInterface[];
}

interface SectionInterface {
  profile: ProfileInterface,
  data: any;
  id: string;
  items: any[];
}
