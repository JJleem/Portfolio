interface LibraryConfig {
  one: string;
  two: string;
  three: string;
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
      github: string;
      site: string;
    }[];
  }
  const db: Db;
  export default db;
}
