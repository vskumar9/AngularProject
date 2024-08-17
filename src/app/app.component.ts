import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from "./test/test.component";
import { UserAuthModule } from './user-auth/user-auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TestComponent, UserAuthModule],
  templateUrl: './app.component.html',
  // template: `
  // <h1>Lifecycle Example</h1>
  // <p *ngIf = "initialized">Component Initialized</p>
  // `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myAngularProject';
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