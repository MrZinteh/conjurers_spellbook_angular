import { Component, OnInit } from '@angular/core';

import { BackEndService } from '../backend.service';
import { Minion } from '../minion';
import { StatCollection } from '../stat-collection';

@Component({
  selector: 'app-possible-conjures',
  templateUrl: './possible-conjures.component.html',
  styleUrls: ['./possible-conjures.component.css']
})
export class PossibleConjuresComponent implements OnInit {

  conjurations: {[key: string]: StatCollection[] } = this.backEndService.conjurations;
  selectedSpell: string = "Find Familiar";
  conjures = this.conjurations[this.selectedSpell];
  orderedConjures = this.conjures;
  selectedSort: string = "name";
  selectedFilter: string = "name";
  filterText: string = "";

  constructor(
    private backEndService: BackEndService
  )
  {
    this.backEndService.selectedSpell$.subscribe(
      spell => {
        this.selectedSpell = spell;
        this.conjures = this.conjurations[this.selectedSpell];
        this.orderedConjures = this.conjurations[this.selectedSpell];
        this.selectedSort = "name"
      }
    );
    this.backEndService.conjurations$.subscribe(
      conjuration => {
        this.conjurations = conjuration;
        this.conjures = this.conjurations[this.selectedSpell];
        this.orderedConjures = this.conjurations[this.selectedSpell];
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
    this.backEndService.initializeSortedConjures();
  }



  handleClick(name: string, type: string) {
    const newMinion: Minion = { name: name, type: type, spell_source: this.selectedSpell }
    const res = this.backEndService.addMinion(newMinion);
    res.subscribe(_ => {
      this.backEndService.minionMapper();
    });
  }

  sortConjures(sortBy: string): void {
    let orderedSortable = this.conjures.sort((a, b) => {
      let comp_a: string = a.stats.name;
      let comp_b: string = b.stats.name;

      if (sortBy === "AC") {
        comp_a = a.stats.AC;
        comp_b = b.stats.AC;
      }
      else if (sortBy === "subName") {
        if (a.stats.subName !== null && b.stats.subName !== null) {
          comp_a = a.stats.subName;
          comp_b = b.stats.subName;
        }
      }

      const crMap: {[key: string]: number} = {
          "1/8": 0.125,
          "1/4": 0.25,
          "1/2": 0.5,
          "1": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
      }
      if (comp_a in crMap) {
          return crMap[comp_a] - crMap[comp_b];
      }
      else {
          if (comp_a < comp_b) {
              return -1;
          } else if (comp_a > comp_b) {
              return 1;
          } else {
              return 0;
          }
      }

    });
    this.backEndService.sortConjures(orderedSortable, this.selectedSpell);
  }

  handleTextChange(text: string): void {
    // TODO: Implement
    console.log(text);
  }

}
