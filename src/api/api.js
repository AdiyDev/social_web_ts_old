import * as axios from "axios";
//сунщность аксиос экзепляр может несколько апишек, легко будет подменять
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "2561349e-c031-4f3f-acb6-8feb671f338e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data; //возвращает return then это promise почитать
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId); //когда в конце urlа то можно добавить и плюсом сделать конкатенацию //возвращаем промис возвращеный гетом
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status: status }); //json на сервер передать который будет равен тексту
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`); //auth/me?sgdsg=dsaf ввиде данных нет возможности отправить, отправляем ввиде строки это для get and delete
  }, //me() дай мне меня
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }); //вторым параметром можем положить и передать обьект на сервак
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
