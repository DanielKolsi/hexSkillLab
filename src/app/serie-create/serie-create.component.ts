import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css']
})
export class SerieCreateComponent implements OnInit {


  serie = {};

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit() {
  }

saveSerie() {
    this.serieService.saveSerie(this.serie).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/serie-details', id]);
    }, (err) => {
      console.log(err);
    });
}
}
