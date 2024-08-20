import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup(): void {
    this.authService.signup(this.username, this.password).subscribe(() => {
      this.router.navigate(['/login']);
    }, error => {
      console.error('Signup failed', error);
    });
  }

}
