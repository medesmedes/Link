import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import {AngularFireAuthModule} from '@angular/fire/auth'
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CardComponent } from './card/card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import {SnackBarCommentComponent} from './card-footer/card-footer.component';
import {SnackBarLinkComponent} from './link-adder/link-adder.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { LinkAdderComponent } from './link-adder/link-adder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import{MatIconModule} from '@angular/material/icon';
import Microlink from '@microlink/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { AboutContainerComponent } from './about-container/about-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent,
    SafeUrlPipe,
    LinkAdderComponent,
    CommentDialogComponent,
    SnackBarCommentComponent,
    SnackBarLinkComponent,
    NavbarComponent,
    CardContainerComponent,
    AboutContainerComponent
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
  entryComponents: [CommentDialogComponent, SnackBarCommentComponent, SnackBarLinkComponent]
})
export class AppModule { }
