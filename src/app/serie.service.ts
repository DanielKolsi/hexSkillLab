import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SerieService {

  constructor(private http: Http) { }

  getAllSeries() {
    return new Promise((resolve, reject) => {
      this.http.get('/serie')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSerie(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/serie/' + id)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSerie(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/serie', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateSerie(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/serie/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteSerie(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/serie/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}