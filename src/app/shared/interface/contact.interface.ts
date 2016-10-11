export interface IContact {
  email?: string;
  fax?: string;
  phoneHome?: string;
  phoneWork?: string;
  phoneMobile?: string;
}

export class Contact implements IContact {
  email: string;
  fax: string;
  phoneHome: string;
  phoneWork: string;
  phoneMobile: string;
}
