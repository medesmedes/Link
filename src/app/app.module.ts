import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {environment} from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardContainerComponent} from './card-page/card-container/card-container.component';
import {CardBodyComponent} from './card-page/card-container/card-body/card-body.component';
import {CardFooterComponent} from './card-page/card-container/card-footer/card-footer.component';
import {CardHeaderComponent} from './card-page/card-container/card-header/card-header.component';
import {CommentDialogComponent} from './comment-dialog/comment-dialog.component';
import {SnackBarCommentComponent} from './card-page/card-container/card-footer/card-footer.component';
import {SnackBarLinkComponent} from './link-saver/link-saver.component';
import {SafeUrlPipe} from './safe-url.pipe';
import {LinkSaverComponent} from './link-saver/link-saver.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './navbar/navbar.component';
import {CardPageComponent} from './card-page/card-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import Microlink from '@microlink/angular';


// FortAwesome Icons
import {faTimes, faCommentAlt, faHeart} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faCommentAlt as faOutlineCommentAlt, faHeart as faOutlineHeart} from '@fortawesome/free-regular-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    SafeUrlPipe,
    LinkSaverComponent,
    CommentDialogComponent,
    SnackBarCommentComponent,
    SnackBarLinkComponent,
    NavbarComponent,
    CardPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FontAwesomeModule,
    Microlink.Module,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  entryComponents: [CommentDialogComponent, SnackBarCommentComponent, SnackBarLinkComponent],
  // Bad practice with the Schema, but MicroLink no longer supports Angular and until I find an alternative and implement it, this will stay
  schemas: [ NO_ERRORS_SCHEMA ]

})

export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTimes, faCommentAlt, faOutlineCommentAlt, faOutlineHeart, faHeart, faGithubAlt, faEnvelope);
  }
}
