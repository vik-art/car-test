import { Component, Input, OnInit } from '@angular/core';
import { OwnerEntity } from 'src/app/common/interfaces';
import { ICarOwnersService } from 'src/app/services/icar-owners.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  @Input() owners!: OwnerEntity[];

  constructor(
   private http: ICarOwnersService
  ) { }

  ngOnInit(): void {
  }

  showOwnersList() {
    return this.http.getAll().subscribe((res) => {
      console.log(res)
    })
  }

}
