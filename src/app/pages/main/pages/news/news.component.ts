import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mpat-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    public linkURL = "https://docs.google.com/forms/d/e/1FAIpQLSfkdOtXjtu20VltfnwE4a6N3DdMkzl-IPqki3SFrjKAIm5K4Q/viewform?fbclid=IwAR3LlkG_GND0G-g5fxN2_fpMMFy8ZPG1RTUUaW1-6xJxHPjriq40tKOKDQA";
    public imgPath = "assets/image/news/Seminar20190517.jpg";
    
    constructor() { }
    ngOnInit() { }
}