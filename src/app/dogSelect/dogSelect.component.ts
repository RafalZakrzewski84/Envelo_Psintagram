import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';


// /** @title Select with reset option */
@Component({
    selector: 'dog-select',
    templateUrl: './dogSelect.component.html',
})
export class DogSelect implements OnInit {
    posts: any;
    breeds: string[] = []
    states: string[] = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];
    constructor(private service: PostService) { }

    ngOnInit(): void {
        this.service.getPosts()
            .subscribe(response => {
                this.posts = response;
                for (let breed in this.posts.message) {
                    if (this.posts.message[breed].length !== 0) {
                        for (let subBreed of this.posts.message[breed]) {
                            this.breeds.push(breed + '-' + subBreed)
                        }
                    } else {
                        this.breeds.push(breed)
                    }
                }
                console.log(this.breeds)
            });
    }
}
