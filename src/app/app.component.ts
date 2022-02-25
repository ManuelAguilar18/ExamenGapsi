import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gapsi';

  data: object = {};

  constructor(private router: Router, private route: ActivatedRoute) {
	this.data = this.route.snapshot.data;
	console.log(this.data);
  }


  goToShop(){
    this.router.navigate(['shop']);
    }
  

}

