import {Selector, t} from 'testcafe';

export default class ExamplePage{
    constructor(){
        this.inputName = Selector('#developer-name');
        this.checkboxRemoteTesting = Selector('input').withAttribute('name','remote');
        this.checkboxAdvanceTraffic = Selector('input').withAttribute('name','analysis');
        //Todo:
        //clic1 'i have tried testcafe' button
        this.triedTestCafe =Selector('input[name= tried-test-cafe]');
        this.comments = Selector('#comments');
        this.submit = Selector('#submit-button');
    }
}

// export default class ExamplePage2{
    // constructor(){
        // this.thankYouMessage = Selector ('#article-header');
    // }
// }