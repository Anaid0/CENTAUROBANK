import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    standalone: false
})
export class UsersComponent {
    constructor(public languageService: LanguageService) {}
}
