import axios from "axios";
import FormData from "form-data";
import config from "config";
import {CustomError} from "./custom-error";

export async function getToken() {
  try {
    const data = new FormData();

    data.append("email", "qudratjonnuriddinov2603@gmail.com");
    data.append("password", config.get("sms_key"));

    const response = await axios({
      method: "POST",
      url: "http://notify.eskiz.uz/api/auth/login",
      data,
    });

    return response.data.data.token;
  } catch (error) {
    if (error instanceof CustomError) {
      throw new CustomError(error.message, 500);
    }
  }
}

export async function send(phone: string, code: number) {
  try {
    const data = new FormData();
    const mobile_phone = phone.split("+")[1];

    data.append("mobile_phone", mobile_phone);
    data.append(
      "message",
      `Your verification code: ${code}`
    );
    data.append("from", "4546");

    const token = await getToken();

    const config = {
      method: "post",
      url: "http://notify.eskiz.uz/api/message/sms/send",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    };

    await axios(config);

    return {success: true};
  } catch (error) {
    if (error instanceof Error) {
      throw new CustomError(error.message, 500);
    }
  }
}
