export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Orientação local",
    description:
      "Procure a Central do Imigrante em Videira para receber orientação sobre sua situação.",
  },
  {
    number: "02",
    title: "Categoria migratória",
    description:
      "Identifique qual modalidade de residência pode se aplicar ao seu caso.",
  },
  {
    number: "03",
    title: "Documentação",
    description:
      "Separe os documentos necessários para o procedimento.",
  },
  {
    number: "04",
    title: "Autorização de residência",
    description:
      "Realize a solicitação pelos canais oficiais correspondentes.",
  },
  {
    number: "05",
    title: "Polícia Federal",
    description:
      "Realize o registro e os procedimentos necessários para emissão do documento.",
  },
  {
    number: "06",
    title: "CRNM",
    description:
      "Após o processo, será emitida a Carteira de Registro Nacional Migratório.",
  },
];

export const requiredDocuments = [
  {
    title: "Documento de identificação",
    description:
      "Passaporte ou documento de identificação oficial aceito pelas autoridades brasileiras.",
  },
  {
    title: "Documentos civis",
    description:
      "Certidões de nascimento, casamento ou outros documentos que comprovem sua situação civil, quando necessários.",
  },
  {
    title: "Antecedentes criminais",
    description:
      "Certidão ou documento equivalente, quando exigido.",
  },
  {
    title: "Documentos estrangeiros",
    description:
      "Podem estar sujeitos às regras de legalização, apostilamento e tradução juramentada.",
  },
];