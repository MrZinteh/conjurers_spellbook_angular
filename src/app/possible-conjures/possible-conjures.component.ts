import { Component, OnInit } from '@angular/core';

import { BackEndService } from '../backend.service';

@Component({
  selector: 'app-possible-conjures',
  templateUrl: './possible-conjures.component.html',
  styleUrls: ['./possible-conjures.component.css']
})
export class PossibleConjuresComponent implements OnInit {

  conjurations = this.backEndService.conjurations;
  selectedSpell: string = "Find Familiar";

  constructor(
    private backEndService: BackEndService
  )
  {
    this.backEndService.selectedSpell$.subscribe(
      spell => {
        this.selectedSpell = spell;
      }
    );
    this.backEndService.conjurations$.subscribe(
      conjuration => {
        console.log(conjuration);
        this.conjurations = conjuration;
      }
    );
  }

  ngOnInit(): void {
    this.backEndService.feySpiritMapper();
    this.backEndService.lesserDemonMapper();
    this.backEndService.shadowSpawnMapper();
    this.backEndService.minorElementalMapper();
    this.backEndService.aberrationMapper();
    this.backEndService.constructMapper();
  }



  handleClick(name: string) {
    console.log(name);
    console.log(this.conjurations);
  }

}
