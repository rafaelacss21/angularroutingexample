import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // catch the user id and name of the url 
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    
    // update the user id and name on the url when you click the link Load Anna 
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
