import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  id:number = 0;
  nome:string = "";
  src:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = params.id;
      }
    );
    if (this.id == 0) {
      this.nome = "Hey";
      this.src = "../../assets/hey.mp3";
    } else if (this.id == 1) {
      this.nome = "Summer";
      this.src = "../../assets/summer.mp3";
    } else if (this.id == 2) {
      this.nome = "Ukulele";
      this.src = "../../assets/ukulele.mp3";
    }
  }
}
