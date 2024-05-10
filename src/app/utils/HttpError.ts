

export default class HttpError extends Error {

  private readonly mStatus: number;
  private readonly mMessage: string;

  constructor(status: number, message: string) {
    super(message);
    this.mStatus = status;
    this.mMessage = message;
  }

  get status(): number {
    return this.mStatus;
  }

  get message(): string {
    return this.mMessage;
  }

}