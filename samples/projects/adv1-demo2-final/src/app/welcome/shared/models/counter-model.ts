
export class CounterModel {
  constructor(public count = 0, public team = 'unspecified') {
  }

  public static fromDto(dto:any):CounterModel {
    return new CounterModel(dto.count, dto.team);
  }
}
