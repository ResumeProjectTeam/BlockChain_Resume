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
import { UserService } from './User.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-User',
	templateUrl: './User.component.html',
	styleUrls: ['./User.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
	private errorMessage;

  
      
          userId = new FormControl("", Validators.required);
        
  
      
          userName = new FormControl("", Validators.required);
        
  
      
          dob = new FormControl("", Validators.required);
        
  
      
          address = new FormControl("", Validators.required);
        
  
      
          phoneNumber = new FormControl("", Validators.required);
        
  
      
          email = new FormControl("", Validators.required);
        
  
      
          isPublishAsset = new FormControl("", Validators.required);
        
  
      
          isHuntingForJob = new FormControl("", Validators.required);
        
  
      
          authorizedOrg = new FormControl("", Validators.required);
        
  
      
          authorizedEnt = new FormControl("", Validators.required);
        
  
      
          authorizedSch = new FormControl("", Validators.required);
        
  


  constructor(private serviceUser:UserService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          userId:this.userId,
        
    
        
          userName:this.userName,
        
    
        
          dob:this.dob,
        
    
        
          address:this.address,
        
    
        
          phoneNumber:this.phoneNumber,
        
    
        
          email:this.email,
        
    
        
          isPublishAsset:this.isPublishAsset,
        
    
        
          isHuntingForJob:this.isHuntingForJob,
        
    
        
          authorizedOrg:this.authorizedOrg,
        
    
        
          authorizedEnt:this.authorizedEnt,
        
    
        
          authorizedSch:this.authorizedSch
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceUser.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
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
   * @param {String} name - the name of the participant field to update
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
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "hansung.ac.kr.participants.User",
      
        
          "userId":this.userId.value,
        
      
        
          "userName":this.userName.value,
        
      
        
          "dob":this.dob.value,
        
      
        
          "address":this.address.value,
        
      
        
          "phoneNumber":this.phoneNumber.value,
        
      
        
          "email":this.email.value,
        
      
        
          "isPublishAsset":this.isPublishAsset.value,
        
      
        
          "isHuntingForJob":this.isHuntingForJob.value,
        
      
        
          "authorizedOrg":this.authorizedOrg.value,
        
      
        
          "authorizedEnt":this.authorizedEnt.value,
        
      
        
          "authorizedSch":this.authorizedSch.value
        
      
    };

    this.myForm.setValue({
      
        
          "userId":null,
        
      
        
          "userName":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "email":null,
        
      
        
          "isPublishAsset":null,
        
      
        
          "isHuntingForJob":null,
        
      
        
          "authorizedOrg":null,
        
      
        
          "authorizedEnt":null,
        
      
        
          "authorizedSch":null
        
      
    });

    return this.serviceUser.addParticipant(this.participant)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "userId":null,
        
      
        
          "userName":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "email":null,
        
      
        
          "isPublishAsset":null,
        
      
        
          "isHuntingForJob":null,
        
      
        
          "authorizedOrg":null,
        
      
        
          "authorizedEnt":null,
        
      
        
          "authorizedSch":null 
        
      
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


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: "hansung.ac.kr.participants.User",
      
        
          
        
    
        
          
            "userName":this.userName.value,
          
        
    
        
          
            "dob":this.dob.value,
          
        
    
        
          
            "address":this.address.value,
          
        
    
        
          
            "phoneNumber":this.phoneNumber.value,
          
        
    
        
          
            "email":this.email.value,
          
        
    
        
          
            "isPublishAsset":this.isPublishAsset.value,
          
        
    
        
          
            "isHuntingForJob":this.isHuntingForJob.value,
          
        
    
        
          
            "authorizedOrg":this.authorizedOrg.value,
          
        
    
        
          
            "authorizedEnt":this.authorizedEnt.value,
          
        
    
        
          
            "authorizedSch":this.authorizedSch.value
          
        
    
    };

    return this.serviceUser.updateParticipant(form.get("userId").value,this.participant)
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


  deleteParticipant(): Promise<any> {

    return this.serviceUser.deleteParticipant(this.currentId)
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

    return this.serviceUser.getparticipant(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "userId":null,
          
        
          
            "userName":null,
          
        
          
            "dob":null,
          
        
          
            "address":null,
          
        
          
            "phoneNumber":null,
          
        
          
            "email":null,
          
        
          
            "isPublishAsset":null,
          
        
          
            "isHuntingForJob":null,
          
        
          
            "authorizedOrg":null,
          
        
          
            "authorizedEnt":null,
          
        
          
            "authorizedSch":null 
          
        
      };



      
        if(result.userId){
          
            formObject.userId = result.userId;
          
        }else{
          formObject.userId = null;
        }
      
        if(result.userName){
          
            formObject.userName = result.userName;
          
        }else{
          formObject.userName = null;
        }
      
        if(result.dob){
          
            formObject.dob = result.dob;
          
        }else{
          formObject.dob = null;
        }
      
        if(result.address){
          
            formObject.address = result.address;
          
        }else{
          formObject.address = null;
        }
      
        if(result.phoneNumber){
          
            formObject.phoneNumber = result.phoneNumber;
          
        }else{
          formObject.phoneNumber = null;
        }
      
        if(result.email){
          
            formObject.email = result.email;
          
        }else{
          formObject.email = null;
        }
      
        if(result.isPublishAsset){
          
            formObject.isPublishAsset = result.isPublishAsset;
          
        }else{
          formObject.isPublishAsset = null;
        }
      
        if(result.isHuntingForJob){
          
            formObject.isHuntingForJob = result.isHuntingForJob;
          
        }else{
          formObject.isHuntingForJob = null;
        }
      
        if(result.authorizedOrg){
          
            formObject.authorizedOrg = result.authorizedOrg;
          
        }else{
          formObject.authorizedOrg = null;
        }
      
        if(result.authorizedEnt){
          
            formObject.authorizedEnt = result.authorizedEnt;
          
        }else{
          formObject.authorizedEnt = null;
        }
      
        if(result.authorizedSch){
          
            formObject.authorizedSch = result.authorizedSch;
          
        }else{
          formObject.authorizedSch = null;
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
      
        
          "userId":null,
        
      
        
          "userName":null,
        
      
        
          "dob":null,
        
      
        
          "address":null,
        
      
        
          "phoneNumber":null,
        
      
        
          "email":null,
        
      
        
          "isPublishAsset":null,
        
      
        
          "isHuntingForJob":null,
        
      
        
          "authorizedOrg":null,
        
      
        
          "authorizedEnt":null,
        
      
        
          "authorizedSch":null 
        
      
      });
  }

}
