import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpellViewerComponent } from './spell-viewer/spell-viewer.component';
import { SmallStatblockComponent } from './small-statblock/small-statblock.component';
import { PossibleConjuresComponent } from './possible-conjures/possible-conjures.component';
import { MinionViewerComponent } from './minion-viewer/minion-viewer.component';
import { FindFamiliarComponent } from './find-familiar/find-familiar.component';
import { SummonFeyComponent } from './summon-fey/summon-fey.component';
import { SummonLesserDemonsComponent } from './summon-lesser-demons/summon-lesser-demons.component';
import { SummonShadowspawnComponent } from './summon-shadowspawn/summon-shadowspawn.component';
import { ConjureMinorElementalsComponent } from './conjure-minor-elementals/conjure-minor-elementals.component';
import { SummonAberrationComponent } from './summon-aberration/summon-aberration.component';
import { SummonConstructComponent } from './summon-construct/summon-construct.component';
import { SummonElementalComponent } from './summon-elemental/summon-elemental.component';
import { SummonGreaterDemonComponent } from './summon-greater-demon/summon-greater-demon.component';
import { ConjureElementalComponent } from './conjure-elemental/conjure-elemental.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SpellViewerComponent,
    SmallStatblockComponent,
    PossibleConjuresComponent,
    MinionViewerComponent,
    FindFamiliarComponent,
    SummonFeyComponent,
    SummonLesserDemonsComponent,
    SummonShadowspawnComponent,
    ConjureMinorElementalsComponent,
    SummonAberrationComponent,
    SummonConstructComponent,
    SummonElementalComponent,
    SummonGreaterDemonComponent,
    ConjureElementalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
