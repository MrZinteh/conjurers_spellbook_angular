import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../backend.service';
import { StatCollection } from '../stat-collection';

@Component({
  selector: 'app-minion-viewer',
  templateUrl: './minion-viewer.component.html',
  styleUrls: ['./minion-viewer.component.css']
})
export class MinionViewerComponent implements OnInit {
  minions: StatCollection[] = this.backEndService.minions;
  conjurations = this.backEndService.conjurations;

  constructor(
    private backEndService: BackEndService
  ) {
    this.backEndService.conjurations$.subscribe(
      conjuration => {
        this.conjurations = conjuration;
      }
    );

    this.backEndService.minions$.subscribe(
      minions => {
        this.minions = minions;
      }
    );
  }

  ngOnInit(): void {
    this.backEndService.minionMapper();
  }

  handleClick(name: string) {
    const res = this.backEndService.deleteMinion(name);
    res.subscribe(_ => {
      this.backEndService.minionMapper();
    });
  }

}
