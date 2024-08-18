import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { UserAuthModule } from './user-auth/user-auth.module';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TestComponent, UserAuthModule, FormsModule],
  // templateUrl: './app.component.html',
  // template: `
  // <h1>Lifecycle Example</h1>
  // <p *ngIf = "initialized">Component Initialized</p>
  // `,

// //One-way Interpolation (Binding Components Properties)
//   template: `
//   <h1>{{title1}}</h1>
//   <p>{{message}}</p>
//   <p>The result of 2 + 2 is {{2 + 2}}</p>
//   <p>The length of the message is {{message1.length}}</p>
//   `,
// //One-way PropertyBinding 
//   template: `
//   <!-- (Binding Component Properties to Element Properties) -->
//   <button [disabled]="isButtonDisabled">Click me</button>
//   <!-- (Binding Expressions to Element Properties) -->
//    <p>The result of 10 - 5 is {{10 - 5}}.</p>
//    <input [value]="getInitialValue()">
//   `,
// //Event Binding 
//   template: `
//   <button (click)="onButtonClick()">Click me</button>
//   <input (keyup)="onKeyUp($event)">
//   `,
  template: `
  <input [(ngModel)]="name" placeholder="Enter your name">
  <p>Welcome, {{name}}!</p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myAngularProject';

  name = '';





// Event Binding.
  count = 1;

  onKeyUp(event: any){
    console.log(event.target.value);
    console.log('key pressed: ',event.key);
  }

  onButtonClick(){
    console.log('Button Clicked.', this.count);
    this.count++;
  }

// (Binding Component Properties to Element Properties)
isButtonDisabled = false;
// (Binding Expressions to Element Properties)
getInitialValue(){
  return 'Initial value.'
}


// Binging Interpolation(one-way)(Binding Components Properties)
  title1 = 'Welcome to angular';
  message = 'This is example of interpolation.';

// Binging Interpolation(one-way)(Expression Evaluation)
  message1 = 'This is example of interpolation';

// one-way data binding
  status = 'pending';

// Two-way data binding
  country = 'INDIA';
  displayCountry(){
    console.log(this.country);
  }



  @Input() data:String | undefined;
  @Output()
  params!: String;
  initialized: boolean = false;
  constructor(){
    console.log('Constructor called.')
  }

  ngOnInit(): void{
    this.initialized = true;
    console.log(this.initialized);
  }
}