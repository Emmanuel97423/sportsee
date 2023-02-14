import axios from 'axios';

class HttpService {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:8000/'
    });
  }

  getUserById(userId) {
    return this.instance.get(`/user/${userId}`);
  }

  getActivityByUserId(userId) {
    return this.instance.get(`/user/${userId}/activity`);
  }

  getAverageSessionsByUserId(userId) {
    return this.instance.get(`/user/${userId}/average-sessions`);
  }

  getPerformanceByUserId(userId) {
    return this.instance.get(`/user/${userId}/average-sessions`);
  }
}

export default new HttpService();
