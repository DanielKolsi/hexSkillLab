import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
 
  series: any;

  constructor(private serieService: SerieService, private router: Router) {
    
   }

  ngOnInit() {
    this.getSerieList();
  }


  getSerieList() {
    this.serieService.getAllSeries().then((res) => {
      this.series = res;
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
