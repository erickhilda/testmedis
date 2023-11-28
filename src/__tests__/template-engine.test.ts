import { TemplateEngine } from '../controller/template-engine';

describe("Blood Test Assignments", () => {
  const templateEngine = new TemplateEngine();

  it("should return a label {REG_TYPE}/{DDMMYYYY}/{SEQ}", () => {
    const result = templateEngine.generateNumber({
      regType: 'REG',
      currentDate: new Date('2021-01-01'),
      seq: 1
    }, '{REG_TYPE}/{DDMMYYYY}/{SEQ}');
    expect(result).toEqual('REG/01012021/0001');
  });
  it("should return a label with format {SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}", () => {
    const result = templateEngine.generateNumber({
      regType: 'RI',
      currentDate: new Date('2021-01-06'),
      seq: 1
    }, '{SEQ}-{YYYY}/{MM}/{DD}-{REG_TYPE}');
    expect(result).toEqual('0001-2021/01/06-RI');
  });
  it("should return a label with format {REG_TYPE}/{YYMMDD}/{SEQ}", () => {
    const result = templateEngine.generateNumber({
      regType: 'RI',
      currentDate: new Date('2021-01-06'),
      seq: 1
    }, '{REG_TYPE}/{YYMMDD}/{SEQ}');
    expect(result).toEqual('RI/210106/0001');
  });
})
