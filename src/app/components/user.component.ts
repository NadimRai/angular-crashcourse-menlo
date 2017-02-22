import { Component } from '@angular/core';

@Component({
   
    selector: 'user',
    template: `
    	<h2>{{ name }} </h2>
    	<h3>{{ email }} </h3>
    	<p> {{ address.street}} {{ address.city }}, {{address.state}} </p>
    	<button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show Hobbies" }} </button>
    	<div *ngIf="showHobbies">
    	<h3>Hobbies</h3>
	    	<ul>
	    		<li *ngFor="let hobby of hobbies">
	    			{{hobby}}
	    		</li>
	    	</ul>
	    	<form (submit)="addHobby(hobby.value)">
            <label>Add Hobby: </label><br />
            <input type="text" #hobby /><br />
        </form>
	    </div>
	    <hr>
    	<form>
    		<label>Name: </label><br>
    			<input type="text" name="name" [(ngModel)]="name"><br>
    		<label> Email: </label><br>
    			<input type="email" name="email" [(ngModel)]="email">

    	</form>
    `
})
export class UserComponent  { 
  	name: string; 
  	email: string;
  	address: address;
	hobbies: string[];
	showHobbies: boolean;

	constructor(){
		this.name = 'John Doe'; 
    	this.email = 'john@gmail.com',
    	this.address = {
	        street: '12 Main st',
	        city: 'Boston', 
	        state: 'MA'
		}
		this.hobbies = ['Music', 'Movies', 'Sports'];
		this.showHobbies = false;
	}
	toggleHobbies(){
	 if(this.showHobbies == true){
	 	this.showHobbies = false;
	 	}else {
	 	 this.showHobbies = true;
	 	}
	}

	addHobby(hobby){
		this.hobbies.push(hobby);
	}
}

interface address {
    street: string;
    city: string;
    state: string;
}	