import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Spirit } from './spirit';
import { Observable, Subject } from 'rxjs';
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
  DEMONS} from './conjurations';

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
  private minionsUrl = '/api/minions';

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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private selectedSpellSource = new Subject<string>();

  selectedSpell$ = this.selectedSpellSource.asObservable();

  selectSpell(spell: string) {
    this.selectedSpellSource.next(spell);
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

  // addMinion(minion: Minion): Observable<Minion> {
  //   return this.http.post<Minion>(this.minionsUrl, minion, this.minionsUrl);
  // }

  feySpiritMapper() {
    this.getFeySpirits()
      .subscribe(feySpirits => {
        feySpirits.forEach((spirit: { name: string; type: string}) => {
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
        shadowSpirits.forEach((spirit: { name: string; type: string}) => {
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
        aberrations.forEach((aberration: { name: string; type: string}) => {
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
        constructs.forEach((construct: { name: string; type: string}) => {
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
}
