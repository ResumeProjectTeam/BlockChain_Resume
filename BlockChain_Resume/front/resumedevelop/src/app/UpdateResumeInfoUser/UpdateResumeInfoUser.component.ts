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
import { UpdateResumeInfoUserService } from './UpdateResumeInfoUser.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-UpdateResumeInfoUser',
	templateUrl: './UpdateResumeInfoUser.component.html',
	styleUrls: ['./UpdateResumeInfoUser.component.css'],
  providers: [UpdateResumeInfoUserService]
})
export class UpdateResumeInfoUserComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
	private errorMessage;

  
      
          dob = new FormControl("", Validators.required);
        
  
      
          supportField = new FormControl("", Validators.required);
        
  
      
          salaryRequirement = new FormControl("", Validators.required);
        
  
      
          majorActivities = new FormControl("", Validators.required);
        
  
      
          socialExperience = new FormControl("", Validators.required);
        
  
      
          skillsAndCapabilities = new FormControl("", Validators.required);
        
  
      
          certificate = new FormControl("", Validators.required);
        
  
      
          awardDetails = new FormControl("", Validators.required);
        
  
      
          userInfoInEnt = new FormControl("", Validators.required);
        
  
      
          userInfoInSch = new FormControl("", Validators.required);
        
  
      
          publicOnOff = new FormControl("", Validators.required);
        
  
      
          userId = new FormControl("", Validators.required);
        
  
      
          transactionId = new FormControl("", Validators.required);
        
  
      
          timestamp = new FormControl("", Validators.required);
        
  


  constructor(private serviceUpdateResumeInfoUser:UpdateResumeInfoUserService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          dob:this.dob,
        
    
        
          supportField:this.supportField,
        
    
        
          salaryRequirement:this.salaryRequirement,
        
    
        
          majorActivities:this.majorActivities,
        
    
        
          socialExperience:this.socialExperience,
        
    
        
          skillsAndCapabilities:this.skillsAndCapabilities,
        
    
        
          certificate:this.certificate,
        
    
        
          awardDetails:this.awardDetails,
        
    
        
          userInfoInEnt:this.userInfoInEnt,
        
    
        
          userInfoInSch:this.userInfoInSch,
        
    
        
          publicOnOff:this.publicOnOff,
        
    
        
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
    return this.serviceUpdateResumeInfoUser.getAll()
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
      $class: "hansung.ac.kr.transaction.UpdateResumeInfoUser",
      
        
          "dob":this.dob.value,
        
      
        
          "supportField":this.supportField.value,
        
      
        
          "salaryRequirement":this.salaryRequirement.value,
        
      
        
          "majorActivities":this.majorActivities.value,
        
      
        
          "socialExperience":this.socialExperience.value,
        
      
        
          "skillsAndCapabilities":this.skillsAndCapabilities.value,
        
      
        
          "certificate":this.certificate.value,
        
      
        
          "awardDetails":this.awardDetails.value,
        
      
        
          "userInfoInEnt":this.userInfoInEnt.value,
        
      
        
          "userInfoInSch":this.userInfoInSch.value,
        
      
        
          "publicOnOff":this.publicOnOff.value,
        
      
        
          "userId":this.userId.value,
        
      
        
          "transactionId":this.transactionId.value,
        
      
        
          "timestamp":this.timestamp.value
        
      
    };

    this.myForm.setValue({
      
        
          "dob":null,
        
      
        
          "supportField":null,
        
      
        
          "salaryRequirement":null,
        
      
        
          "majorActivities":null,
        
      
        
          "socialExperience":null,
        
      
        
          "skillsAndCapabilities":null,
        
      
        
          "certificate":null,
        
      
        
          "awardDetails":null,
        
      
        
          "userInfoInEnt":null,
        
      
        
          "userInfoInSch":null,
        
      
        
          "publicOnOff":null,
        
      
        
          "userId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null
        
      
    });

    return this.serviceUpdateResumeInfoUser.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "dob":null,
        
      
        
          "supportField":null,
        
      
        
          "salaryRequirement":null,
        
      
        
          "majorActivities":null,
        
      
        
          "socialExperience":null,
        
      
        
          "skillsAndCapabilities":null,
        
      
        
          "certificate":null,
        
      
        
          "awardDetails":null,
        
      
        
          "userInfoInEnt":null,
        
      
        
          "userInfoInSch":null,
        
      
        
          "publicOnOff":null,
        
      
        
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
      $class: "hansung.ac.kr.transaction.UpdateResumeInfoUser",
      
        
          
            "dob":this.dob.value,
          
        
    
        
          
            "supportField":this.supportField.value,
          
        
    
        
          
            "salaryRequirement":this.salaryRequirement.value,
          
        
    
        
          
            "majorActivities":this.majorActivities.value,
          
        
    
        
          
            "socialExperience":this.socialExperience.value,
          
        
    
        
          
            "skillsAndCapabilities":this.skillsAndCapabilities.value,
          
        
    
        
          
            "certificate":this.certificate.value,
          
        
    
        
          
            "awardDetails":this.awardDetails.value,
          
        
    
        
          
            "userInfoInEnt":this.userInfoInEnt.value,
          
        
    
        
          
            "userInfoInSch":this.userInfoInSch.value,
          
        
    
        
          
            "publicOnOff":this.publicOnOff.value,
          
        
    
        
          
            "userId":this.userId.value,
          
        
    
        
          
        
    
        
          
            "timestamp":this.timestamp.value
          
        
    
    };

    return this.serviceUpdateResumeInfoUser.updateTransaction(form.get("transactionId").value,this.Transaction)
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

    return this.serviceUpdateResumeInfoUser.deleteTransaction(this.currentId)
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

    return this.serviceUpdateResumeInfoUser.getTransaction(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "dob":null,
          
        
          
            "supportField":null,
          
        
          
            "salaryRequirement":null,
          
        
          
            "majorActivities":null,
          
        
          
            "socialExperience":null,
          
        
          
            "skillsAndCapabilities":null,
          
        
          
            "certificate":null,
          
        
          
            "awardDetails":null,
          
        
          
            "userInfoInEnt":null,
          
        
          
            "userInfoInSch":null,
          
        
          
            "publicOnOff":null,
          
        
          
            "userId":null,
          
        
          
            "transactionId":null,
          
        
          
            "timestamp":null 
          
        
      };



      
        if(result.dob){
          
            formObject.dob = result.dob;
          
        }else{
          formObject.dob = null;
        }
      
        if(result.supportField){
          
            formObject.supportField = result.supportField;
          
        }else{
          formObject.supportField = null;
        }
      
        if(result.salaryRequirement){
          
            formObject.salaryRequirement = result.salaryRequirement;
          
        }else{
          formObject.salaryRequirement = null;
        }
      
        if(result.majorActivities){
          
            formObject.majorActivities = result.majorActivities;
          
        }else{
          formObject.majorActivities = null;
        }
      
        if(result.socialExperience){
          
            formObject.socialExperience = result.socialExperience;
          
        }else{
          formObject.socialExperience = null;
        }
      
        if(result.skillsAndCapabilities){
          
            formObject.skillsAndCapabilities = result.skillsAndCapabilities;
          
        }else{
          formObject.skillsAndCapabilities = null;
        }
      
        if(result.certificate){
          
            formObject.certificate = result.certificate;
          
        }else{
          formObject.certificate = null;
        }
      
        if(result.awardDetails){
          
            formObject.awardDetails = result.awardDetails;
          
        }else{
          formObject.awardDetails = null;
        }
      
        if(result.userInfoInEnt){
          
            formObject.userInfoInEnt = result.userInfoInEnt;
          
        }else{
          formObject.userInfoInEnt = null;
        }
      
        if(result.userInfoInSch){
          
            formObject.userInfoInSch = result.userInfoInSch;
          
        }else{
          formObject.userInfoInSch = null;
        }
      
        if(result.publicOnOff){
          
            formObject.publicOnOff = result.publicOnOff;
          
        }else{
          formObject.publicOnOff = null;
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
      
        
          "dob":null,
        
      
        
          "supportField":null,
        
      
        
          "salaryRequirement":null,
        
      
        
          "majorActivities":null,
        
      
        
          "socialExperience":null,
        
      
        
          "skillsAndCapabilities":null,
        
      
        
          "certificate":null,
        
      
        
          "awardDetails":null,
        
      
        
          "userInfoInEnt":null,
        
      
        
          "userInfoInSch":null,
        
      
        
          "publicOnOff":null,
        
      
        
          "userId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
  }

}

