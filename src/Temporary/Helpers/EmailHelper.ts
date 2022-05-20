import HttpServicesAdapter from "../adapters/HttpServicesAdapter";

export default class EmailHelper {
  private readonly _adapter = new HttpServicesAdapter();

  public async sendEmailAsync(
    email: string,
    message: string
  ): Promise<any> {
    const reqBody = { email, message };

    try {
      const response = await this._adapter.postAsync("email", reqBody);
      return response as any;
    } catch (err: unknown) {
      if (err) {
        //throw new SessionError(err.code, err.message, err.errorResponse);
      } else {
        throw err;
      }
    }
  }

 
}
