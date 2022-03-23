import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';
import { StatCollection } from '../stat-collection';
import {
  FIND_FAMILIARS,
  SUMMON_FEY_BASE,
  SUMMON_SHADOWSPAWN_BASE,
  SUMMON_ABERRATION_BASE,
  SUMMON_CONSTRUCT_BASE,
  SUMMON_DRACONIC_SPIRITS_BASE,
  SUMMON_ELEMENTAL_BASE,
  SUMMON_FIEND_BASE } from '../conjurations';

@Component({
  selector: 'app-minion-viewer',
  templateUrl: './minion-viewer.component.html',
  styleUrls: ['./minion-viewer.component.css']
})
export class MinionViewerComponent implements OnInit {
  minions: StatCollection[] = [];

  constructor(
    private backEndService: BackEndService
  ) { }

  ngOnInit(): void {
    this.minionMapper();
  }

  minionMapper(): void {
    this.backEndService.getMinions()
      .subscribe(minions => {
        console.log(minions);
        minions.forEach(minion => {
          const name: string = minion.name;
          const type: string = minion.type;
          switch(minion.spell_source) {
            case "Find Familiar":
              let base_familiar: StatCollection = FIND_FAMILIARS[0];
              for (const familiar of FIND_FAMILIARS) {
                if (familiar.name = name) {
                  base_familiar = familiar;
                }
              }
              const newMinion: StatCollection = { name: name, stats: {...base_familiar.stats, name: name} }
              this.minions.push(newMinion);
              break;
            default:
              break;
          }
        })
      });
  }

  handleClick(name: string) {
    console.log(name);
  }

}
