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


'use strict';

var CORE_NAMESPACE_PREFIX = "hansung.ac.kr";
var PARTICIPANTS = "participants";
var ASSETS = "assets";
var TRANSACTION = "transaction";
var RESUME = "ResumeInfoUser";

var NAMESPACE_PARTICIPANTS = CORE_NAMESPACE_PREFIX + "." + PARTICIPANTS;
var NAMESPACE_USER = CORE_NAMESPACE_PREFIX + "." + PARTICIPANTS + "." + "User";
var NAMESPACE_ORG = CORE_NAMESPACE_PREFIX + "."  + PARTICIPANTS + "." + "Organization";
var NAMESPACE_ENT = CORE_NAMESPACE_PREFIX + "."  + PARTICIPANTS + "." + "Enterprise";
var NAMESPACE_INS = CORE_NAMESPACE_PREFIX + "."  + PARTICIPANTS + "." + "School";

var NAMESAPCE_ASSETS = CORE_NAMESPACE_PREFIX + "." + ASSETS;
var ASSET_RESUME_INFO_USER =CORE_NAMESPACE_PREFIX + "."  + ASSETS + "." + "ResumeInfoUser";
var ASSET_CERTIFICATE =CORE_NAMESPACE_PREFIX + "."  + ASSETS + "." + "Certificate";
var ASSET_AWARD_DETAILS =CORE_NAMESPACE_PREFIX + "."  + ASSETS + "." + "AwardDetails";
var USER_INFO_BY_ENT =CORE_NAMESPACE_PREFIX + "."  + ASSETS + "." + "UserInfoInEnt";
var USER_INFO_BY_SCH =CORE_NAMESPACE_PREFIX + "."  + ASSETS+ "." + "UserInfoInSch";


var NAMESPACE_EVENT_OR_TRANSACTION = CORE_NAMESPACE_PREFIX + "." + TRANSACTION ;






function updateAsset(type, tx, registry) {

    var paramItem = null;
    var checkBoolean = null;

    switch(type) {
        case "certificate":
             paramItem = tx.certificate;

             return registry.get(paramItem.getIdentifier())
             .then(function (updateTarget) {


             if(paramItem.certificateName != null  && paramItem.certificateName != undefined) {
               updateTarget.certificateName = paramItem.certificateName;


             }

             if(paramItem.certificateScore != null && paramItem.certificateScore != undefined) {
               updateTarget.certificateScore  = paramItem.certificateScore ;

             }

             if(paramItem.issuingOrg != null && paramItem.issuingOrg != undefined) {
               updateTarget.issuingOrg = paramItem.issuingOrg;

             }

             if(paramItem.organizationName != null && paramItem.organizationName != undefined) {
               updateTarget.organizationName = paramItem.organizationName;

             }

              if(paramItem.issuingOrgName != null && paramItem.issuingOrgName != undefined) {
               updateTarget.issuingOrgName = paramItem.issuingOrgName;

             }
               
             if(paramItem.dob != null && paramItem.dob != undefined) {
               updateTarget.dob = paramItem.dob;

             }

             if(paramItem.expirationDate != null && paramItem.expirationDate != undefined) {
               updateTarget.expirationDate  = paramItem.expirationDate;

             }

             if(paramItem.transactionTime != null &&  paramItem.transactionTime != undefined) {
               updateTarget.transactionTime = paramItem.transactionTime;

             }
               
             if(paramItem.publicOnOff != null &&  paramItem.publicOnOff != undefined) {
               updateTarget.publicOnOff = paramItem.publicOnOff;
             }
               
        console.log(updateTarget);
               return registry.update(updateTarget)
             }).catch(function (error) {
       			throw new Error(error);
             });
             break;

        case "awardDetails":
 		     paramItem = tx.awardDetails;

             return registry.get(paramItem.getIdentifier())
             .then(function (updateTarget) {


             if(paramItem.contestName != null  && paramItem.contestName != undefined) {
               updateTarget.contestName = paramItem.contestName;


             }

             if(paramItem.issuingOrg != null && paramItem.issuingOrg != undefined) {
               updateTarget.issuingOrg  = paramItem.issuingOrg ;

             }

             if(paramItem.dateOfAward != null && paramItem.dateOfAward != undefined) {
               updateTarget.dateOfAward = paramItem.dateOfAward;

             }

             if(paramItem.transactionTime != null && paramItem.transactionTime != undefined) {
               updateTarget.issuingOrgName = paramItem.issuingOrgName;

             }
               
             if(paramItem.organizationName != null && paramItem.organizationName != undefined) {
               updateTarget.organizationName = paramItem.organizationName;

             }

             if(paramItem.awardGrade  != null && paramItem.awardGrade  != undefined) {
               updateTarget.dob = paramItem.dob;

             }

             if(paramItem.description  != null && paramItem.description  != undefined) {
               updateTarget.expirationDate  = paramItem.expirationDate;

             }
             if(paramItem.publicOnOff != null &&  paramItem.publicOnOff != undefined) {
               updateTarget.publicOnOff = Boolean(paramItem.publicOnOff);

             }
                console.log(updateTarget);
             return registry.update(updateTarget);
             }).catch(function (error) {
       			throw new Error(error);
             });
             break;

        case "userInfoInEnt":
 			 paramItem = tx.userInfoInEnt;

             return registry.get(paramItem.getIdentifier())
             .then(function (updateTarget) {



             if(paramItem.issuingEnt != null  && paramItem.issuingEnt != undefined) {
               updateTarget.issuingEnt = paramItem.issuingEnt;


             }
               
              if(paramItem.enterpriseName != null  && paramItem.enterpriseName != undefined) {
               updateTarget.enterpriseName = paramItem.enterpriseName;


             }
             

             if(paramItem.userPosition != null && paramItem.userPosition != undefined) {
               updateTarget.userPosition  = paramItem.userPosition ;

             }

             if(paramItem.performingTask != null && paramItem.performingTask != undefined) {
               updateTarget.performingTask = paramItem.performingTask;

             }

             if(paramItem.dateOfEmployment  != null && paramItem.dateOfEmployment  != undefined) {
               updateTarget.dateOfEmployment  = paramItem.dateOfEmployment ;

             }

             if(paramItem.retirementDate   != null && paramItem.retirementDate   != undefined) {
               updateTarget.retirementDate  = paramItem.retirementDate ;

             }

             if(paramItem.transactionTime  != null && paramItem.transactionTime  != undefined) {
               updateTarget.transactionTime  = paramItem.transactionTime;

             }
             if(paramItem.publicOnOff != null &&  paramItem.publicOnOff != undefined) {
               updateTarget.publicOnOff = Boolean(paramItem.publicOnOff);

             }
 console.log(updateTarget);
             return registry.update(updateTarget);
             }).catch(function (error) {
       			throw new Error(error);
             });
             break;

        case "userInfoInSch":
 			 paramItem = tx.userInfoInSch;

             return registry.get(paramItem.getIdentifier())
             .then(function (updateTarget) {



             if(paramItem.issuingSch != null  && paramItem.issuingSch != undefined) {
               updateTarget.issuingSch = paramItem.issuingSch;


             }

             if(paramItem.entranceDate != null && paramItem.entranceDate != undefined) {
               updateTarget.entranceDate  = paramItem.entranceDate ;

             }
               
               
             if(paramItem.schoolName != null  && paramItem.schoolName != undefined) {
               updateTarget.schoolName = paramItem.schoolName;

             }

             if(paramItem.performingTask != null && paramItem.performingTask != undefined) {
               updateTarget.performingTask = paramItem.performingTask;

             }

             if(paramItem.graduationDate   != null && paramItem.graduationDate   != undefined) {
               updateTarget.graduationDate   = paramItem.graduationDate  ;

             }

             if(paramItem.transactionTime   != null && paramItem.transactionTime   != undefined) {
               updateTarget.transactionTime  = paramItem.transactionTime ;

             }

             if(paramItem.majorField   != null && paramItem.majorField   != undefined) {
               updateTarget.majorField   = paramItem.majorField ;

             }

             if(paramItem.gradeAverage    != null && paramItem.gradeAverage    != undefined) {
               updateTarget.gradeAverage    = paramItem.gradeAverage  ;

             }
             if(paramItem.publicOnOff != null &&  paramItem.publicOnOff != undefined) {
               updateTarget.publicOnOff = Boolean(paramItem.publicOnOff);

             }
             console.log(updateTarget);
             return registry.update(updateTarget);
             }).catch(function (error) {
       			throw new Error(error);
             });
             break;


   }

}



function createAsset(type, tx, me, registry, _targetResumeAsset) {

    var checkElement = null;
    var paramItem = null;
    var tResumeAsset = null;

    switch(type) {
        case "certificate":
             tResumeAsset = _targetResumeAsset.certificateList;
             paramItem = tx.certificate;
        	 registry.exists(paramItem.getIdentifier() )
             .then(function (result) {
         return checkElement = result;
        });
             break;
        case "awardDetails":
             tResumeAsset = _targetResumeAsset.awardList;
             paramItem = tx.awardDetails;
        	 registry.exists(paramItem.getIdentifier() )
             .then(function (result) {
         return checkElement = result;
        });
             break;

        case "userInfoInEnt":
             tResumeAsset = _targetResumeAsset.userInfoInEnt;
             paramItem = tx.userInfoInEnt;
        	 registry.exists(paramItem.getIdentifier() )
             .then(function (result) {
         return checkElement = result;
        });
             break;

        case "userInfoInSch":
             tResumeAsset = _targetResumeAsset.userInfoInSch;
             paramItem = tx.userInfoInSch;
        	 registry.exists(paramItem.getIdentifier() )
             .then(function (result) {
         return checkElement = result;
        });
             break;
    }

       if(checkElement) {
            throw new Error('중복된 Id를 가진 asset이 존재합니다.');
       }
       else {

       paramItem.ownerId = me.getIdentifier();
       paramItem.parentResumeId = _targetResumeAsset.getIdentifier();
       registry.add(paramItem);
       console.log(paramItem);
         switch(type) {
           case "certificate":
       		 _targetResumeAsset.certificateList.push(paramItem);
             break;
            case "awardDetails":
       		 _targetResumeAsset.awardList.push(paramItem);
             break;
            case "userInfoInEnt":
       		 _targetResumeAsset.userInfoInEnt.push(paramItem);
             break;
            case "userInfoInSch":
       		 _targetResumeAsset.userInfoInSch.push(paramItem);
             break;
         }
       }
}



/**
 * @param {hansung.ac.kr.transaction.CreateResumeInfoUser}  txCreateResumeInfoUser  - the member to be processed
 * @transaction
 */
function CreateResumeInfoUser (txCreateResumeInfoUser) {

   var me = getCurrentParticipant();
   var allResume = null;
   var factory = getFactory();

   if(!me) {
        throw new Error('can not find Participant');
    }

   return getAssetRegistry(ASSET_RESUME_INFO_USER)
  .then(function (allResumeAssetRegistry) {
     allResume = allResumeAssetRegistry;

       var newResumeAsset = factory.newResource(NAMESAPCE_ASSETS, RESUME, "ResumeAsset#" + me.getIdentifier() );

       newResumeAsset.dob = txCreateResumeInfoUser.dob;
       newResumeAsset.supportField = txCreateResumeInfoUser.supportField;
       newResumeAsset.salaryRequirement  = txCreateResumeInfoUser.salaryRequirement ;
       newResumeAsset.majorActivities  = txCreateResumeInfoUser.majorActivities ;
       newResumeAsset.socialExperience  = txCreateResumeInfoUser.socialExperience ;
       newResumeAsset.skillsAndCapabilities  = txCreateResumeInfoUser.skillsAndCapabilities ;
       newResumeAsset.publicOnOff = Boolean(txCreateResumeInfoUser.publicOnOff);

       newResumeAsset.certificateList   = [] ;
       newResumeAsset.awardList   =  [] ;
       newResumeAsset.userInfoInEnt   =  [] ;
       newResumeAsset.userInfoInSch   =  [] ;
       
       return allResume.add(newResumeAsset);
   });
}

/**
 * @param {hansung.ac.kr.transaction.CreateResumeElement}  txCreateResumeElement  - the member to be processed
 * @transaction
 */
 function CreateResumeElement (txCreateResumeElement) {

  var me = getCurrentParticipant();

  var allResume = null;
  var _targetResumeAsset = null;

  var _certificateRegistry = null;
  var _awardDetailsRegistry = null;
  var _userInfoInEntRegistry = null;
  var _userInfoInSchRegistry = null;

  var factory = getFactory();


     if(!me) {
       throw new Error('can not find Participant');
   }

      return getAssetRegistry(ASSET_CERTIFICATE)
     .then(function (certificateRegisty) {
      _certificateRegistry = certificateRegisty;
     return getAssetRegistry(ASSET_AWARD_DETAILS)
   }).then(function (awardDetailsRegistry) {
      _awardDetailsRegistry = awardDetailsRegistry;
     return getAssetRegistry(USER_INFO_BY_ENT)
   }).then(function (userInfoInEntRegistry) {
     _userInfoInEntRegistry = userInfoInEntRegistry;
     return getAssetRegistry(USER_INFO_BY_SCH)
   }).then(function (userInfoInSchRegistry) {
     return _userInfoInSchRegistry = userInfoInSchRegistry;
   }).then(function () {
     return getAssetRegistry(ASSET_RESUME_INFO_USER);

   }).then(function (allResumeAssetRegistry) {
     allResume = allResumeAssetRegistry;
     return allResumeAssetRegistry.get("ResumeAsset#" + me.getIdentifier());
  }).then(function (targetResumeAsset) {
     _targetResumeAsset = targetResumeAsset;

    if( (txCreateResumeElement.certificate != null) && (txCreateResumeElement.certificate    != undefined) ) {

      createAsset( "certificate", txCreateResumeElement, me, _certificateRegistry, _targetResumeAsset);
       var certificateEvent = factory.newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SendEvent');
       certificateEvent.certificate = txCreateResumeElement.certificate;
       emit(certificateEvent);
    }


    if( (txCreateResumeElement.awardDetails    != null) && (txCreateResumeElement.awardDetails    != undefined) ) {


       createAsset( "awardDetails", txCreateResumeElement, me, _awardDetailsRegistry, _targetResumeAsset);
        var awardDetailsEvent = factory.newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SendEvent');
        awardDetailsEvent.awardDetails = txCreateResumeElement.awardDetails;
        emit(awardDetailsEvent);
    }


    if( (txCreateResumeElement.userInfoInEnt     != null) && (txCreateResumeElement.userInfoInEnt     != undefined))      {


       createAsset( "userInfoInEnt", txCreateResumeElement, me, _userInfoInEntRegistry, _targetResumeAsset);
        var userInfoInEntEvent = factory.newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SendEvent');
        userInfoInEntEvent.userInfoInEnt = txCreateResumeElement.userInfoInEnt;
        emit(userInfoInEntEvent);

    }


    if( (txCreateResumeElement.userInfoInSch      != null) && (txCreateResumeElement.userInfoInSch      != undefined) ) {

       createAsset( "userInfoInSch", txCreateResumeElement, me, _userInfoInSchRegistry, _targetResumeAsset);
        var userInfoInSchEvent = factory.newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SendEvent');
        userInfoInSchEvent.userInfoInSch = txCreateResumeElement.userInfoInSch;
        emit(userInfoInSchEvent);
    }

      return targetResumeAsset;
   }).then(function (targetResumeAsset) {
      console.log(targetResumeAsset);

      return allResume.update(targetResumeAsset);
   });

 }



/**
 * @param {hansung.ac.kr.transaction.UpdateResumeInfoUser}  txUpdateResumeInfoUser  - the member to be processed
 * @transaction
 */
 function UpdateResumeInfoUser(txUpdateResumeInfoUser) {

    var me = getCurrentParticipant();
    var allResume = null;
    var _targetResumeAsset = null;

    var _certificateRegistry = null;
    var _awardDetailsRegistry = null;
    var _userInfoInEntRegistry = null;
    var _userInfoInSchRegistry = null;

    if(!me) {
        throw new Error('can not find Participant');
    }

    if(txUpdateResumeInfoUser.userId == null) {
        throw new Error('tx userId == null');
    }

   return getAssetRegistry(ASSET_CERTIFICATE)
     .then(function (certificateRegisty) {
      _certificateRegistry = certificateRegisty;
     return getAssetRegistry(ASSET_AWARD_DETAILS)
   }).then(function (awardDetailsRegistry) {
      _awardDetailsRegistry = awardDetailsRegistry;
     return getAssetRegistry(USER_INFO_BY_ENT)
   }).then(function (userInfoInEntRegistry) {
     _userInfoInEntRegistry = userInfoInEntRegistry;
     return getAssetRegistry(USER_INFO_BY_SCH)
   }).then(function (userInfoInSchRegistry) {
     return _userInfoInSchRegistry = userInfoInSchRegistry;
   }).then(function () {
    return getAssetRegistry(ASSET_RESUME_INFO_USER)
   }).then(function (allResumeAssetRegistry) {
      allResume = allResumeAssetRegistry;

      return allResumeAssetRegistry.get("ResumeAsset#" + me.getIdentifier());
    }).then(function (targetResumeAsset) {

      _targetResumeAsset = targetResumeAsset;


      if(txUpdateResumeInfoUser.dob != null)
      	targetResumeAsset.dob = txUpdateResumeInfoUser.dob;


      if(txUpdateResumeInfoUser.supportField != null)
      	targetResumeAsset.supportField = txUpdateResumeInfoUser.supportField;


      if( (txUpdateResumeInfoUser.salaryRequirement   != null) && (txUpdateResumeInfoUser.salaryRequirement   != undefined) )
      	targetResumeAsset.salaryRequirement  = txUpdateResumeInfoUser.salaryRequirement;


      if( (txUpdateResumeInfoUser.majorActivities    != null) && (txUpdateResumeInfoUser.majorActivities    != undefined) )
      	targetResumeAsset.majorActivities   = txUpdateResumeInfoUser.majorActivities;


     if( (txUpdateResumeInfoUser.socialExperience    != null) && (txUpdateResumeInfoUser.socialExperience    != undefined) )
      	targetResumeAsset.socialExperience   = txUpdateResumeInfoUser.socialExperience;


     if( (txUpdateResumeInfoUser.skillsAndCapabilities    != null) && (txUpdateResumeInfoUser.skillsAndCapabilities    != undefined) )
      	targetResumeAsset.skillsAndCapabilities   = txUpdateResumeInfoUser.skillsAndCapabilities;

     if( (txUpdateResumeInfoUser.publicOnOff    != null) && (txUpdateResumeInfoUser.publicOnOff    != undefined) )
      	targetResumeAsset.publicOnOff   = Boolean(txUpdateResumeInfoUser.publicOnOff);


     if( (txUpdateResumeInfoUser.certificate != null) && (txUpdateResumeInfoUser.certificate    != undefined) ) {
       updateAsset( "certificate", txUpdateResumeInfoUser, _certificateRegistry);
     }


     if( (txUpdateResumeInfoUser.awardDetails    != null) && (txUpdateResumeInfoUser.awardDetails    != undefined) ) {
        updateAsset( "awardDetails", txUpdateResumeInfoUser, _awardDetailsRegistry);
     }


     if( (txUpdateResumeInfoUser.userInfoInEnt     != null) && (txUpdateResumeInfoUser.userInfoInEnt     != undefined))      {
        updateAsset( "userInfoInEnt", txUpdateResumeInfoUser, _userInfoInEntRegistry);
     }


     if( (txUpdateResumeInfoUser.userInfoInSch      != null) && (txUpdateResumeInfoUser.userInfoInSch      != undefined) ) {
        updateAsset( "userInfoInSch", txUpdateResumeInfoUser, _userInfoInSchRegistry);
     }

    }).then(function () {
   	   return allResume.update(_targetResumeAsset);
    });
}









/**
 * @param {hansung.ac.kr.transaction.DeleteResumeElement}  txDeleteResumeElement  - the member to be processed
 * @transaction
 */
 function DeleteResumeElement(txDeleteResumeElement) {

    var me = getCurrentParticipant();
    var allResume = null;
    var _targetResumeAsset = null;

    var _certificateRegistry = null;
    var _awardDetailsRegistry = null;
    var _userInfoInEntRegistry = null;
    var _userInfoInSchRegistry = null;

    if(!me) {
        throw new Error('can not find Participant');
    }

    if(txDeleteResumeElement.userId == null) {
        throw new Error('tx userId == null');
    }

   return getAssetRegistry(ASSET_CERTIFICATE)
     .then(function (certificateRegisty) {
      _certificateRegistry = certificateRegisty;
     return getAssetRegistry(ASSET_AWARD_DETAILS)
   }).then(function (awardDetailsRegistry) {
      _awardDetailsRegistry = awardDetailsRegistry;
     return getAssetRegistry(USER_INFO_BY_ENT)
   }).then(function (userInfoInEntRegistry) {
     _userInfoInEntRegistry = userInfoInEntRegistry;
     return getAssetRegistry(USER_INFO_BY_SCH)
   }).then(function (userInfoInSchRegistry) {
     return _userInfoInSchRegistry = userInfoInSchRegistry;
   }).then(function () {
    return getAssetRegistry(ASSET_RESUME_INFO_USER)
   }).then(function (allResumeAssetRegistry) {
      allResume = allResumeAssetRegistry;


      return allResumeAssetRegistry.get("ResumeAsset#" + me.getIdentifier());
    }).then(function (targetResumeAsset) {

      _targetResumeAsset = targetResumeAsset;

     _certificateRegistry.get(txDeleteResumeElement.certificateAssetId)
     .then(function (targetCertificate) {
       if(targetCertificate.ownerId == me.getIdentifier() ) {

         targetResumeAsset.certificateList.findIndex(function testF(element, indexf, array){
              if(element.getIdentifier() == txDeleteResumeElement.certificateAssetId) {

                _certificateRegistry.remove(targetCertificate);
                targetResumeAsset.certificateList.splice(indexf, 1);
                return element;
              }
         });
         	return allResume.update(_targetResumeAsset);
       }

     }).catch(function (error) {
      	throw new Error(error);
     })


       _awardDetailsRegistry.get(txDeleteResumeElement.awardDetailsAssetId )

       .then(function (targetAwardDetails) {
       if(targetAwardDetails.ownerId == me.getIdentifier() ) {

         targetResumeAsset.awardList.findIndex(function testF(element, indexf, array){
              if(element.getIdentifier() == txDeleteResumeElement.awardDetailsAssetId) {
                 targetResumeAsset.awardList.splice(indexf, 1);
                 _certificateRegistry.remove(targetAwardDetails);
                  return element;
              }
         });
        	return allResume.update(_targetResumeAsset);
       }

     }).catch(function (error) {
      	throw new Error(error);
     })



     _userInfoInEntRegistry.get(txDeleteResumeElement.userInfoInEntAssetId )
       .then(function (targetUserInfoInEntAssetId) {
       if(targetUserInfoInEntAssetId.ownerId == me.getIdentifier() ) {

         targetResumeAsset.userInfoInEnt.findIndex(function testF(element, indexf, array){
              if(element.getIdentifier() == txDeleteResumeElement.userInfoInEntAssetId139) {
                 targetResumeAsset.awardList.splice(indexf, 1);
                 _certificateRegistry.remove(element);
                  return element;
              }
         });
        	return allResume.update(_targetResumeAsset);
       }

     }).catch(function (error) {
      	throw new Error(error);
     })

      _userInfoInSchRegistry.get(txDeleteResumeElement.userInfoInSchAssetId )
       .then(function (targetUserInfoInSchAssetId) {
       if(targetUserInfoInSchAssetId.ownerId == me.getIdentifier() ) {

         targetResumeAsset.userInfoInSch.findIndex(function testF(element, indexf, array){
              if(element.getIdentifier() == txDeleteResumeElement.userInfoInSchAssetId) {
                 targetResumeAsset.awardList.splice(indexf, 1);
                 _certificateRegistry.remove(element);
                  return element;
              }
         });
        	return allResume.update(_targetResumeAsset);
       }

     }).catch(function (error) {
      	throw new Error(error);
     })
     console.log("2");
   }).then(function (){
     console.log("3");
   	return allResume.update(_targetResumeAsset);
   })
}







/**
 * @param {hansung.ac.kr.transaction.selectUserByCertificateName}  tx  - the member to be processed
 * @transaction
 */
function selectUserByCertificateName (tx) {
  var idList = [];

  // 선택된 결과가 많아질경우 이코드는 문제가 있음 수정필요
  query("selectCertificateByName" , {targetName: tx.certificateName })
  .then(function (certificateList) {
     certificateList.forEach(function (certificate) {
     idList.push(certificate.ownerId);
     })
  }).then(function () {
     idList.forEach(function (id) {
        query("selectUserById" , {targetId: id })
        .then(function (userList){
         console.log(userList); 
        });
     })
  });

}


/**
 * @param {hansung.ac.kr.transaction.selectResumeInfoUser}  tx  - the member to be processed
 * @transaction
 */
function selectResumeInfoUser (tx) {
  var me = getCurrentParticipant();
  query("selectResumeInfoUser" , {resumeAssetId: "ResumeAsset#" + me.getIdentifier() })
  .then(function (resume) {
  console.log(resume);
  })

}

/**
 * @param {hansung.ac.kr.transaction.selectMyCertificate}  tx  - the member to be processed
 * @transaction
 */
function selectMyCertificate (tx) {
  var me = getCurrentParticipant();
  var result = query("selectMyCertificate" , {CurrentUserId: me.getIdentifier() });
  console.log(result);
}

/**
 * @param {hansung.ac.kr.transaction.selectMyAwardDetails}  tx  - the member to be processed
 * @transaction
 */
function selectMyAwardDetails (tx) {
  var me = getCurrentParticipant();
  var result = query("selectMyAwardDetails" , {CurrentUserId: me.getIdentifier() });
  console.log(result);
}

/**
 * @param {hansung.ac.kr.transaction.selectMyUserInfoInEnt}  tx  - the member to be processed
 * @transaction
 */
function selectMyUserInfoInEnt (tx) {
  var me = getCurrentParticipant();
  var result = query("selectMyUserInfoInEnt" , {CurrentUserId: me.getIdentifier() });
  console.log(result);
}

/**
 * @param {hansung.ac.kr.transaction.selectMyUserInfoInSch}  tx  - the member to be processed
 * @transaction
 */
function selectMyUserInfoInSch (tx) {
  var me = getCurrentParticipant();
  var result = query("selectMyUserInfoInSch" , {CurrentUserId: me.getIdentifier() });
  console.log(result);
}







/* 
	Holding Functions 
   
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



*/






/**
 * @param {hansung.ac.kr.transaction.AddRequestUser} addRequestUser - the authorize to be processed
 * @transaction
 */
function addRequestUser(addRequestUser) {

    var me = getCurrentParticipant();
    var meType = null;
    var index = -1;
    var evetType = null;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    if(me.getFullyQualifiedType() === NAMESPACE_ORG) {
        meType = NAMESPACE_ORG;
        evetType = "OrganizationEvent"
    }

    else if(me.getFullyQualifiedType() === NAMESPACE_ENT) {
        meType = NAMESPACE_ENT;
        evetType = "OrganizationEvent"
    }

    else if(me.getFullyQualifiedType() === NAMESPACE_INS) {
        meType = NAMESPACE_INS;
        evetType = "OrganizationEvent"
    }

    if(!me.requestUser) {
        me.requestUser = [];
    }
    else {
        me.requestUser.findIndex(function getIndex(element, indexf, array) {
         if(element.getIdentifier() == addRequestUser.userId)
           index = indexf;
        });
    }

     if(index < 0) {
        me.requestUser.push(addRequestUser.user);

        return getParticipantRegistry(meType)
        .then(function (participantsRegistry) {
            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, evetType);
            event.txForUser = addRequestUser;
            emit(event);
            // persist the state of the member
            */
            return participantsRegistry.update(me);
        });
    }
  	else throw "Same Id already exist";

}









/**
 * @param {hansung.ac.kr.transaction.RevokeRequestUser} revokeRequestUser - the authorize to be processed
 * @transaction
 */
function revokeRequestUser(revokeRequestUser) {


      var me = getCurrentParticipant();
      var meType = null;
  	  var index = -1;

  	  if(!me) {
          throw new Error('getCurrentParticipant is null');
      }

  	  me.requestUser.findIndex(function testF(element, indexf, array){
              if(element.getIdentifier() == revokeRequestUser.userId ) {
               	 index = indexf;
              }
      });

      if(me.getFullyQualifiedType() === NAMESPACE_ORG) {
          meType = NAMESPACE_ORG;
      }

      else if(me.getFullyQualifiedType() === NAMESPACE_ENT) {
          meType = NAMESPACE_ENT;
      }

      else if(me.getFullyQualifiedType() === NAMESPACE_INS) {
          meType = NAMESPACE_INS;
      }

      if(index > -1) {
          me.requestUser.splice(index, 1);
          return getParticipantRegistry(meType)
          .then(function (typeRegistry) {
		      /*
              // emit an event
              var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'OrganizationEvent');
              event.txForOrg =  revokeRequestUser;
              emit(event);

              // persist the state of the member
               */
              return typeRegistry.update(me);
          });
      }
}



/**
 * @param {hansung.ac.kr.transaction.AddAuthorizedOrg} addAuthorizedOrg - the authorize to be processed
 * @transaction
 */
function addAuthorizedOrg(addAuthorizedOrg) {

    var me = getCurrentParticipant();
    var index = -1;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }


    if(!me.authorizedOrg) {
        me.authorizedOrg = [];
    }
 	else {
        me.authorizedOrg.findIndex(function getIndex(element, indexf, array) {
         if(element.getIdentifier() == addAuthorizedOrg.orgId)
           index = indexf;
        });
    }

     if(index < 0) {
        me.authorizedOrg.push(addAuthorizedOrg.organization);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {

            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'OrganizationEvent');
            event.txForOrg = addAuthorizedOrg;
            emit(event);
            */
            // persist the state of the member
            return userRegistry.update(me);
        });
    }

}

/**
 * @param {hansung.ac.kr.transaction.RevokeAuthorizedOrg} revokeAuthorizedOrg - the RevokeAccess to be processed
 * @transaction
 */
function revokeAuthorizedOrg(revokeAuthorizedOrg) {

    var me = getCurrentParticipant();
	var index = -1;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    me.authorizedOrg.findIndex(function testF(element, indexf, array){
        if(element.getIdentifier() == revokeAuthorizedOrg.orgId ) {
             index = indexf;
         }
    });

    if(index > -1) {
        me.authorizedOrg.splice(index, 1);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {
            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'OrganizationEvent');
            event.txForOrg =  revokeAuthorizedOrg;
            emit(event);
            */
            // persist the state of the member
            return userRegistry.update(me);
        });
    }
}




/**
 * @param {hansung.ac.kr.transaction.AddAuthorizedEnt} addAuthorizedEnt - the authorize to be processed
 * @transaction
 */
function addAuthorizedEnt(addAuthorizedEnt) {

    var me = getCurrentParticipant();
    var index = -1;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    if(!me.authorizedEnt) {
        me.authorizedEnt = [];
    }
    else {
        me.authorizedEnt.findIndex(function getIndex(element, indexf, array) {
          if(element.getIdentifier() == addAuthorizedEnt.entId)
            index = indexf;
        });
    }

     if(index < 0) {
        me.authorizedEnt.push(addAuthorizedEnt.enterprise);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {
            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'EnterpriseEvent');
            event.txForEnt = addAuthorizedEnt;
            emit(event);

            // persist the state of the member
            */
            return userRegistry.update(me);
        });
    }

}

/**
 * @param {hansung.ac.kr.transaction.RevokeAuthorizedEnt} revokeAuthorizedEnt - the RevokeAccess to be processed
 * @transaction
 */
function revokeAuthorizedEnt(revokeAuthorizedEnt) {

    var me = getCurrentParticipant();
	var index = -1;
    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    me.authorizedEnt.findIndex(function getIndex(element, indexf, array){
      if(element.getIdentifier() ==revokeAuthorizedEnt.entId)
        index = indexf;
    });

    if(index > -1) {
        me.authorizedEnt.splice(index, 1);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {
			/*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'EnterpriseEvent');
            event.txForEnt = revokeAuthorizedEnt;
            emit(event);

            // persist the state of the member
            */
            return userRegistry.update(me);
        });
    }
}



/**
 * @param {hansung.ac.kr.transaction.AddAuthorizedSch} addAuthorizedSch - the authorize to be processed
 * @transaction
 */
function addAuthorizedSch(addAuthorizedSch) {

    var me = getCurrentParticipant();
	var index = -1;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    if(!me.authorizedIns) {
        me.authorizedIns = [];
    }

    me.authorizedIns.findIndex(function getIndex(element, indexf, array) {
      if(element.getIdentifier() == addAuthorizedSch.insId)
        index = indexf;
    });

     if(index < 0) {
        me.authorizedIns.push(addAuthorizedSch.institutionForEdu);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {

            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SchoolEvent');
            event.txForSch = addAuthorizedSch;
            emit(event);

            // persist the state of the member
            */
            return userRegistry.update(me);
        });
    }

}

/**
 * @param {hansung.ac.kr.transaction.RevokeAuthorizedSch} revokeAuthorizedSch - the RevokeAccess to be processed
 * @transaction
 */
function revokeAuthorizedSch(revokeAuthorizedSch) {

    var me = getCurrentParticipant();
	var index = -1;

    if(!me) {
        throw new Error('getCurrentParticipant is null');
    }

    me.authorizedIns.forEach(function getIndex(element, indexf, array) {
     	if(element.getIdentifier() == revokeAuthorizedSch.insId)
          	index = indexf;
    });

    if(index > -1) {
        me.authorizedIns.splice(index, 1);

        return getParticipantRegistry(NAMESPACE_USER)
        .then(function (userRegistry) {

            /*
            // emit an event
            var event = getFactory().newEvent(NAMESPACE_EVENT_OR_TRANSACTION, 'SchoolEvent');
            event.txForSch = revokeAuthorizedSch;
            emit(event);

            // persist the state of the member
            */
            return userRegistry.update(me);
        });
    }

}
