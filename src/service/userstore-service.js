class UserstoreService {
  baseURL = "https://conduit.productionready.io/api";

  _postDataToResourse = async (data = {}, url) => {
    const res = await fetch(`${this.baseURL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      if (Object.keys(data).length) {
        throw await res.json();
      }
      throw new Error(res.status);
    }
    return await res.json();
  };

  postUserToLogin = async (user = {}) => {
    const res = await this._postDataToResourse({ user }, "/users/login");
    return await res;
  };

  postUserToRegister = async (user = {}) => {
    const res = await this._postDataToResourse({ user }, "/users");
    return await res;
  };
}

export default new UserstoreService();
