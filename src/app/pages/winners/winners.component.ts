import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { WinnersService } from '../../shared/services/winners.service';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  winnersObject?: Array<Image>;
  chosenImage?: Image;

  constructor(private winnersService: WinnersService) { }

  ngOnInit(): void {
    this.winnersService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.winnersObject = data;
    })
  }

  loadImage(imageObject: Image) {
    this.chosenImage = imageObject;
  }

}
