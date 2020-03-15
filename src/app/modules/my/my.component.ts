import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '@models/profile';
import { MyService } from '@services/my';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss']
})
export class MyComponent implements OnInit {
  profile$: Observable<Profile>;
  orderItems: {title: string, icon: string}[] = [];
  toolsItems: {title: string, icon: string}[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private myService: MyService
  ) { }

  ngOnInit(): void {
    this.orderItems = this.myService.getOrderItemsData();
    this.toolsItems = this.myService.getToolsItemsData();
    this.profile$ = this.myService.getProfileData();
  }

  // 展示个人信息
  showProfile(): void {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

}
