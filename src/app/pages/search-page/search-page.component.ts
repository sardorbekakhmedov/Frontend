import {Component, inject} from '@angular/core';
import {ProfileCardComponent} from '../../common-ui/profile-card/profile-card.component';
import {Profile} from '../../data/Interfaces/profile.interface';
import {ProfileService} from '../../data/services/profile.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCardComponent,
    JsonPipe
  ],
  standalone: true,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profiles: Profile[] = [];
  profileService: ProfileService = inject(ProfileService);

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe( (val => {
        this.profiles = val
      }));
  }
}
