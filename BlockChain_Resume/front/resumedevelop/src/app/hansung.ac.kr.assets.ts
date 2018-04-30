import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
import {Organization,Enterprise,School} from './hansung.ac.kr.participants';
// export namespace hansung.ac.kr.assets{
   export class ResumeInfoUser extends Asset {
      assetId: string;
      dob: Date;
      supportField: string;
      salaryRequirement: string;
      majorActivities: string;
      socialExperience: string;
      skillsAndCapabilities: string;
      publicOnOff: boolean;
      certificateList: Certificate[];
      awardList: AwardDetails[];
      userInfoInEnt: UserInfoInEnt[];
      userInfoInSch: UserInfoInSch[];
   }
   export class Certificate extends Asset {
      assetId: string;
      ownerId: string;
      parentResumeId: string;
      certificateName: string;
      certificateScore: number;
      issuingOrg: Organization;
      organizationName: string;
      dob: Date;
      expirationDate: Date;
      transactionTime: Date;
      publicOnOff: boolean;
   }
   export class AwardDetails extends Asset {
      assetId: string;
      ownerId: string;
      parentResumeId: string;
      contestName: string;
      issuingOrg: Organization;
      organizationName: string;
      dateOfAward: Date;
      transactionTime: Date;
      awardGrade: string;
      description: string;
      publicOnOff: boolean;
   }
   export class UserInfoInEnt extends Asset {
      assetId: string;
      ownerId: string;
      parentResumeId: string;
      issuingEnt: Enterprise;
      enterpriseName: string;
      userPosition: string;
      performingTask: string;
      dateOfEmployment: Date;
      retirementDate: Date;
      transactionTime: Date;
      publicOnOff: boolean;
   }
   export class UserInfoInSch extends Asset {
      assetId: string;
      ownerId: string;
      parentResumeId: string;
      issuingSch: School;
      schoolName: string;
      entranceDate: Date;
      graduationDate: Date;
      transactionTime: Date;
      majorField: string;
      gradeAverage: number;
      publicOnOff: boolean;
   }
   export class Address {
      street: string;
      house: string;
      city: string;
      county: string;
      country: string;
      zip: string;
   }
// }
