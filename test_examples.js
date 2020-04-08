import ExamplePage from '../page_model/example_model';


const page = new ExamplePage();
// const page2= new ExamplePage2();

fixture `Example page tests`
    .page `https://devexpress.github.io/testcafe/example/`;
    const name = 'Ivan';
    const mycomment = 'En este textbox se tiene que escribir un comentario';
    test('My first test', async t=> {
        await t
            .typeText(page.inputName,name)
            .click(page.checkboxRemoteTesting)
            .click(page.checkboxAdvanceTraffic)
            .click(page.triedTestCafe)
            .typeText(page.comments,mycomment)
            .click(page.submit)
            .wait(2000);
    });
/*
fixture `Example page tests`
    .page2 `https://devexpress.github.io/testcafe/example/thank-you.html`;
    const name2 = 'Ivan';
    test('My first test', async t=> {
        await t.expect(page2.thankYouMessage.innerText).contains('Thank you, ' & name2);
    });
*/