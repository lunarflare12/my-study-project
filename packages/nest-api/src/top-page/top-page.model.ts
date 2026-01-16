enum ToplevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

class TopPageModel {
  _id: string;
  firstLevelCategory: ToplevelCategory;
  secondCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoText: string;
  tagsTitle: string;
  tags: string[];
}

export { TopPageModel, ToplevelCategory };

