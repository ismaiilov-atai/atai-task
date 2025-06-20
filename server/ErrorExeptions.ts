export class ErrorException extends Error {
  status: number = 200
  constructor(message = 'Failed with no message', status: number) {
    super(message)
    this.name = 'ErrorException'
    this.status = status
  }
}
