import { MyService } from '@services/my';
import { Component, OnInit } from '@angular/core';
import { Profile } from '@models/profile';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  detail$: Observable<Profile>;

  constructor(
    private myService: MyService
  ) { }

  ngOnInit(): void {
    this.detail$ = this.myService.getProfileData();
  }

}
