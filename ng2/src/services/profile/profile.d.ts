interface ProfileInterface {
  name: string;
  data: any;
  sections: any;

  init(): any;
  initSection(section: string): any;
  addSection(section: string): any;
  addSectionItem(section: string, item: any): any;
}
