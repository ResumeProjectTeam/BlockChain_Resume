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

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeleteResumeElementService } from './DeleteResumeElement.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-DeleteResumeElement',
	templateUrl: './DeleteResumeElement.component.html',
	styleUrls: ['./DeleteResumeElement.component.css'],
  providers: [DeleteResumeElementService]
})
export class DeleteResumeElementComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
	private errorMessage;

  
      
          certificateAssetId = new FormControl("", Validators.required);
        
  
      
          awardDetailsAssetId = new FormControl("", Validators.required);
        
  
      
          userInfoInEntAssetId = new FormControl("", Validators.required);
        
  
      
          userInfoInSchAssetId = new FormControl("", Validators.required);
        
  
      
          userId = new FormControl("", Validators.required);
        
  
      
          transactionId = new FormControl("", Validators.required);
        
  
      
          timestamp = new FormControl("", Validators.required);
        
  


  constructor(private serviceDeleteResumeElement:DeleteResumeElementService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          certificateAssetId:this.certificateAssetId,
        
    
        
          awardDetailsAssetId:this.awardDetailsAssetId,
        
    
        
          userInfoInEntAssetId:this.userInfoInEntAssetId,
        
    
        
          userInfoInSchAssetId:this.userInfoInSchAssetId,
        
    
        
          userId:this.userId,
        
    
        
          transactionId:this.transactionId,
        
    
        
          timestamp:this.timestamp
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceDeleteResumeElement.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "hansung.ac.kr.transaction.DeleteResumeElement",
      
        
          "certificateAssetId":this.certificateAssetId.value,
        
      
        
          "awardDetailsAssetId":this.awardDetailsAssetId.value,
        
      
        
          "userInfoInEntAssetId":this.userInfoInEntAssetId.value,
        
      
        
          "userInfoInSchAssetId":this.userInfoInSchAssetId.value,
        
      
        
          "userId":this.userId.value,
        
      
        
          "transactionId":this.transactionId.value,
        
      
        
          "timestamp":this.timestamp.value
        
      
    };

    this.myForm.setValue({
      
        
          "certificateAssetId":null,
        
      
        
          "awardDetailsAssetId":null,
        
      
        
          "userInfoInEntAssetId":null,
        
      
        
          "userInfoInSchAssetId":null,
        
      
        
          "userId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null
        
      
    });

    return this.serviceDeleteResumeElement.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "certificateAssetId":null,
        
      
        
          "awardDetailsAssetId":null,
        
      
        
          "userInfoInEntAssetId":null,
        
      
        
          "userInfoInSchAssetId":null,
        
      
        
          "userId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "hansung.ac.kr.transaction.DeleteResumeElement",
      
        
          
            "certificateAssetId":this.certificateAssetId.value,
          
        
    
        
          
            "awardDetailsAssetId":this.awardDetailsAssetId.value,
          
        
    
        
          
            "userInfoInEntAssetId":this.userInfoInEntAssetId.value,
          
        
    
        
          
            "userInfoInSchAssetId":this.userInfoInSchAssetId.value,
          
        
    
        
          
            "userId":this.userId.value,
          
        
    
        
          
        
    
        
          
            "timestamp":this.timestamp.value
          
        
    
    };

    return this.serviceDeleteResumeElement.updateTransaction(form.get("transactionId").value,this.Transaction)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteTransaction(): Promise<any> {

    return this.serviceDeleteResumeElement.deleteTransaction(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceDeleteResumeElement.getTransaction(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "certificateAssetId":null,
          
        
          
            "awardDetailsAssetId":null,
          
        
          
            "userInfoInEntAssetId":null,
          
        
          
            "userInfoInSchAssetId":null,
          
        
          
            "userId":null,
          
        
          
            "transactionId":null,
          
        
          
            "timestamp":null 
          
        
      };



      
        if(result.certificateAssetId){
          
            formObject.certificateAssetId = result.certificateAssetId;
          
        }else{
          formObject.certificateAssetId = null;
        }
      
        if(result.awardDetailsAssetId){
          
            formObject.awardDetailsAssetId = result.awardDetailsAssetId;
          
        }else{
          formObject.awardDetailsAssetId = null;
        }
      
        if(result.userInfoInEntAssetId){
          
            formObject.userInfoInEntAssetId = result.userInfoInEntAssetId;
          
        }else{
          formObject.userInfoInEntAssetId = null;
        }
      
        if(result.userInfoInSchAssetId){
          
            formObject.userInfoInSchAssetId = result.userInfoInSchAssetId;
          
        }else{
          formObject.userInfoInSchAssetId = null;
        }
      
        if(result.userId){
          
            formObject.userId = result.userId;
          
        }else{
          formObject.userId = null;
        }
      
        if(result.transactionId){
          
            formObject.transactionId = result.transactionId;
          
        }else{
          formObject.transactionId = null;
        }
      
        if(result.timestamp){
          
            formObject.timestamp = result.timestamp;
          
        }else{
          formObject.timestamp = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "certificateAssetId":null,
        
      
        
          "awardDetailsAssetId":null,
        
      
        
          "userInfoInEntAssetId":null,
        
      
        
          "userInfoInSchAssetId":null,
        
      
        
          "userId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
  }

}

