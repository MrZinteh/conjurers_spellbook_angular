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
    SummonLesserDemonsComponent
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
