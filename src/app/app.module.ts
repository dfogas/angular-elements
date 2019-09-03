import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrameworkPollComponent} from './framework-poll/framework-poll.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FirebaseConfig} from './firebase.config';

@NgModule({
    declarations: [
        AppComponent,
        FrameworkPollComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFirestoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [
        FrameworkPollComponent,
    ]
})
export class AppModule {
    constructor(private injector: Injector) {}

    ngDoBootstrap() {
        const frameworkPollElement = createCustomElement(FrameworkPollComponent, {injector: this.injector});
        customElements.define('framework-poll', frameworkPollElement);
    }
}
