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
  SUMMON_FIEND_BASE } from './conjurations';

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
    "Summon Abberation": [],
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
          let base_fiend: StatCollection = SUMMON_FIEND_BASE[0];
          for (const fiend_type of SUMMON_FIEND_BASE) {
            if (fiend_type.name === type) {
              base_fiend = fiend_type;
            }
          }
          const crMap: {[key: string]: string} = {
            "0.125": "1/8",
            "0.25": "1/4",
            "0.5": "1/2"
          }
          const newCr = (cr in crMap) ? crMap[cr] : cr;
          const lesserDemon: StatCollection = { name: name, stats: {...base_fiend.stats, name: name, subName: newCr}}
          this.conjurations["Summon Lesser Demons"].push(lesserDemon);
        });
        this.conjurationsSource.next(this.conjurations);
      });
  }
}
