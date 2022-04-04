import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';

@Component({
  selector: 'app-spell-viewer',
  templateUrl: './spell-viewer.component.html',
  styleUrls: ['./spell-viewer.component.css']
})
export class SpellViewerComponent implements OnInit {
  selectedSpell: string = "Find Familiar";

  constructor(
    private backEndService: BackEndService
  )
  {
    this.backEndService.selectedSpell$.subscribe(
      spell => {
        this.selectedSpell = spell;
      }
    )
  }

  ngOnInit(): void {
  }

}
