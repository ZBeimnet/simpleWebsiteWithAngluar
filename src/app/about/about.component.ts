import { Component, OnInit } from '@angular/core';
import { Leader } from '../Domains/leader';
import { LeaderService } from '../Services/leader.service';

import { flyInOut, expand } from '../Animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .subscribe((leaders) => (this.leaders = leaders));
  }

}
