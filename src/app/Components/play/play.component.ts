import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  id:number = 0;
  nome:string ="";
  src:string = "";
  paths:string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.id = parseInt(params.id);
        this.nome = params.nome;
      }
    );
    this.paths = this.richiediAudio();
  }

  richiediAudio() {
    return [];
  }
}
