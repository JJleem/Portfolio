interface LibraryConfig {
  one: string;
  two: string;
  three: string;
}
interface DetailConfig {
  desc: string;
  desc2: string;
  desc3: string;
  desc4: string;
  onedesc: string;
  onedesc2: string;
  twodesc: string;
  twodesc2: string;
  threedesc: string;
  threedesc2: string;
  fourdesc: string;
  fourdesc2: string;
  fivedesc: string;
  fivedesc2: string;
  sixdesc: string;
  sixdesc2: string;
}
declare module "./db.json" {
  export interface Db {
    items?: {
      id: number;
      img: string;
      title: string;
      maintitle: string;
      skill: string;
      language: string;
      transition: string;
      sub: string;
      mainsub: string;
      projecttype: string;
      date: string;
      library: LibraryConfig;
      detail: DetailConfig;
      github: string;
      site: string;
    }[];
  }
  const db: Db;
  export default db;
}
