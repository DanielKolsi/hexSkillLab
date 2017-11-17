import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serie = {};

  constructor(private route: ActivatedRoute, private router: Router, private serieService: SerieService) { }

  ngOnInit() {
    this.getSerieDetail(this.route.snapshot.params['id']);
  }

  getSerieDetail(id) {
    this.serieService.showSerie(id).then((res) => {
      this.serie = res;
      console.log(this.serie);
    }, (err) => {
      console.log(err);
    });
  }

  deleteSerie(id) {
  this.serieService.deleteSerie(id).then((result) => {
    this.router.navigate(['/series']);
  }, (err) => {
    console.log(err);
  });
}

}