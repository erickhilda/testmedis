type TemplateData = {
  regType: string;
  currentDate: Date;
  seq: number;
}

export class TemplateEngine {
  constructor() { }

  private formatDate(date: Date): { year: string, month: string, day: string } {
    const year = date.getFullYear().toString()
    // month 01 - 12
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    // day 01 - 31
    const day = date.getDate().toString().padStart(2, "0");

    return { year, month, day }
  };

  private formatSequence(seq: number): string {
    return seq.toString().padStart(4, "0");
  }

  public generateNumber(data: TemplateData, template: string): string {
    const { regType, currentDate, seq } = data;

    const formattedSequence = this.formatSequence(seq);
    const { year, month, day } = this.formatDate(currentDate);

    let result = template
      .replace("REG_TYPE", regType)
      .replace("SEQ", formattedSequence)
      .replace("YYYY", year)
      .replace("YY", year.slice(-2))
      .replace("MM", month)
      .replace("DD", day);

    result = result.split("{").join("").split("}").join("");

    return result;
  }
}
