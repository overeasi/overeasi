import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { addIntentPage } from './addintent.page';
import { addReportPage } from './addreport.page';
import { listIntentPage } from './listintent.page';
import { listReportPage } from './listreport.page';
import { welcomeModalPage } from './welcomemodal.page';
/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentials2 = { username: 'admin@foo.com', password: 'changeme', role: 'admin' };

fixture('meteor-app lication-template-react localhost test with default db')
    .page('http://localhost:3000');

test('Test the Welcome Modal page', async (testController) => {
  await welcomeModalPage.isDisplayed(testController);
  await navBar.leaveWelcomeModalPage(testController);
});

test('Test that landing page shows up', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test the List Report page', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoListReportPage(testController);
  await listReportPage.isDisplayed(testController);
  await listReportPage.hasTable(testController);
});

test('Test the List Intent page', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoListIntentPage(testController);
  await listIntentPage.isDisplayed(testController);
  await listIntentPage.hasTable(testController);
});

test('Test the Add Report page', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoAddReportPage(testController);
  await addReportPage.isDisplayed(testController);
});

test('Test the Add Intent page', async (testController) => {
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoSigninPage(testController);
  await signinPage.signin(testController, credentials2.username, credentials2.password);
  await navBar.leaveWelcomeModalPage(testController);
  await navBar.gotoAddIntentPage(testController);
  await addIntentPage.isDisplayed(testController);
});
