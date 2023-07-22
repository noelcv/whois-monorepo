export interface IParsedDomain {
  uid?: string;
  domainName: string;
  registrarId: string;
  registrarName: string;
  registrarUrl: string;
  registrarWhoisServer: string;
  expirationDate: string;
  creationDate: string;
  registrarIanaId: string;
  rawResponse: string;
}
