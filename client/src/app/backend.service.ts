import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Spirit } from './spirit';
import { catchError, Observable, Subject, Subscriber } from 'rxjs';
import { Monster } from './monster';
import { Minion } from './minion';
import { StatCollection } from './stat-collection';
import {
  FIND_FAMILIARS,
  SUMMON_FEY_BASE,
  SUMMON_SHADOWSPAWN_BASE,
  SUMMON_ABERRATION_BASE,
  SUMMON_CONSTRUCT_BASE,
  SUMMON_DRACONIC_SPIRITS_BASE,
  SUMMON_ELEMENTAL_BASE,
  SUMMON_FIEND_BASE,
  ELEMENTALS,
  DEMONS,
  DEVILS} from './conjurations';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(
    private http: HttpClient
  ) { }

  private feySpiritsUrl = 'api/feySpirits';
  private lesserDemonsUrl = 'api/fiends/lesserDemons';
  private shadowSpiritsUrl = 'api/shadowSpirits';
  private minorElementalUrl = 'api/elementals/minor';
  private aberrationsUrl = 'api/aberrations';
  private constructsUrl = 'api/constructs';
  private elementalsUrl = 'api/elementals';
  private greaterDemonsUrl = 'api/fiends/greaterDemons';
  private devilsUrl = 'api/fiends/devils';
  private draconicSpiritsUrl = 'api/draconicSpirits';
  private fiendsUrl = 'api/fiends';
  private minionsUrl = 'api/minions';

  private conjurationsSource = new Subject<{ [key: string]: StatCollection[] }>();

  conjurations$ = this.conjurationsSource.asObservable();

  public conjurations: { [key: string]: StatCollection[] } = {
    "Find Familiar": FIND_FAMILIARS,
    "Summon Fey": [],
    "Summon Lesser Demons": [],
    "Summon Shadowspawn": [],
    "Conjure Minor Elementals": [],
    "Summon Aberration": [],
    "Summon Construct": [],
    "Summon Elemental": [],
    "Summon Greater Demon": [],
    "Conjure Elemental": [],
    "Infernal Calling": [],
    "Summon Draconic Spirit": [],
    "Summon Fiend": []
  }

  public orderedConjurations: { [key: string]: StatCollection[] } = {
    "Find Familiar": FIND_FAMILIARS,
    "Summon Fey": [],
    "Summon Lesser Demons": [],
    "Summon Shadowspawn": [],
    "Conjure Minor Elementals": [],
    "Summon Aberration": [],
    "Summon Construct": [],
    "Summon Elemental": [],
    "Summon Greater Demon": [],
    "Conjure Elemental": [],
    "Infernal Calling": [],
    "Summon Draconic Spirit": [],
    "Summon Fiend": []
  }

  public filteredConjurations: { [key: string]: StatCollection[] } = {
    "Find Familiar": FIND_FAMILIARS,
    "Summon Fey": [],
    "Summon Lesser Demons": [],
    "Summon Shadowspawn": [],
    "Conjure Minor Elementals": [],
    "Summon Aberration": [],
    "Summon Construct": [],
    "Summon Elemental": [],
    "Summon Greater Demon": [],
    "Conjure Elemental": [],
    "Infernal Calling": [],
    "Summon Draconic Spirit": [],
    "Summon Fiend": []
  }

  private minionsSource = new Subject<StatCollection[]>();

  minions$ = this.minionsSource.asObservable();

  public minions: StatCollection[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  private selectedSpellSource = new Subject<string>();
  selectedSpell$ = this.selectedSpellSource.asObservable();

  private sortBySource = new Subject<string>();
  sortBy$ = this.sortBySource.asObservable();

  selectSpell(spell: string): void {
    this.selectedSpellSource.next(spell);
  }

  sortConjures(sortedConjures: StatCollection[], spell: string): void {
    this.orderedConjurations[spell] = sortedConjures;
    this.conjurationsSource.next(this.orderedConjurations);
  }

  filterConjures(filterBy: string, filterText: string, spell: string): void {
    let filteredOrderedConjurations = this.orderedConjurations[spell];
    if (filterBy === "name") {
      filteredOrderedConjurations = filteredOrderedConjurations.filter((el) => {
        return el.name.toLowerCase().includes(filterText.toLowerCase());
      })
    }
    else if (filterBy === "subName") {
      filteredOrderedConjurations = filteredOrderedConjurations.filter((el) => {
        if (el.stats.subName !== null) {
          return el.stats.subName.toLowerCase().includes(filterText.toLowerCase());
        }
        else {
          return false;
        }
      })
    }

    this.filteredConjurations[spell] = filteredOrderedConjurations;
    this.conjurationsSource.next(this.filteredConjurations);
  }

  initializeSortedConjures(): void {
    this.orderedConjurations = this.conjurations;
  }

  getFeySpirits(): Observable<Spirit[]> {
    return this.http.get<Spirit[]>(this.feySpiritsUrl);
  }

  getLesserDemons(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.lesserDemonsUrl);
  }

  getShadowSpirits(): Observable<Spirit[]> {
    return this.http.get<Spirit[]>(this.shadowSpiritsUrl);
  }

  getMinorElementals(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.minorElementalUrl);
  }

  getAberrations(): Observable<Spirit[]> {
    return this.http.get<Spirit[]>(this.aberrationsUrl);
  }

  getConstructs(): Observable<Spirit[]> {
    return this.http.get<Spirit[]>(this.constructsUrl);
  }

  getElementals(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.elementalsUrl);
  }

  getGreaterDemons(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.greaterDemonsUrl);
  }

  getDevils(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.devilsUrl);
  }

  getDraconicSpirits(): Observable<Spirit[]> {
    return this.http.get<Spirit[]>(this.draconicSpiritsUrl);
  }

  getFiends(): Observable<Monster[]> {
    return this.http.get<Monster[]>(this.fiendsUrl);
  }

  getMinions(): Observable<Minion[]> {
    return this.http.get<Minion[]>(this.minionsUrl);
  }

  addMinion(minion: Minion): Observable<ArrayBuffer> {
    return this.http.post<ArrayBuffer>(this.minionsUrl, minion, this.httpOptions)
      .pipe(
        catchError((e) => new Observable<ArrayBuffer>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      );
  }

  deleteMinion(name: string): Observable<ArrayBuffer> {
    return this.http.delete<ArrayBuffer>(this.minionsUrl + '?name=' + name)
      .pipe(
        catchError((e) => new Observable<ArrayBuffer>(subscriber => {
          console.log(e);
          subscriber.next(e);
        }))
      );
  }

  minionMapper(): void {
    this.minions = [];
    this.getMinions()
      .subscribe(minions => {
        minions.forEach(minion => {
          const name: string = minion.name;
          const type: string = minion.type;
          const spellSource: string = minion.spell_source;
          const spell_conjures: StatCollection[] = this.conjurations[spellSource];
          let conjuredMinion = spell_conjures[0]
          for (const conjure of spell_conjures) {
            if (conjure.name === name) {
              conjuredMinion = conjure;
            }
          }
          this.minions.push(conjuredMinion);
        });
        this.minionsSource.next(this.minions);
      });
  }

  feySpiritMapper() {
    this.getFeySpirits()
      .subscribe(feySpirits => {
        feySpirits.forEach((spirit: Spirit) => {
          const name: string = spirit.name;
          const type: string = spirit.type;
          let base_fey: StatCollection = SUMMON_FEY_BASE[0];
          for (const fey_type of SUMMON_FEY_BASE) {
            if (fey_type.name === type) {
              base_fey = fey_type;
            }
          }
          const feySpirit: StatCollection = { name: name, stats: {...base_fey.stats, name: name} }
          this.conjurations["Summon Fey"].push(feySpirit);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  lesserDemonMapper() {
    this.getLesserDemons()
      .subscribe(lesserDemons => {
        lesserDemons.forEach((demon: Monster) => {
          const name = demon.name;
          const type = demon.type;
          const cr: string = demon.cr.toString();
          let base_demon: StatCollection = DEMONS[0];
          for (const demon_ of DEMONS) {
            if (demon_.name === name) {
              base_demon = demon_;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const lesserDemon: StatCollection = { name: name, stats: {...base_demon.stats, name: name, subName: newCr}}
          this.conjurations["Summon Lesser Demons"].push(lesserDemon);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  shadowSpawnMapper() {
    this.getShadowSpirits()
      .subscribe(shadowSpirits => {
        shadowSpirits.forEach((spirit: Spirit) => {
          const name: string = spirit.name;
          const type: string = spirit.type;
          let base_shadow: StatCollection = SUMMON_SHADOWSPAWN_BASE[0];
          for (const shadow_type of SUMMON_SHADOWSPAWN_BASE) {
            if (shadow_type.name === type) {
              base_shadow = shadow_type;
            }
          }
          const shadowSpirit: StatCollection = { name: name, stats: {...base_shadow.stats, name: name} }
          this.conjurations["Summon Shadowspawn"].push(shadowSpirit);
        });
        this.conjurationsSource.next(this.conjurations);
      })
  }

  minorElementalMapper() {
    this.getMinorElementals()
      .subscribe(minorElementals => {
        minorElementals.forEach((elemental: Monster) => {
          const name = elemental.name;
          const type = elemental.type;
          const cr: string = elemental.cr.toString();
          let base_elemental: StatCollection = ELEMENTALS[0];
          for (const elemental_ of ELEMENTALS) {
            if (elemental_.name === name) {
              base_elemental = elemental_;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const minorElemental: StatCollection = { name: name, stats: {...base_elemental.stats, name: name, subName: newCr}}
          this.conjurations["Conjure Minor Elementals"].push(minorElemental);
        });
        this.conjurationsSource.next(this.conjurations);
      })
  }

  aberrationMapper() {
    this.getAberrations()
      .subscribe(aberrations => {
        aberrations.forEach((aberration: Spirit) => {
          const name: string = aberration.name;
          const type: string = aberration.type;
          let base_aberration: StatCollection = SUMMON_ABERRATION_BASE[0];
          for (const ab_type of SUMMON_ABERRATION_BASE) {
            if (ab_type.name === type) {
              base_aberration = ab_type;
            }
          }
          const newAberration: StatCollection = { name: name, stats: {...base_aberration.stats, name: name} }
          this.conjurations["Summon Aberration"].push(newAberration);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  constructMapper() {
    this.getConstructs()
      .subscribe(constructs => {
        constructs.forEach((construct: Spirit) => {
          const name: string = construct.name;
          const type: string = construct.type;
          let base_construct: StatCollection = SUMMON_CONSTRUCT_BASE[0];
          for (const construct_type of SUMMON_CONSTRUCT_BASE) {
            if (construct_type.name === type) {
              base_construct = construct_type;
            }
          }
          const newConstruct: StatCollection = { name: name, stats: {...base_construct.stats, name: name} }
          this.conjurations["Summon Construct"].push(newConstruct);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  elementalSpiritMapper() {
    this.getElementals()
      .subscribe(elementals => {
        elementals.forEach((elemental: Spirit) => {
          const name: string = elemental.name;
          const type: string = elemental.type;
          let base_elemental: StatCollection = SUMMON_ELEMENTAL_BASE[0];
          for (const elemental_type of SUMMON_ELEMENTAL_BASE) {
            if (elemental_type.name === type) {
              base_elemental = elemental_type;
            }
          }
          const newElemental: StatCollection = { name: name, stats: {...base_elemental.stats, name: name} }
          this.conjurations["Summon Elemental"].push(newElemental);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  greaterDemonMapper() {
    this.getGreaterDemons()
      .subscribe(greaterDemons => {
        greaterDemons.forEach((demon: Monster) => {
          const name = demon.name;
          const type = demon.type;
          const cr: string = demon.cr.toString();
          let base_demon: StatCollection = DEMONS[0];
          for (const demon_ of DEMONS) {
            if (demon_.name === name) {
              base_demon = demon_;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const greaterDemon: StatCollection = { name: name, stats: {...base_demon.stats, name: name, subName: newCr}}
          this.conjurations["Summon Greater Demon"].push(greaterDemon);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  elementalMapper() {
    this.getElementals()
      .subscribe(elementals => {
        elementals.forEach((elemental: Monster) => {
          const name = elemental.name;
          const type = elemental.type;
          const cr: string = elemental.cr.toString();
          let base_elemental: StatCollection = DEMONS[0];
          for (const elemental_ of DEMONS) {
            if (elemental_.name === name) {
              base_elemental = elemental_;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const conjuredElemental: StatCollection = { name: name, stats: {...base_elemental.stats, name: name, subName: newCr}}
          this.conjurations["Conjure Elemental"].push(conjuredElemental);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  devilMapper() {
    this.getDevils()
      .subscribe(devils => {
        devils.forEach((devil: Monster) => {
          const name = devil.name;
          const type = devil.type;
          const cr: string = devil.cr.toString();
          let base_devil: StatCollection = DEVILS[0];
          for (const devil_ of DEVILS) {
            if (devil_.name === name) {
              base_devil = devil_;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const conjuredDevil: StatCollection = { name: name, stats: {...base_devil.stats, name: name, subName: newCr}}
          this.conjurations["Infernal Calling"].push(conjuredDevil);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  draconicSpiritMapper() {
    this.getDraconicSpirits()
      .subscribe(spirits => {
        spirits.forEach((spirit: Spirit) => {
          const name: string = spirit.name;
          const type: string = spirit.type;
          let base_spirit: StatCollection = SUMMON_DRACONIC_SPIRITS_BASE[0];
          for (const draconic_type of SUMMON_DRACONIC_SPIRITS_BASE) {
            if (draconic_type.name === type) {
              base_spirit = draconic_type;
            }
          }
          const draconicSpirit: StatCollection = { name: name, stats: {...base_spirit.stats, name: name} }
          this.conjurations["Summon Draconic Spirit"].push(draconicSpirit);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }

  fiendMapper() {
    this.getFiends()
      .subscribe(fiends => {
        fiends.forEach((fiend: Spirit) => {
          const name: string = fiend.name;
          const type: string = fiend.type;
          let base_spirit: StatCollection = SUMMON_FIEND_BASE[0];
          for (const fiendish_type of SUMMON_FIEND_BASE) {
            if (fiendish_type.name === type) {
              base_spirit = fiendish_type;
            }
          }
          const summonedFiend: StatCollection = { name: name, stats: {...base_spirit.stats, name: name} }
          this.conjurations["Summon Fiend"].push(summonedFiend);
        });
        this.conjurationsSource.next(this.conjurations);
      })
  }
}
