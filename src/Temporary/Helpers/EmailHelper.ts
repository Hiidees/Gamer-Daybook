import HttpServicesAdapter from "../adapters/HttpServicesAdapter";

export default class EmailHelper {
  
  private readonly _adapter = new HttpServicesAdapter();

  public async sendEmailAsync(
    email: string,
    message: string,
    value: number | null
  ): Promise<any> {
    let stars = value;
    if(!value){
       stars = 0;
    }
    const reqBody = { email, message, stars };

    try {
      const response = await this._adapter.postAsync("message", reqBody);
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
