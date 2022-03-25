import { Component, OnInit } from '@angular/core';

import { BackEndService } from '../backend.service';
import { Minion } from '../minion';

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
    this.backEndService.elementalSpiritMapper();
    this.backEndService.greaterDemonMapper();
    this.backEndService.elementalMapper();
    this.backEndService.devilMapper();
    this.backEndService.draconicSpiritMapper();
    this.backEndService.fiendMapper();
  }



  handleClick(name: string, type: string) {
    console.log(name);
    const newMinion: Minion = { name: name, type: type, spell_source: this.selectedSpell }
    const res = this.backEndService.addMinion(newMinion);
    res.subscribe(_ => {
      this.backEndService.minionMapper();
    });
  }

}
