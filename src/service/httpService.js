/* eslint-disable no-unreachable */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import mockDataUrl from '../__mock__/data.json';

const mockData = true;

class HttpService {
  constructor(userId) {
    this._userId = userId;
    this.instance = axios.create({
      baseURL: 'http://localhost:8000/'
    });
    this._userDataApiResponse = null;
  }

  get userById() {
    return this.getUserById();
  }

  get activityByUserId() {
    return this.getActivityByUserId();
  }

  get averageSessionsByUserId() {
    return this.getAverageSessionsByUserId();
  }

  get perfomormancesByUserId() {
    return this.getPerformanceByUserId();
  }

  getUserById() {
    if (mockData) {
      const dataObject = {
        data: {
          data: null
        }
      };

      const userDataPromiseMock = new Promise((resolve, reject) => {
        const userMock = mockDataUrl.users.find((user) => {
          return parseInt(this._userId, 10) === user.id;
        });
        dataObject.data.data = userMock;
        resolve(dataObject);
      });

      return userDataPromiseMock;
    }
    return this.instance.get(`/user/${this._userId}`);
    // const userDataPromiseApi = new Promise((resolve, reject) => {
    //   const fetchApi = this.instance.get(`/user/${this._userId}`);
    //   resolve(fetchApi);
    //   reject(new Error('something bad happened'));
    // });
    // return userDataPromiseApi;
  }

  getActivityByUserId() {
    if (mockData) {
      const dataObject = {
        data: {
          data: null
        }
      };

      const activityDataPromiseMock = new Promise((resolve, reject) => {
        const activityMock = mockDataUrl.usersActivity.find((activity) => {
          return parseInt(this._userId, 10) === activity.userId;
        });
        dataObject.data.data = activityMock;
        resolve(dataObject);
      });

      return activityDataPromiseMock;
    }
    return this.instance.get(`/user/${this._userId}/activity`);
    // const userDataPromiseApi = new Promise((resolve, reject) => {
    //   const fetchApi = this.instance.get(`/user/${this._userId}`);
    //   resolve(fetchApi);
    //   reject(new Error('something bad happened'));
    // });
    // return userDataPromiseApi;
    // return this.instance.get(`/user/${userId}/activity`);
  }

  getAverageSessionsByUserId() {
    if (mockData) {
      const dataObject = {
        data: {
          data: null
        }
      };

      const averageSessionsDataPromiseMock = new Promise((resolve, reject) => {
        const averageMock = mockDataUrl.average.find((averageSession) => {
          return parseInt(this._userId, 10) === averageSession.userId;
        });
        dataObject.data.data = averageMock;
        resolve(dataObject);
      });

      return averageSessionsDataPromiseMock;
    }
    return this.instance.get(`/user/${this._userId}/average-sessions`);
    // return this.instance.get(`/user/${userId}/average-sessions`);
  }

  getPerformanceByUserId() {
    if (mockData) {
      const dataObject = {
        data: {
          data: null
        }
      };

      const performancesDataPromiseMock = new Promise((resolve, reject) => {
        const performancesMock = mockDataUrl.performances.find(
          (averageSession) => {
            return parseInt(this._userId, 10) === averageSession.userId;
          }
        );
        dataObject.data.data = performancesMock;
        resolve(dataObject);
      });

      return performancesDataPromiseMock;
    }
    return this.instance.get(`/user/${this._userId}/performance`);
  }
}

export default HttpService;
