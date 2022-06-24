export class AbortError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = AbortError.name;
    this.message = message || AbortError.name;
  }
}
