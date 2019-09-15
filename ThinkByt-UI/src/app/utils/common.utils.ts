import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CommonUtil {
  constructor(private snackBar: MatSnackBar) {}

  public openSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['message-container']
    });
  }

  public openErrorSnackBar(message) {
    this.snackBar.open(message, '', {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['error-container']
    });
  }
}
