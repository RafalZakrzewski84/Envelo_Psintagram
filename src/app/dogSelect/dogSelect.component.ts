import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';


// /** @title Select with reset option */
@Component({
    selector: 'dog-select',
    templateUrl: './dogSelect.component.html',
})
export class DogSelect implements OnInit {
    @Input() selectedBreed?: String;

    posts: any;
    breeds: string[] = []

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
            });
    }

}
