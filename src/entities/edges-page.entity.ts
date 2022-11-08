export class EdgesPage<T> {
  totalCount: number;
  edges: T[];

  constructor(totalCount: number, data: T[]) {
    this.totalCount = totalCount;
    this.edges = data;
  }
}
