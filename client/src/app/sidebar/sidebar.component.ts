import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  spells: string[] = [
    "Find Familiar",
    "Summon Fey",
    "Summon Lesser Demons",
    "Summon Shadowspawn",
    "Conjure Minor Elementals",
    "Summon Aberration",
    "Summon Construct",
    "Summon Elemental",
    "Summon Greater Demon",
    "Conjure Elemental",
    "Infernal Calling",
    "Summon Draconic Spirit",
    "Summon Fiend"
  ];

  constructor(
    private backEndService: BackEndService
  ) { }

  ngOnInit(): void {
  }

  handleClick(spell: string) {
    this.backEndService.selectSpell(spell);
  }

}
