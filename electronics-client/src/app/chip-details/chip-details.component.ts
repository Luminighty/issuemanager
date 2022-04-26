import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { UserService } from '../core/user.service';
import { Chip } from '../domain/chip';
import { User } from '../domain/user';

@Component({
  selector: 'app-chip-details',
  templateUrl: './chip-details.component.html',
  styleUrls: ['./chip-details.component.scss']
})
export class ChipDetailsComponent implements OnInit {

  public creator?: Observable<User>;

  constructor(
    public dialogRef: MatDialogRef<ChipDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public chip: Chip,
    public auth: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCreator();
  }

  getCreator(): void {
    if (this.chip.creator)
      this.creator = this.userService.getUser(this.chip.creator)
  }

  openEditor() {
    this.dialogRef.close();
    this.router.navigate(["/chip/editor", this.chip._id]);
  }

}
