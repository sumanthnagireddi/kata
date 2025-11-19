import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup
  fb = inject(FormBuilder);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  private readonly authService = inject(AuthService);
  constructor() { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: () => {
          console.log('Login success');
          this.router.navigate(['dashboard'])
          // this.activatedRoute.queryParams.subscribe(params => {
          //   console.log('Query params:', params);
          //   const returnUrl = params['returnUrl'] || '/products';

          //   this.router.navigate([returnUrl]).then(success => {
          //     console.log('Navigation success:', success);
          //   }).catch(err => {
          //     console.error('Navigation error:', err);
          //   });
          // });
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    } else {
      console.warn('Form is invalid');
    }
  }


}
