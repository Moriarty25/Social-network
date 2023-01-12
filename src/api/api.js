import axios from "axios";


const instanse = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "660451ed-ec44-40ae-a3ca-545e9641b10f"
      }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse
          .get(
            `users?page=${currentPage}&count=${pageSize}`,
          )
          .then((response) => {
            return response.data;
          });
      },
    
    followToUser(id) {
      return instanse
        .post(
          `follow/${id}`,
        )
        .then((response) => {
          return response.data;
        });
    },

    unfollowToUser(id) {
        return instanse
          .delete(
            `follow/${id}`,
          )
          .then((response) => {
            return response.data;
          });
      }
}


export const headerAPI = {
  getAuthUser() {
        return instanse
          .get(
            `auth/me`,
          )
          .then((response) => {
            return response.data;
          });
      }
}


export const  profileAPI = {
  getProfile(userId) {
        return instanse
          .get(
            `profile/` + userId ,
          )
          .then((response) => {
            return response.data;
          });
      }
}


export const friendAPI = {

  followToUser(id) {
        return instanse
          .post(
            `follow/${id}`,
          )
          .then((response) => {
            return response.data;
          });
      },

  unfollowToUser(id) {
        return instanse
          .delete(
            `follow/${id}`,
          )
          .then((response) => {
            return response.data;
          });
      }
}

