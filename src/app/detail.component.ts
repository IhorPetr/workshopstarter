import {Component,Input} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector:'hero-detail',
    templateUrl:'./detail.component.html'
})
export class HeroCompont
{
   @Input() selectedHero:Hero;
}