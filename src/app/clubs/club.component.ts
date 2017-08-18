import { Component } from '@angular/core';
import { Club } from './Club';
import { ClubService } from './club.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Component({
    selector: 'club-list',
    templateUrl: 'app/clubs/club.component.html',
    providers: [ClubService]
})


export class ClubListComponent {
    clubList : Club[];
    constructor(private clubService : ClubService) {}
    ngOnInit(): void {
        this.clubService.getClubsList()
        .subscribe(clubsList => this.clubList = clubsList);
    }
}