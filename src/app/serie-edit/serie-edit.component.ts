import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {


  serie = {};

  constructor(private serieService: SerieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSerie(this.route.snapshot.params['id']);
  }

  getSerie(id) {
    this.serieService.showSerie(id).then((res) => {
      this.serie = res;
      console.log(this.serie);
    }, (err) => {
      console.log(err);
    });
  }

  updateSerie(id) {
    this.serieService.updateSerie(id, this.serie).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/serie-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}