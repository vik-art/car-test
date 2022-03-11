import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { OwnerEntity } from 'src/app/common/interfaces';
import { ICarOwnersService } from 'src/app/services/icar-owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  car!: FormGroup;
  unSubscriber!: Subscription;
  owners: Array<OwnerEntity> = [];

  constructor(
    private api: ICarOwnersService
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  ngOnDestroy(): void {
    this.unSubscriber.unsubscribe()
  }

  initForm() {
    this.form = new FormGroup({
      aFirstName: new FormControl("", [
        Validators.required
      ]),
      aLastName: new FormControl("", [
        Validators.required
      ]),
      aMiddleName: new FormControl("", [
        Validators.required
      ]),
      aCars: new FormArray([])
    })
  }

  submit() {
    this.unSubscriber = this.api.createOwner(this.form.value).subscribe((res) => {
      this.owners.push(res)
     });
    this.form.reset()
  }
  getControls() {
    return (this.form.get("aCars") as FormArray).controls

  }
  addCar() {
    this.car = new FormGroup({
      number: new FormControl("", [Validators.required]),
      model: new FormControl("", [Validators.required]),
      mark: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required])
    });
    return (this.form.get("aCars") as FormArray).push(this.car)
   }
  removeContol(idx: number) {
    return (this.form.get("aCars") as FormArray).removeAt(idx)
   }
}
