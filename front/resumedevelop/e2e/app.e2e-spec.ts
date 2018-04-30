/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for resumedevelop', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be resumedevelop', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('resumedevelop');
    })
  });

  it('network-name should be resumedevelop@0.0.2-deploy.39',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('resumedevelop@0.0.2-deploy.39.bna');
    });
  });

  it('navbar-brand should be resumedevelop',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('resumedevelop');
    });
  });

  
    it('ResumeInfoUser component should be loadable',() => {
      page.navigateTo('/ResumeInfoUser');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ResumeInfoUser');
      });
    });

    it('ResumeInfoUser table should have 13 columns',() => {
      page.navigateTo('/ResumeInfoUser');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });
  
    it('Certificate component should be loadable',() => {
      page.navigateTo('/Certificate');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Certificate');
      });
    });

    it('Certificate table should have 12 columns',() => {
      page.navigateTo('/Certificate');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('AwardDetails component should be loadable',() => {
      page.navigateTo('/AwardDetails');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AwardDetails');
      });
    });

    it('AwardDetails table should have 12 columns',() => {
      page.navigateTo('/AwardDetails');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('UserInfoInEnt component should be loadable',() => {
      page.navigateTo('/UserInfoInEnt');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UserInfoInEnt');
      });
    });

    it('UserInfoInEnt table should have 12 columns',() => {
      page.navigateTo('/UserInfoInEnt');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('UserInfoInSch component should be loadable',() => {
      page.navigateTo('/UserInfoInSch');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UserInfoInSch');
      });
    });

    it('UserInfoInSch table should have 12 columns',() => {
      page.navigateTo('/UserInfoInSch');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('User component should be loadable',() => {
      page.navigateTo('/User');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('User');
      });
    });

    it('User table should have 12 columns',() => {
      page.navigateTo('/User');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('Organization component should be loadable',() => {
      page.navigateTo('/Organization');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Organization');
      });
    });

    it('Organization table should have 8 columns',() => {
      page.navigateTo('/Organization');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });
  
    it('Enterprise component should be loadable',() => {
      page.navigateTo('/Enterprise');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Enterprise');
      });
    });

    it('Enterprise table should have 11 columns',() => {
      page.navigateTo('/Enterprise');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });
  
    it('School component should be loadable',() => {
      page.navigateTo('/School');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('School');
      });
    });

    it('School table should have 7 columns',() => {
      page.navigateTo('/School');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('AddRequestUser component should be loadable',() => {
      page.navigateTo('/AddRequestUser');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AddRequestUser');
      });
    });
  
    it('RevokeRequestUser component should be loadable',() => {
      page.navigateTo('/RevokeRequestUser');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RevokeRequestUser');
      });
    });
  
    it('AddAuthorizedOrg component should be loadable',() => {
      page.navigateTo('/AddAuthorizedOrg');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AddAuthorizedOrg');
      });
    });
  
    it('RevokeAuthorizedOrg component should be loadable',() => {
      page.navigateTo('/RevokeAuthorizedOrg');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RevokeAuthorizedOrg');
      });
    });
  
    it('AddAuthorizedEnt component should be loadable',() => {
      page.navigateTo('/AddAuthorizedEnt');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AddAuthorizedEnt');
      });
    });
  
    it('RevokeAuthorizedEnt component should be loadable',() => {
      page.navigateTo('/RevokeAuthorizedEnt');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RevokeAuthorizedEnt');
      });
    });
  
    it('AddAuthorizedSch component should be loadable',() => {
      page.navigateTo('/AddAuthorizedSch');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('AddAuthorizedSch');
      });
    });
  
    it('RevokeAuthorizedSch component should be loadable',() => {
      page.navigateTo('/RevokeAuthorizedSch');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('RevokeAuthorizedSch');
      });
    });
  
    it('CreateResumeInfoUser component should be loadable',() => {
      page.navigateTo('/CreateResumeInfoUser');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateResumeInfoUser');
      });
    });
  
    it('CreateResumeElement component should be loadable',() => {
      page.navigateTo('/CreateResumeElement');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CreateResumeElement');
      });
    });
  
    it('UpdateResumeInfoUser component should be loadable',() => {
      page.navigateTo('/UpdateResumeInfoUser');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('UpdateResumeInfoUser');
      });
    });
  
    it('DeleteResumeElement component should be loadable',() => {
      page.navigateTo('/DeleteResumeElement');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('DeleteResumeElement');
      });
    });
  
    it('selectResumeInfoUser component should be loadable',() => {
      page.navigateTo('/selectResumeInfoUser');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectResumeInfoUser');
      });
    });
  
    it('selectMyCertificate component should be loadable',() => {
      page.navigateTo('/selectMyCertificate');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectMyCertificate');
      });
    });
  
    it('selectMyAwardDetails component should be loadable',() => {
      page.navigateTo('/selectMyAwardDetails');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectMyAwardDetails');
      });
    });
  
    it('selectMyUserInfoInEnt component should be loadable',() => {
      page.navigateTo('/selectMyUserInfoInEnt');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectMyUserInfoInEnt');
      });
    });
  
    it('selectMyUserInfoInSch component should be loadable',() => {
      page.navigateTo('/selectMyUserInfoInSch');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectMyUserInfoInSch');
      });
    });
  
    it('selectUserByCertificateName component should be loadable',() => {
      page.navigateTo('/selectUserByCertificateName');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('selectUserByCertificateName');
      });
    });
  

});