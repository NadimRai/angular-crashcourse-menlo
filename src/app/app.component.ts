import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>
  	Hello {{name}}
  	</h1>
  	<h3> Your email add {{ email }}
  	</h3>
  	<p> Address: {{address.street}} {{ address.city}}, {{ address.state}} </p>
  	`
})
export class AppComponent  { 
	name = 'John Doe';
	email = "johnDoe@example.com";
	address = {
		street: '12 Main Street',
		city: 'Boston',
		state: 'MA'
	}
 }
